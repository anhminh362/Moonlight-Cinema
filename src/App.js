import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Hompage/Homepage';
import "./Styles/global.css";
import ShowUser from './Components/Admin/Ad_User/CRUD/Show';
import UserDelete from './Components/Admin/Ad_User/CRUD/Delete';
import BlockUser from './Components/Admin/Ad_User/CRUD/Block';
import UnblockUser from './Components/Admin/Ad_User/CRUD/UnBlock';
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
          <Route path="/ShowUser" element={<ShowUser/>} />
      <Route path="/Delete/:id" element={<UserDelete/>} />
      <Route path="/BlockUser/:id" element={<BlockUser/>} />
      <Route path="/UnBlockUser/:id" element={<UnblockUser />} />
      <Route path="/Show" element={<Show />} />
    </Routes>    
    

  );
}

export default App;

