import React from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import authOperations from '../../redux/operations/authOperations';
import { isAuth } from '../../redux/selectors/authSelectors';
import LoginFormWrapper from './LoginFormStyled';

const initialState = {
	email: '',
	password: '',
};

const LoginForm = () => {
	// const isAuthFlag = useSelector(isAuth);

	const validateSchema = yup.object().shape({
		email: yup.string().email('Введіть вірну адресу').required("Обов'язково"),
		password: yup
			.string()
			.min(8, 'Пароль не менш 8 символів')
			.max(16, 'Пароль не більш 16 символів')
			.typeError('Повинно бути строкою')
			.required("Обов'язково"),
	});

	const dispatch = useDispatch();

	const onHandleSubmit = values => {
		dispatch(authOperations.loginOperation(values));
	};

	return (
		<LoginFormWrapper>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validateSchema}
				onSubmit={values => {
					onHandleSubmit(values);
				}}>
				{({ values, isValid, dirty, isSubmitting }) => (
					<Form>
						<section className='form'>
							<label className='formLabel'>
								<span className='formLabelText'>Електронна адреса *</span>

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
								<span className='formLabelText'>Пароль *</span>

								<Field
									className='formInput'
									type='password'
									name='password'
									value={values.email}
									placeholder='Пароль'
								/>

								<ErrorMessage className='error' name='password' component='section' />
							</label>
						</section>

						<button
							className='formBtn'
							type='submit'
							disabled={!isValid && !dirty && isSubmitting}>
							<span>Увійти</span>
						</button>

						<p href='' target='_blank' rel='noreferrer noopener'>
							<a className='registr'>Реєстрація</a>
						</p>
					</Form>
				)}
			</Formik>
		</LoginFormWrapper>
	);
};

export default LoginForm;
