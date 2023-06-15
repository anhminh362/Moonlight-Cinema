import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Hompage/Homepage';
import "./Styles/global.css";

import Show from './Components/Admin/Ad_Movie/CRUD/Show';
function App() {
  return (
    <Show/>
    
    // <Routes>
    //   <Route path="/" element={<Home />} />
    // </Routes>    
  );
}

export default App;
