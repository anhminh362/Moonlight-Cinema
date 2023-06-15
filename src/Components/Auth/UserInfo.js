import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const navigate = useNavigate();
  const [name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [account_id, setAccountId] = useState("");

  useEffect(() => {
    // Fetch the account details from the API
    axios
      .get("http://127.0.0.1:8000/api/account")
      .then((response) => {
        if (response.status === 200) {
          setAccountId(response.data.account_id);
        } else {
          setErrorMessage("Không tìm thấy được tài khoản. Vui lòng thử lại.");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage("Không tìm thấy tài khoản. Vui lòng thử lại.");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setNameError("");
    setPhoneError("");
    setEmailError("");
    setErrorMessage("");

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError("Chỉ cho phép chữ cái và khoảng trắng");
    } else if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Số điện thoại không hợp lệ");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email không hợp lệ");
    } else {
      // Send request to save user information to the API
      axios
        .post("http://127.0.0.1:8000/api/users", {
          account_id,
          name,
          phone,
          email,
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Xác thực thành công, Vui lòng đăng nhập!");
            navigate("/Login");
          } else {
            console.log(response.data.error);
            setErrorMessage(
              "Đã xảy ra lỗi khi lưu thông tin người dùng. Vui lòng thử lại."
            );
          }
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage(
            "Đã xảy ra lỗi khi lưu thông tin người dùng. Vui lòng thử lại."
          );
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
          <label htmlFor="name">Full name</label>
          <br />
          <div className="form-input">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <br />
          <div className="form-input">
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <div className="form-input">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {emailError && <span className="error">{emailError}</span>}
          {errorMessage && <span className="error">{errorMessage}</span>}
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
