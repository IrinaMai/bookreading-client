import React from 'react';
import RegistrSideBarWrapper from './RegistrSideBarStyled';

const RegistrSideBar = () => {
	return (
		<RegistrSideBarWrapper>
			<section className='loginSideBar'>
				<h1 className='title'>Books Reading</h1>

				<ul className='list'>
					<h2 className='list-title'>Допоможе вам</h2>

					<li className='list-item'>
						<p className='list-icon'></p>
						<p className='list-text'>
							Швидше сформулювати свою ціль і розпочати читати
						</p>
					</li>

					<li className='list-item'>
						<p className='list-icon'></p>
						<p className='list-text'>
							Пропорційно розподілити навантаження на кожний день
						</p>
					</li>

					<li className='list-item'>
						<p className='list-icon'></p>
						<p className='list-text'>Відстежувати особистий успіх</p>
					</li>
				</ul>

				<ul className='list'>
					<h2 className='list-title'>Також ви зможете </h2>

					<li className='list-item'>
						<p className='list-icon'></p>
						<p className='list-text'>Формувати особисту думку незалежну від інших</p>
					</li>

					<li className='list-item'>
						<p className='list-icon'></p>
						<p className='list-text'>
							Підвищити свої професійні якості опираючись на нові знання
						</p>
					</li>

					<li className='list-item'>
						<p className='list-icon'></p>
						<p className='list-text'>Стати цікавим співрозмовником</p>
					</li>
				</ul>
			</section>
		</RegistrSideBarWrapper>
	);
};

export default RegistrSideBar;
