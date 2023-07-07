import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import '../Auth/userinfo.css';
const UserInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [account_id, setAccountId] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get("email");
    setEmail(emailParam);
  }, [location.search]);

  useEffect(() => {
    if (email) {
      axios
        .get(`http://127.0.0.1:8000/api/account/${email}`)
        .then((response) => {
          const data = response.data;
          setAccountId(data.id); // Lưu account_id
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage("Không tìm thấy tài khoản. Vui lòng thử lại.");
        });
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setNameError("");
    setPhoneError("");
    setErrorMessage("");

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError("Chỉ cho phép chữ cái và khoảng trắng");
      
    } else if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Số điện thoại không hợp lệ");
    } else {
      if (email && account_id) {
        try {
          await axios.post("http://127.0.0.1:8000/api/users", {
            name: name,
            phone: phone,
            account_id: account_id,
          });

          alert("Lưu thông tin thành công!");

          navigate("/Login");
        } catch (error) {
          console.log(error.message);
          setErrorMessage(
            "Đã xảy ra lỗi khi lưu thông tin người dùng. Vui lòng thử lại."
          );
        }
      }
    }
  };

  return (
    <div >
      <div className="container" style={{  background:'#06121E'}}>
        <div className="row justify-content-center" >
          <div className="col-lg-6">
            <div >
            <form style={{ background:'#fff', borderRadius:'15px' }} onSubmit={handleSubmit}>
              <h1 style={{ color:'#000000' }}>
                <strong>Your Information</strong>
              </h1>
              <div className="form-group">
                <label style={{ color:'#000000' }} htmlFor="name">Full name</label>
                <br />
                <div className="form-input">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Type your name"
                    required
                  />
                </div>
                {nameError && <span className="error">{nameError}</span>}
              </div>
              <div className="form-group">
                <label style={{ color:'#000000' }}  htmlFor="phone">Phone Number</label>
                <br />
                <div className="form-input">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Type your  phone"
                    required
                  />
                </div>
                {phoneError && <span className="error">{phoneError}</span>}
              </div>
              <button type="submit" className="btn btn-primary" name="btn">
                Save
              </button>
            </form>
              {errorMessage && <span className="error">{errorMessage}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default UserInfo;

