import styled from 'styled-components'

const ThemeBtnStyles = styled.div`
position: absolute;
top: 0;
left: 0;
transform: translate(-33px, 8px);

.themeBtn {
  display: inline-block;
  background: transparent;
  border: none;
  cursor: pointer;
  fill: #a6abb9;
  padding: 0px;
  transition: cubic-bezier(.69,.31,.13,.57) 1s;
}

.themeInput {
  position: absolute;
  display: none;
}

.themeInput:checked + .themeBtn {
  transform: rotate3d(0,1,0,1turn);
}
`
export default ThemeBtnStyles