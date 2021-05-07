import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import GoogleAuth from '../googleAuth/GoogleAuth';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import authOperations from '../../redux/operations/authOperations';
import LoginFormWrapper from './LoginFormStyled';
import Notification from '../notification/Notification';
import { useSelector } from 'react-redux';
import notifSelectors from '../../redux/selectors/notifSelectors';
import errorSelector from '../../redux/selectors/errorSelector';

const LoginForm = () => {
	const [visiblePassword, setVisiblePassword] = useState(false);

	const handleClickVisiblePassword = e => {
		e.target.nodeName !== 'INPUT' && setVisiblePassword(!visiblePassword);
	};

	const validateSchema = yup.object().shape({
		email: yup.string().email('Введіть вірну адресу').required("Обов'язково"),
		password: yup
			.string()
			.required("Обов'язково")
			.matches(
				'^(?=.*[0-9])(?=.*[!@#$%^&*"№;:?])[а-яА-ЯёЁa-zA-Z0-9!@#$%^&*"№;:?]{8,16}$',
				'Не менше 8 символів, 1 верхній регістр, 1 нижній регістр, 1 число та 1 символ спеціального регістру'
			),
	});

	const dispatch = useDispatch();

	const notification = useSelector(notifSelectors.getNotifState)
	const serverError = useSelector(errorSelector.getError)

	const onHandleSubmit = async values => {
		await dispatch(authOperations.loginOperation(values));
	};	

	return (
		<LoginFormWrapper>
			<section className='google'>
				<GoogleAuth />
			</section>

			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validateSchema}
				onSubmit={async values => {
					await onHandleSubmit(values);
				}}>
				{({ values, isValid, isSubmitting }) => (
					<Form>
						<section className='form'>
						<Notification notification={notification} error={serverError}/>
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
							className='formBtn'
							disabled={!isValid || isSubmitting}
							type='submit'>
							<span className='formBtnText'>Увійти</span>
						</button>

						<p className='formLink'>
							<a className='registr' href='/register'>
								Реєстрація
							</a>
						</p>
					</Form>
				)}
			</Formik>
		</LoginFormWrapper>
	);
};

export default LoginForm;
