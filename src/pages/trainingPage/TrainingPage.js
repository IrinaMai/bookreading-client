import React from 'react'
import TrainingBooksList from '../../components/trainingBooksList/TrainingBooksList'
import TrainingForm from '../../components/trainingForm/TrainingForm'

const TrainingPage = () => {
  return (
    <div className="container">
      <h2>Training Page</h2>
      <TrainingForm/>
      <TrainingBooksList/>
    </div>
  )
}

export default TrainingPage
