import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Hompage/Homepage';
import LoginForm from './Components/Auth/LoginPage';
import Register from './Components/Auth/RegisterPage';
import VerifyCode from './Components/Auth/VerifyCodePage';
import "./Styles/global.css";
import UserInfo from './Components/Auth/UserInfo';
import ShowUser from './Components/Admin/Ad_User/CRUD/Show';
import UserDelete from './Components/Admin/Ad_User/CRUD/Delete';
import BlockUser from './Components/Admin/Ad_User/CRUD/Block';
import UnblockUser from './Components/Admin/Ad_User/CRUD/UnBlock';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<LoginForm/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/VerifyCode" element={<VerifyCode/>} />
      <Route path="/UserInfo" element={<UserInfo/>} />
      <Route path="/ShowUser" element={<ShowUser/>} />
      <Route path="/Delete/:id" element={<UserDelete/>} />
      <Route path="/BlockUser/:id" element={<BlockUser/>} />
      <Route path="/UnBlockUser/:id" element={<UnblockUser />} />
    </Routes>    
  );
}

export default App;

