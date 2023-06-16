import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Hompage/Homepage';
import "./Styles/global.css";
import Show from './Components/Admin/Ad_Movie/CRUD/Show';
import Schedule from './Components/Admin/Ad_Schedule/Ad_Schedule';
function App() {
  return (
    <Show/>
    // <Schedule/>
    
    // <Routes>
    //   <Route path="/" element={<Home />} />
    // </Routes>    
  );
}

export default App;
