import styled from 'styled-components'

const GoogleAuthStyled = styled.div`
margin-left: 10px;
margin-top: 10px;
.googleBtn {
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 38px;
    text-align: center;
    color: #707375;
    background-color: ${(props) => props.theme.MAIN_BACKGROUND};
    box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
    width: 150px;
    height: 40px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.googleBtn:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.googleIcon {
    display: inline-block;
    position: absolute;
    left: 14px;
    top: 9px;
}
`

export default GoogleAuthStyled