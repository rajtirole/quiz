import Dashboardquizmodel from "../model/dashboardquiz.model.js";
import Dashboardquestionmodel from "../model/dashboardquestion.model.js";
const getDashboardData=async()=>{
console.log('get dashboard data');
try {
    const question=await Dashboardquizmodel.create()

    const quiz = await Dashboardquestionmodel.create({
        quizname:'quiznme',
        question:'falskdfl',
      });
    // console.log(data);
    console.log(dataa);
    await dataa.save();
    
} catch (error) {
    console.log(error);
}

    
}
export {getDashboardData}