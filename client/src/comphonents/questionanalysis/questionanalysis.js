import React, { useState } from 'react'
import './Questionanalysis.css'
const Questionanalysis = () => {
    let [quizname,setquizname]=useState('quiz')
  return (
    <div className='quizanalysiscontainer'> 
       <div></div>
       <div>{quizname} Qestions Analysis</div>
    </div>
  )
}

export default Questionanalysis