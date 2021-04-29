import styled from 'styled-components'

const TimerContainerSyled = styled.div`
  margin-bottom: 30px;
  min-width: 264px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }

  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`

export default TimerContainerSyled
