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
import Detail from './Components/MovieDetail/MovieDetail';

import ShowSchedule from './Components/Admin/Ad_Schedule/CRUD/Show';
import Upcomingg from './Components/ListMovies/Upcoming/Upcoming';
import Playing from './Components/ListMovies/Playing/Playing';

import BookTicket from './Components/Booking/BookTicket/BookTicket';

function App() {
  return (
    // <Home/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail/:id" element={<Detail />} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<LoginForm/>} />
      <Route path="/verifycode" element={<VerifyCode/>} />
      <Route path="/UserInfo" element={<UserInfo/>} />
      <Route path="/ShowUser" element={<ShowUser/>} />
      <Route path="/Delete/:id" element={<UserDelete/>} />
      <Route path="/BlockUser/:id" element={<BlockUser/>} />
      <Route path="/UnBlockUser/:id" element={<UnblockUser />} />
      <Route path="/Show" element={<Show />} />
      <Route path="/ShowSchedule" element={<ShowSchedule/>} />
      <Route path="/Upcomingg" element={<Upcomingg/>} />
      <Route path="/Playing" element={<Playing/>} />
      <Route path="/BookTicket/:id" element={<BookTicket/>}/>
      

    </Routes>    
    

  );
}

export default App;

