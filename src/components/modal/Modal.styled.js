import styled from 'styled-components'

const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
  @media (min-width: 768px) {
    top: 0;
  }
  @media (min-width: 1280px) and (orientation: landscape) {
  }
  .open {
    overflow: hidden;
  }
  .close {
    overflow: visible;
  }
  .modal {
    position: absolute;
    top: 145px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    min-height: 50px;
    box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
    padding: 15px;
    z-index: 12000;

    @media (max-width: 767px) {
    }
    @media (min-width: 768px) {
      top: 49%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    @media (min-width: 1280px) and (orientation: landscape) {
      top: 50%;
      transform: translate(-50%, -50%)
    }
  }
`
export default ModalWindow
