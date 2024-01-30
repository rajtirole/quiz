import React from 'react'
import DashboardSideComphonent from '../comphonents/DashboardSideComphonent'
import './question.css'
import AnalyticsQuiz from '../comphonents/anaysiss/AnalyticsQuiz'

const question = () => {
  return (
   <>
   <div className='quescontainer'>
   <DashboardSideComphonent></DashboardSideComphonent>
   <AnalyticsQuiz></AnalyticsQuiz>
    </div></>
  )
}

export default question