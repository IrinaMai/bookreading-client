import styled from 'styled-components'

const InputDateContainer = styled.div`
  position: relative;

  & svg {
    position: absolute;
    top: 12px;
    left: 13px;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .formInputDate {
    width: 100%;
    height: 42px;
    padding: 5px 47px;
    border: 1px solid #a6abb9;
    background: transparent;
    outline: none;

    @media (min-width: 768px) {
      width: 250px;
    }

    &:focus {
        background-color: var(--secondary-background);
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
        }
  }
`
export default InputDateContainer
