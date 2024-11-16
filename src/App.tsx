
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/singupcard";
import Login from "./components/logincard";




const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
