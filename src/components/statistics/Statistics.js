import React from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getStatistics } from '../../redux/selectors/trainingSelectors'
import StatisticItem from './statisticsItem/StatisticItem'
import StatisticsStyled from './StatisticStyled'

const Statistics = () => {
  const statistic = useSelector(getStatistics)
  const statisticSorted = statistic
    ?.slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <StatisticsStyled>
      <p className="statisticTitle">Статистика</p>
      <TransitionGroup component="ul" className="statisticList">
        {statisticSorted?.map(item => (
          <CSSTransition
            key={item._id}
            timeout={250}
            classNames="statisticListItem"
          >
            <StatisticItem {...item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </StatisticsStyled>
  )
}

export default Statistics
