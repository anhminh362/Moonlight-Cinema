import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Hompage/Homepage';
import LoginForm from './Components/Auth/LoginPage';
import Register from './Components/Auth/RegisterPage';
import VerifyCode from './Components/Auth/VerifyCodePage';
import "./Styles/global.css";
import UserInfo from './Components/Auth/UserInfo';
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<LoginForm/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/VerifyCode" element={<VerifyCode/>} />
      <Route path="/UserInfo" element={<UserInfo/>} />
    </Routes>    
  );
}

export default App;

