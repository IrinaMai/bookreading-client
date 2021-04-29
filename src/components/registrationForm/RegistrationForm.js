import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import GoogleAuth from '../googleAuth/GoogleAuth';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import authOperations from '../../redux/operations/authOperations';
import RegistrationWrapper from './RegistrationFormStyled';

const RegistrationForm = () => {
	const [visiblePassword, setVisiblePassword] = useState(false);

	const handleClickVisiblePassword = e => {
		e.target.nodeName !== 'INPUT' && setVisiblePassword(!visiblePassword);
	};

	const validateSchema = yup.object().shape({
		name: yup.string().typeError('Повинна бути строкою').required("Обов'язково"),
		email: yup.string().email('Введіть вірну адресу').required("Обов'язково"),
		password: yup
			.string()
			.required("Обов'язково")
			.matches(
				'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$',
				'Не менше 8 символів, 1 верхній регістр, 1 нижній регістр, 1 число та 1 символ спеціального регістру'
			),
		confirmPassword: yup.string().when('password', {
			is: val => (val && val.length > 0 ? true : false),
			then: yup
				.string()
				.oneOf([yup.ref('password')], 'Both password need to be the same'),
		}),
	});

	const dispatch = useDispatch();

	const onHandleSubmit = values => {
		dispatch(
			authOperations.registerOperation({
				name: values.name,
				email: values.email,
				password: values.password,
			})
		);
	};

	return (
		<RegistrationWrapper>
			<section className='google'>
				<GoogleAuth />
			</section>

			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={validateSchema}
				isInitialValid={false}
				onSubmit={values => {
					onHandleSubmit(values);
				}}>
				{({
					values,
					isValid,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<Form>
						<section className='form'>
							<label className='formLabel'>
								<p className='formLabelText'>
									Ім'я <span className='text'>*</span>
								</p>

								<Field
									className='formInput'
									type='text'
									name='name'
									value={values.name}
									placeholder='...'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								<ErrorMessage className='error' name='name' component='div' />
							</label>

							<label className='formLabel'>
								<p className='formLabelText'>
									Електронна адреса <span className='text'>*</span>
								</p>

								<Field
									className='formInput'
									type='email'
									name='email'
									value={values.email}
									placeholder='your@email.com'
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<ErrorMessage className='error' name='email' component='section' />
							</label>

							<label className='formLabel'>
								<p className='formLabelText'>
									Пароль <span className='text'>*</span>
								</p>

								<Field
									className='formInput password'
									type={visiblePassword ? 'text' : 'password'}
									name='password'
									value={values.password}
									placeholder='...'
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<i
									className={`fa ${
										visiblePassword ? 'fa-eye' : 'fa-eye-slash'
									} password-icon`}
									onClick={handleClickVisiblePassword}
								/>

								<ErrorMessage className='error' name='password' component='section' />
							</label>

							<label className='formLabel'>
								<p className='formLabelText'>
									Підтвердити пароль <span className='text'>*</span>
								</p>

								<Field
									className='formInput password'
									type={visiblePassword ? 'text' : 'password'}
									name='confirmPassword'
									value={values.confirmPassword}
									placeholder='...'
									onBlur={handleBlur}
									onChange={handleChange}
								/>

								<i
									className={`fa ${
										visiblePassword ? 'fa-eye' : 'fa-eye-slash'
									} confirmPassword-icon`}
									onClick={handleClickVisiblePassword}
								/>

								<ErrorMessage
									className='error'
									name='confirmPassword'
									component='section'
								/>
							</label>
						</section>

						<button
							onClick={handleSubmit}
							className='formBtn'
							disabled={!(isValid && dirty) && isSubmitting}
							type='submit'>
							<span className='formBtnText'>Зареєструватися</span>
						</button>

						<p className='formLink'>
							<p className='formLinkText'>
								Вже з нами?
								<a className='login' href='/login'>
									Увійти
								</a>
							</p>
						</p>
					</Form>
				)}
			</Formik>
		</RegistrationWrapper>
	);
};

export default RegistrationForm;
