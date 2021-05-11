import styled from 'styled-components';
import icon from '../../assets/images/login/icon.svg';

const LoginSideBarWrapper = styled.section`
	background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};

	@media screen and (max-width: 767px) {
		padding: 50px 0px 58px 0px;
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		padding: 40px 40px 30px 40px;
	}

	.loginSideBar {
		background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};
		width: 229px;
		margin: 0 auto;
		text-align: center;

		@media screen and (min-width: 768px) {
			width: 526px;
		}
		@media screen and (min-width: 1280px) {
			width: 485px;
		}
	}

	.icon {
		background-image: url(${icon});
		background-repeat: no-repeat;
		background-size: contain;
		width: 27px;
		height: 27px;

		margin: 0 auto;
		margin-bottom: 15px;

		@media screen and (min-width: 768px) {
			width: 31px;
			height: 31px;
		}
	}

	.text {
		font-weight: 500;
		font-size: 13px;
		line-height: 1.23;
		color: var(--main-text);
		margin-bottom: 20px;

		@media screen and (min-width: 768px) {
			font-size: 24px;
			line-height: 1.583;
			margin-bottom: 28px;
		}
	}

	.name {
		width: 100px;
		margin: 0 auto;

		font-weight: 500;
		font-size: 14px;
		line-height: 2.71;
		color: var(--secondary-text);
		border-top: 1px solid rgba(36, 42, 55, 0.5);

		@media screen and (min-width: 768px) {
			font-size: 20px;
			line-height: 1.9;
		}
	}
`;

export default LoginSideBarWrapper;
