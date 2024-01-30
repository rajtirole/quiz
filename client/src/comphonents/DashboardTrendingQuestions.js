import React, { useState } from "react";

const DashboardTrendingQuestions = () => {
    let [quiznumber, setquiznumber] = useState(1);
    let [impression, setimpression] = useState(50);
    let [created, setcreated] = useState("05 sep");
  return (
    <div className="quizz">
    <div className="quiznumber">
      <div>Quiz {quiznumber}</div>
      <div>{impression}logo</div>
    </div>
    <div className="created">Created on:{created}</div>
  </div>
  )
}

export default DashboardTrendingQuestions