import React from 'react'
import { useSelector } from 'react-redux'
import { getStatistics } from '../../redux/selectors/trainingSelectors'
import StatisticsStyled from './StatisticStyled'

const Statistics = () => {
  const statistic = useSelector(getStatistics)

  return (
    <StatisticsStyled>
      <p className="statisticTitle">Статистика</p>
      <ul className="statisticList">
        {statistic.map(({ _id, pages, date }) => (
          <li key={_id} className="statisticItem">
            <span className="date">{date?.split('-').reverse().join('.')}</span>
            <span className="pagesCount">{pages}</span>
            <span className="pagesText">стор.</span>
          </li>
        ))}
      </ul>
    </StatisticsStyled>
  )
}

export default Statistics
