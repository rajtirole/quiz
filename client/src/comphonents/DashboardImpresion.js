import React, { useEffect, useState } from "react";
import axios from 'axios'
const DashboardImpresion = () => {
    let [quiz,setquiz]=useState(90)
    let [ques,setques]=useState('')
    let [impression,setimpression]=useState('')
    useEffect(()=>{
        setquiz(12);
        setques(120)
        setimpression(300);
    },[])
  return (
    <>
     <div className="Dashboard1">
     <div className="DashboardImpressionCreatedQuiz">
        <h1>{quiz>999?(quiz/1000)+'K':quiz}</h1>
        <h3>Quiz</h3>
        <p>Created</p>
      </div>
      <div className="DashboardImpressionCreatedQuestion">
        <h1>{ques>999?(ques/1000)+'K':ques}</h1>
        <h3>Questions </h3>
        <p>Created</p>
      </div>
      <div className="DashboardImpressionCreatedImpression">
        <h1>{impression>999?(impression/1000)+'K':impression}</h1>
        <h3>Total</h3>
        <p>Impressions</p>
      </div>
     </div>
    </>
  );
};

export default DashboardImpresion;
