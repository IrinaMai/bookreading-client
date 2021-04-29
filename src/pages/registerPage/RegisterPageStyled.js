import styled from 'styled-components';

import imageMobile from '../../assets/images/login/mobile1x.jpg';
import overlayMobile from '../../assets/images/login/overlayMob.png';

import imageDesk from '../../assets/images/login/loginDesktop.jpg';
// import overlayDesk from '../../assets/images/login/overlayDesk.png';
// import imageDesk from '../../assets/images/login/desktop1x.jpg';

const RegisterWrapper = styled.section`
	background-repeat: no-repeat;
	background-size: cover;

	position: relative;

	@media (max-width: 767px) {
		padding-top: 30px;
		background-image: url(${overlayMobile}), url(${imageMobile});
	}

	@media (min-width: 1280px) {
		background-image: url(${imageDesk});
		padding: 185px 0px;
	}

	.loginForm {
		@media screen and (min-width: 768px) and (max-width: 1279px) {
			padding: 70px 144px;
		}
		@media (min-width: 1280px) {
			padding-left: 50px;
		}
	}

	.rightSideBar {
		@media (min-width: 1280px) {
			display: flex;
		}
	}

	.loginSideBar {
		@media (min-width: 1280px) {
			position: absolute;
			top: 30%;
			right: 10%;
		}
	}
`;

export default RegisterWrapper;
