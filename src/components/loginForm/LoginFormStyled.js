import styled from 'styled-components';

const LoginFormWrapper = styled.section`
	width: 270px;

	@media screen and (min-width: 768px) {
		width: 400px;
	}
	.formLabelText {
		font-weight: 600;
		font-size: 14px;
		line-height: 2.71;
		color: var(--secondary-background);
	}

	.error {
		color: #e63946;
		font-size: 1rem;
	}

	.formLabel {
		/* position: relative;
		display: flex; */
		height: 35.5px;
		/* border-bottom: 1px solid #e0e0e0; */
		&:not(:last-child) {
			margin-bottom: 48px;
		}
	}

	.formInput {
		display: block;
		padding-left: 10px;
		width: 270px;
		height: 35.5px;
		flex-grow: 1;
		@media (min-width: 1280px) {
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
		color: #fff;
		box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

		width: 100%;
		height: 44px;
		display: block;
		margin-top: 30px;
		margin-bottom: 5px;

		@media (max-width: 767px) {
			/* display: block;
			margin: 0 auto; */
			/* margin-top: 60px; */
			/* margin-bottom: 15px; */
		}
		@media screen and (min-width: 768px) {
			/* margin-top: 60px; */
		}

		&:hover,
		&:focus {
			cursor: pointer;
			outline: none;
			background-color: var(--secondary-background);
			color: var(--accent-color);
		}
	}

	.formBtnText {
		font-weight: 700;
		font-size: 14px;
		line-height: 1.2;
	}

	.registr {
		color: var(--accent-color);
		text-decoration: underline;
		cursor: pointer;

		&:hover {
			color: var(--secondary-background);
		}
	}
`;

export default LoginFormWrapper;
