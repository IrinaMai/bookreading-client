import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import LoginForm from '../../components/loginForm/LoginForm';
import LoginSideBar from '../../components/loginSideBar/LoginSideBar';
import LoginWrapper from './LoginStyled';

const Login = () => {
	const onlyWidth = useWindowWidth();

	return (
		<LoginWrapper>
			<section className='rightSideBar'>
				<section className='container'>
					<section className='loginForm'>
						<LoginForm />
					</section>
				</section>

				<section className='loginSideBar'>
					{onlyWidth >= 1280 && <LoginSideBar />}
				</section>
			</section>

			<section className='loginSideBar'>
				{onlyWidth < 1280 && <LoginSideBar />}
			</section>
		</LoginWrapper>
	);
};

export default Login;
