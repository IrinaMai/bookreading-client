import styled from "styled-components";

const FormBook = styled.form`
display: block;
width: 320px;


font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 2.714;
color: #898F9F;

.bookInput {
    background: #F6F7FB;
    border: 1px solid #A6ABB9;
    outline: none;
    &:focus {
        background: #FFFFFF;
    border: none;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    }
}


`

export default FormBook