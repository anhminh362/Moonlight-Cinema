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
import PaymentResult from './Components/Payment/PaymentResult';
import ShowSchedule from './Components/Admin/Ad_Schedule/CRUD/Show';
import Upcoming from './Components/ListMovies/Upcoming/Upcoming';
import Playing from './Components/ListMovies/Playing/Playing';
import BookTicket from './Components/Booking/BookTicket/BookTicket';
import BookSeat from './Components/Booking/BookSeat/BookSeat';
import Invoice from './Components/Booking/Invoice/Invoice';
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
      <Route path="/Upcoming" element={<Upcoming/>} />
      <Route path="/Playing" element={<Playing/>} />
      <Route path="/BookSeat" element={<BookSeat />} />
      <Route path="/BookTicket/:id" element={<BookTicket/>}/>
      <Route path='/Invoice' element={<Invoice />} />
      <Route path='/PaymentResult' element={<PaymentResult />} />
    </Routes>    
    

  );
}

export default App;

