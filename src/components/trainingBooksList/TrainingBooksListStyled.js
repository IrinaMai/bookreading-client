import styled from 'styled-components'

const Wrapper = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: orange;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 3px;
  }

  .bookListItem-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .bookListItem-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms linear;
  }
  .bookListItem-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .bookListItem-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms linear;
  }
`
export default Wrapper
