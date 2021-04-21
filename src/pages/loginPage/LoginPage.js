import React from 'react';

import LoginForm from '../../components/loginForm/LoginForm';
import LoginWrapper from './LoginStyled';

const Login = () => {
	return (
		<LoginWrapper>
			<section className='container'>
				<LoginForm />
			</section>
		</LoginWrapper>
	);
};

export default Login;
