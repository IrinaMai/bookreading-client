import React from 'react';
import { Link } from 'react-router-dom';
import DefaultPageWrapper from './DefaultPageStyled';

const DefaultPage = () => {
  const isAuth = true;
  return (
    <DefaultPageWrapper>
      <p className="textError">
        Вказана сторінка не знайдена. Повернутися до<span> </span>
        {!isAuth && (
          <Link to="/login" className="linkError">
            бібліотеки
          </Link>
        )}
        {isAuth && (
          <Link to="/library" className="linkError">
            сторінки логіну
          </Link>
        )}
      </p>
    </DefaultPageWrapper>
  );
};
export default DefaultPage;
