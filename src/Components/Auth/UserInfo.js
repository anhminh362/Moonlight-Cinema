import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError("Only letters and white space allowed");
    } else if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Invalid phone number");
    } else {
      // Gửi yêu cầu lưu thông tin đến API
      axios
        .post("https://647783419233e82dd53bc684.mockapi.io/mypham/users", { name, phone })
        .then((response) => {
          // Xử lý phản hồi thành công từ API
          if (response.data.success) {
            // Chuyển hướng đến trang đăng nhập hoặc trang khác tùy thuộc vào yêu cầu
            navigate("/login"); // Chuyển hướng đến đường dẫn "/login"
          } else {
            // Xử lý phản hồi lỗi từ API
            // Ví dụ: hiển thị thông báo lỗi
            console.log(response.data.error);
          }
        })
        .catch((error) => {
          // Xử lý lỗi khi gửi yêu cầu đến API
          // Ví dụ: hiển thị thông báo lỗi
          console.log(error.message);
        });
    }
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
        <h1>
          <strong>Your Information</strong>
        </h1>
        <div className="form-group">
          <label htmlFor="name">Full name</label> <br />
          <div className="form-input">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <br />
          <div className="form-input">
            <input
              type="phone"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-default" name="btn">Save</button>
<div>
{nameError && <span className="error">{nameError}</span>}
{phoneError && <span className="error">{phoneError}</span>}
<br />
<br />
</div>
</form>
</div>
);
};

export default UserInfo;




