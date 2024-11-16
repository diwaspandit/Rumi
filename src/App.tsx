import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/singupcard";
import Login from "./components/logincard";
import Dashboard from "./components/dashboard";
import QuestionCard from './components/questioncard'


const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Dashboard/>} />
        <QuestionCard initialQuestionNumber={1} />
      </Routes>
    </Router>
  );
};

export default App;
