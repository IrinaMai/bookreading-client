import React from 'react';

import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import RegisterWrapper from './RegisterPageStyled';

const RegisterPage = () => {
	return (
		<RegisterWrapper>
			<section>
				<RegistrationForm />
			</section>
		</RegisterWrapper>
	);
};

export default RegisterPage;
