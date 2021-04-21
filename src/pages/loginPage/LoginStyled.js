import styled from 'styled-components';
import imageMobile from '../../assets/images/login/loginMobile1x.jpg';
import imageTablet from '../../assets/images/login/loginTablet1x.jpg';
import imageDesktop from '../../assets/images/login/loginDesktop1x.jpg';

const LoginWrapper = styled.section`
	padding-top: 124px;
	padding-bottom: 380px;

	width: 100%;
	background-repeat: no-repeat;
	/* background-position: center; */
	background-image: url(${imageMobile});

	@media (min-width: 768px) {
		background-image: url(${imageTablet});
		padding-top: 70px;
		padding-bottom: 792px;
	}

	@media (min-width: 1280px) {
		background-image: url(${imageDesktop});
		padding-top: 185px;
		padding-bottom: 500px;
	}
`;

export default LoginWrapper;
