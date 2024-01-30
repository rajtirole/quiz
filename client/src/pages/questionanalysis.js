import React from 'react'
import DashboardSideComphonent from '../comphonents/DashboardSideComphonent'
import './question.css'
import Questionanalysispage from '../comphonents/questionanalysis/questionanalysis'
const Questionanalysis = () => {
  return (
    <><div className='quescontainer'>
    <DashboardSideComphonent></DashboardSideComphonent>
    <Questionanalysispage></Questionanalysispage>
    </div>
    </>
  )
}

export default Questionanalysis