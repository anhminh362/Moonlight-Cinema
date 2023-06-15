import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Hompage/Homepage';
import "./Styles/global.css";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>    
  );
}

export default App;
