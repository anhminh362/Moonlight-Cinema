
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [account_id, setAccountId] = useState("");

  useEffect(() => {
    // Fetch the account details from the API to get the account_id
    axios
      .get("http://127.0.0.1:8000/api/account/")
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setNameError("");
    setPhoneError("");
    setErrorMessage("");

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError("Chỉ cho phép chữ cái và khoảng trắng");
    } else if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneError("Số điện thoại không hợp lệ");
    } else {
      try {
        // Send request to save user information to the API
        await axios.post("http://127.0.0.1:8000/api/users/", {
          name: name,
          phone: phone,
          account_id: account_id,
        });

        alert("Lưu thông tin thành công!");

        // Chuyển hướng đến trang thành công
        navigate("/success");
      } catch (error) {
        console.log(error.message);
        setErrorMessage(
          "Đã xảy ra lỗi khi lưu thông tin người dùng. Vui lòng thử lại."
        );
      }

    }
  };

  return (

    <div className="body">
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
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {nameError && <span className="error">{nameError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <br />
            <div className="form-input">
              <input
                type="
                tel"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            {phoneError && <span className="error">{phoneError}</span>}
          </div>
          <button type="submit" className="btn btn-default" name="btn">
            Save
          </button>
        </form>
        {errorMessage && <span className="error">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default UserInfo;
