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
		username: yup
			.string()
			.typeError('Повинна бути строкою')
			.required("Обов'язково"),
		email: yup.string().email('Введіть вірну адресу').required("Обов'язково"),
		password: yup
			.string()
			.required("Обов'язково")
			.matches(
				'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$',
				'Не менше 8 символів, 1 верхній регістр, 1 нижній регістр, 1 число та 1 символ спеціального регістру'
			),
	});

	const dispatch = useDispatch();

	const onHandleSubmit = values => {
		dispatch(authOperations.registerOperation(values));
	};

	return (
		<RegistrationWrapper>
			<section className='google'>
				<GoogleAuth />
			</section>

			<Formik
				initialValues={{ username: '', email: '', password: '' }}
				validationSchema={validateSchema}
				isInitialValid={false}
				onSubmit={values => {
					onHandleSubmit(values);
				}}>
				{({ values, isValid, dirty, isSubmitting, handleSubmit }) => (
					<Form>
						<section className='form'>
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
								/>

								<ErrorMessage className='error' name='email' component='section' />
							</label>

							<label className='formLabel'>
								<p className='formLabelText'>
									Пароль <span className='text'>*</span>
								</p>

								<Field
									className='formInput'
									type={visiblePassword ? 'text' : 'password'}
									name='password'
									value={values.password}
									placeholder='Пароль'
								/>

								<i
									className={`fa ${
										visiblePassword ? 'fa-eye' : 'fa-eye-slash'
									} password-icon`}
									onClick={handleClickVisiblePassword}
								/>

								<ErrorMessage className='error' name='password' component='section' />
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
							<p className='formLinkText'>Вже з нами?</p>
							<a className='login' href='/login'>
								Увійти
							</a>
						</p>
					</Form>
				)}
			</Formik>
		</RegistrationWrapper>
	);
};

export default RegistrationForm;
