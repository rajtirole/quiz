import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./pages/question";
import Questionanalysis from "./pages/questionanalysis";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/analysis" element={<Question></Question>}>
            {/* <Route index element={<Question />} /> */}
           
          </Route>
          <Route path="/:quizId" element={<Questionanalysis></Questionanalysis>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
