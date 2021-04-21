import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DefaultPageWrapper from './DefaultPageStyled';
import authSelectors from '../../redux/selectors/authSelectors';

const DefaultPage = () => {
  const isAuth = useSelector(authSelectors.isAuth);
  return (
    <DefaultPageWrapper>
      <p className="textError">
        Вказана сторінка не знайдена. Повернутися до<span> </span>
        {!isAuth && (
          <Link to="/login" className="linkError">
            сторінки логіну
          </Link>
        )}
        {isAuth && (
          <Link to="/library" className="linkError">
            бібліотеки
          </Link>
        )}
      </p>
    </DefaultPageWrapper>
  );
};
export default DefaultPage;
