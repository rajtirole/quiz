import React from 'react'
import './DashboardSideComphonent.css'
import axios from 'axios';
import vectorimage from '../assets/Vector1.png'
import { Outlet, Link } from "react-router-dom";


function logoutHandler(){
    try {
        // let res=axios.get("http://localhost:5400/api/v1/user/logout")
        // console.log(res);
        console.log('logout succesful');
       

    } catch (error) {
        console.log(error);
        
    }
}
const DashboardSideComphonent = () => {
  
  return (
    <div className='DashboardSideContainer' >
        <div className='quizzie'>QUIZZIE</div>
        <div className='SideBarContainer'>
            <div> 
            <Link to="/dashboard">Dashboard</Link>
</div>
            <div><Link to="/analysis">Analytics</Link></div>
            <div><Link to="/createQuiz">Create Quiz</Link></div>

        </div>
       
        <div className='logout' onClick={logoutHandler}>
        <img src={vectorimage}/>
        <div>  <Link to="/">LOGOUT</Link></div>
           </div>
    </div>
  )
}

export default DashboardSideComphonent