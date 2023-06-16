import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Hompage/Homepage';
import "./Styles/global.css";
import Show from './Components/Admin/Ad_Movie/CRUD/Show';
import Register from './Components/Auth/RegisterPage';
import LoginForm from './Components/Auth/LoginPage';
import VerifyCode from './Components/Auth/VerifyCodePage';
import UserInfo from './Components/Auth/UserInfo';
function App() {
  return (
    // <Home/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<LoginForm/>} />
      <Route path="/verifycode" element={<VerifyCode/>} />
      <Route path="/UserInfo" element={<UserInfo/>} />
    </Routes>    
    
  );
}

export default App;
