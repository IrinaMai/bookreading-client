import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
display: block;
margin: 20px auto;
text-decoration: none;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 2.71;

text-align: center;
color: #FFFFFF;
border: none;
outline: none;

background-color: #FF6B08;
&:hover,
&:focus {
    background-color: #D15807;
};

@media (max-width: 767px){
font-weight: 500;
font-size: 14px;
line-height: 2.71;
width: 171px;
height: 42px;
};

@media (min-width: 768px){
font-weight: 600;
font-size: 16px;
line-height: 2.37;
width: 200px;
height: 40px;
};

`
export default Button
