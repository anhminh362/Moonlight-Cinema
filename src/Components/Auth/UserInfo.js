import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError("Chỉ cho phép chữ cái và khoảng trắng");
    } else if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Số điện thoại không hợp lệ");
    } else {
      // Gửi yêu cầu lưu thông tin đến API
      axios
        .post("http://127.0.0.1:8000/api/users", { name, phone })
        .then((response) => {
          if (response.status === 200) {
            navigate("/Login");
          } else {
            console.log(response.data.error);
            setErrorMessage("Đã xảy ra lỗi khi lưu thông tin người dùng. Vui lòng thử lại.");
          }
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage("Đã xảy ra lỗi khi lưu thông tin người dùng. Vui lòng thử lại.");
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

        <button type="submit" className="btn btn-default" name="btn">
          Save
        </button>
        <div>
          {nameError && <span className="error">{nameError}</span>}
          {phoneError && <span className="error">{phoneError}</span>}
          {errorMessage && <span className="error">{errorMessage}</span>}
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
