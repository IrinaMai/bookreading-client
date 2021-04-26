import React from 'react';
import LoginSideBarWrapper from './LoginSideBarStyled';

const LoginSideBar = () => {
	return (
		<LoginSideBarWrapper>
			<section className='loginSideBar'>
				<p className='icon'></p>
				<p className='text'>
					Книги — это корабли мысли, странствующие по волнам времени и бережно
					несущие свой драгоценный груз от поколения к поколению.
				</p>
				<p className='name'>Бэкон Ф.</p>
			</section>
		</LoginSideBarWrapper>
	);
};

export default LoginSideBar;
