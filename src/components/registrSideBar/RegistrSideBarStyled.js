import styled from 'styled-components';
import icon from '../../assets/images/registr/icon.svg';

const RegistrSideBarWrapper = styled.section`
	background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};;

	@media screen and (max-width: 767px) {
		padding: 50px 0px 58px 0px;
	}
	@media screen and (min-width: 768px) and (max-width: 1279px) {
		padding: 40px 40px 30px 40px;
	}

	.loginSideBar {
		background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};;
		width: 270px;
		margin: 0 auto;
		text-align: center;

		@media screen and (min-width: 768px) {
			width: 477px;
		}
	}

	.title {
		font-family: Abril Fatface;
		margin-bottom: 15px;

		font-weight: 400;
		font-size: 34px;
		line-height: 1.118;

		@media screen and (min-width: 768px) {
			margin-bottom: 40px;
		}
		@media screen and (min-width: 1280px) {
			margin-bottom: 50px;
		}
	}

	.list {
		text-align: left;

		&:not(:last-child) {
			margin-bottom: 10px;
		}

		&-title {
			margin-bottom: 10px;
			font-weight: 500;
			font-size: 20px;
			line-height: 1.9;
			color: ${(props) => props.theme.MAIN_TEXT};
		}

		&-item {
			display: flex;
			align-items: center;

			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}

		&-text {
			font-weight: 500;
			font-size: 14px;
			line-height: 1.3;
			color: var(--secondary-text);

			@media screen and (min-width: 768px) {
				font-size: 14px;
				line-height: 2.71;
			}
		}

		&-icon {
			background-image: url(${icon});
			background-repeat: no-repeat;
			width: 10px;
			height: 10px;

			margin-right: 10px;
		}
	}
`;

export default RegistrSideBarWrapper;
