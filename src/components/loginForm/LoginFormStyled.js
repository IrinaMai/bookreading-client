import styled from 'styled-components';

const LoginFormWrapper = styled.section`
	width: 270px;
	padding-bottom: 40px;
	margin: 0 auto;

	@media screen and (min-width: 768px) {
		min-width: 400px;
		min-height: 420px;
		background-color: var(--secondary-background);
		padding: 40px 40px 25px 40px;
	}

	@media screen and (min-width: 1280px) {
		padding: 40px 40px 30px 40px;
	}

	.text {
		color: var(--accent-color);
		font-size: 17px;
	}

	//-------------------------------

	.password-icon {
		cursor: pointer;
		position: absolute;
		top: 57px;
		left: 230px;
		@media (min-width: 768px) {
			top: 57px;
			left: 270px;
		}
	}
	//----------------------------------

	.google {
		width: 150px;
		height: 40px;
		margin: 0 auto;
		display: block;
		margin-bottom: 20px;
	}

	.formLabelText {
		font-weight: 600;
		font-size: 14px;
		line-height: 2.71;
		color: var(--secondary-background);

		@media screen and (min-width: 768px) {
			color: var(--secondary-text);
		}
	}

	.error {
		color: #e63946;
		font-size: 10px;
		width: 270px;

		position: absolute;
	}

	.formLabel {
		position: relative;
		display: block;

		margin-bottom: 28px;

		@media screen and (min-width: 768px) {
			&:not(:last-child) {
				margin-bottom: 30px;
			}
		}
	}

	.formInput {
		position: relative;

		display: block;
		padding-left: 10px;
		width: 270px;
		height: 42px;
		border: none;
		box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

		@media screen and (min-width: 768px) {
			width: 320px;
		}
	}
	.formInput:focus {
		outline: none;
	}

	.formBtn {
		padding: 13px 48px;
		border: 1px solid var(--accent-color);
		background-color: var(--accent-color);
		color: var(--secondary-background);
		box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

		width: 100%;
		height: 44px;
		display: block;
		margin-top: 40px;
		margin-bottom: 15px;
		transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

		@media screen and (min-width: 768px) {
			height: 42px;
			padding: 11px 131px 11px 132px;
		}

		&:focus:not([disabled]),
		&:hover:not([disabled]) {
			cursor: pointer;
			outline: none;

			color: var(--accent-color);
			border-color: #d15807;
			background: #d15807;
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
		}

		&:disabled {
			border: none;
			background-color: #ff6b08a8;
		}
	}

	.formBtnText {
		font-weight: 700;
		font-size: 14px;
		line-height: 1.2;
	}

	.registr {
		display: block;
		text-align: center;
		text-decoration: underline;
		cursor: pointer;
		color: var(--accent-color);

		&:hover {
			color: var(--secondary-background);
		}

		@media screen and (min-width: 768px) {
			&:hover {
				color: var(--secondary-text);
			}
		}
	}
`;

export default LoginFormWrapper;
