import DashboardTrendingQuestions from './DashboardTrendingQuestions'
import './Dashboard.css'

const DashboardTrending = () => {
 
  let questions=new Array(12);
  for (let index = 0; index < questions.length; index++) {
   questions[index]=<DashboardTrendingQuestions></DashboardTrendingQuestions>;
    
  }
  return (
    <div className='DashboardTrending'>
      <h1>Trending Quizs</h1>
      <div className='quizcontainer'>
       
     {/* { console.log(questions)} */}
    
     {questions}
      </div>
    </div>
  )
}

export default DashboardTrending