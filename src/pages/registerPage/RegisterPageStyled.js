import styled from 'styled-components';
import imageMobile from '../../assets/images/login/mobile1x.jpg';
import overlayMobile from '../../assets/images/login/overlayMob.png';

import imageTablet from '../../assets/images/login/tablet1x.jpg';
import overlayTablet from '../../assets/images/login/overlayTabl.png';

import overlayDesk from '../../assets/images/login/overlayDesk.png';
import imageDesk from '../../assets/images/login/desktop1x.jpg';

const RegisterWrapper = styled.section`
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;

	@media (max-width: 767px) {
		padding-top: 30px;
		background-image: url(${overlayMobile}), url(${imageMobile});
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		background-image: url(${overlayTablet}), url(${imageTablet});
	}

	@media (min-width: 1280px) {
		display: flex;
	}

	.login {
		@media (min-width: 1280px) {
			background-image: url(${overlayDesk}), url(${imageDesk});
			background-repeat: no-repeat;
			padding: 92px 82px 185px 83px;
		}
	}
	.RegistrForm {
		@media screen and (min-width: 768px) and (max-width: 1279px) {
			padding: 70px 144px;
		}
	}

	.rightSideBar {
		@media (min-width: 1280px) {
			background-color: var(--secondary-background);
			width: 100%;
		}
	}
	.registrSideBar {
		@media (min-width: 1280px) {
			position: absolute;
			top: 13%;
			right: 10%;
		}
		@media (min-width: 1500px) {
			top: 13%;
			right: 20%;
		}
	}
`;

export default RegisterWrapper;
