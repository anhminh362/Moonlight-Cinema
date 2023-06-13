import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Auth/VerifyCodePage.css';
import '../../Styles/global.css';

const VerifyCode = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);

  useEffect(() => {
    // Lấy email từ query param trong URL
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, [location.search]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/account', {
        email,
        code,
      });

      if (response.status === 200) {
        alert('Verification successful');
        navigate('/UserInfo'); // Chuyển hướng tới trang FormUser
      } else {
        setErrorMessage('The verification code you entered is incorrect. Please try again');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while verifying the code. Please try again');
    }
  };

  const handleResend = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/account?email=${email}`);

      if (response.data.length > 0) {
        const resendResponse = await axios.post(`http://127.0.0.1:8000/api/account${response.data[0].id}`);
        if (resendResponse.status === 200) {
          setVerificationEmailSent(true); // Đã gửi lại email xác nhận
          alert('The verification code has been resent');
        } else {
          setErrorMessage('An error occurred while resending the verification code. Please try again');
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while resending the verification code. Please try again');
    }
  };

  return (
    <div className="form-register">
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h2>Verify Your Account</h2>
          &nbsp;
          <p className="info">An OTP has been sent to {email}</p>
          <div className="code-container">
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                required
                value={code[index] || ''}
                onChange={(e) => {
                  const newCode = [...code];
                  newCode[index] = e.target.value;
                  setCode(newCode);
                }}
              />
            ))}
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="btn btn-default btn__verify" name="btn">
            Verify
          </button>
          {verificationEmailSent ? (
            <p className="verification-sent">Verification email has been resent</p>
          ) : (
            <button type="button" className="btn btn-link btn__resend" onClick={handleResend}>
              Resend Code
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerifyCode;
