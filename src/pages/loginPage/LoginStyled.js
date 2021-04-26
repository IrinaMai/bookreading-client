import styled from 'styled-components';
import imageMobile from '../../assets/images/login/mobile1x.jpg';
import overlayMobile from '../../assets/images/login/overlayMob.png';

import imageDesk from '../../assets/images/login/loginDesktop.jpg';

const LoginWrapper = styled.section`
	width: 100%;
	max-height: 400px;

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-image: url(${overlayMobile}), url(${imageMobile});

	position: relative;

	@media (max-width: 767px) {
		padding-top: 30px;
		padding-bottom: 30px;
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		max-height: 620px;
	}

	@media (min-width: 1280px) {
		width: 100%;
		min-height: 850px;

		background-image: url(${imageDesk});
		padding: 185px 82px 185px 43px;
	}

	.loginForm {
		@media screen and (min-width: 768px) and (max-width: 1279px) {
			padding: 70px 144px;
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
			top: 100px;
			right: 60px;
		}
	}
`;

export default LoginWrapper;
