import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import RegistrSideBar from '../../components/registrSideBar/RegistrSideBar';
import RegisterWrapper from './RegisterPageStyled';

const RegisterPage = () => {
	return (
		<RegisterWrapper>
			<section className='login'>
				<section className='RegistrForm'>
					<RegistrationForm />
				</section>
			</section>

			<section className='rightSideBar'>
				<section className='loginSideBar'>
					{onlyWidth >= 1280 && <RegistrSideBar />}
				</section>
			</section>

			<section className='loginSideBar'>
				{onlyWidth < 1280 && <RegistrSideBar />}
			</section>

			<section></section>
		</RegisterWrapper>
	);
};

export default RegisterPage;
