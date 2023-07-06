
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Auth/verifycodepages.css';

  // const handleResend = async () => {
  //   try {
  //     const response = await axios.get(`https://647783419233e82dd53bc684.mockapi.io/mypham/account?email=${email}`);

  //     if (response.data.length > 0) {
  //       const resendResponse = await axios.post(`https://647783419233e82dd53bc684.mockapi.io/mypham/resend/${response.data[0].id}`);
  //       if (resendResponse.status === 200) {
  //         alert('The verification code has been resent');
  //       } else {
  //         setErrorMessage('An error occurred while resending the verification code. Please try again');
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setErrorMessage('An error occurred while resending the verification code. Please try again');
  //   }
  // };

  // return (
  //   <div className="form-register">
  //     <form onSubmit={handleFormSubmit}>
  //       <div className="container">
  //         <h2>Verify Your Account</h2>
  //         &nbsp;
  //         <p className="info">An OTP has been sent to {email}</p>
  //         <div className="code-container">
           
  //           {[...Array(5)].map((_, index) => (
  //             <input
  //               key={index}
  //               type="number"
  //               className="code"
  //               placeholder="0"
  //               min="0"
  //               max="9"
  //               required
  //               value={code[index] || ''}
  //               onChange={(e) => {
  //                 const newCode = [...code];
  //                 newCode[index] = e.target.value;
  //                 setCode(newCode);
  //               }}
  //             />
  //           ))}
  //         </div>
  //         {errorMessage && <div className="error-message">{errorMessage}</div>}
  //         <button type="submit" className="btn btn-default btn__verify" name="btn">
  //           Verify
  //         </button>
  //         <button type="button" className="btn btn-link btn__resend" onClick={handleResend}>
  //           Resend Code
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );



const VerifyCode = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const inputRefs = useRef([]);

  useEffect(() => {
    // Lấy email từ query param trong URL
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, [location.search]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== '' && index < 5) {
      // Move focus to the next input
      inputRefs.current[index + 1].focus();
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/verify', {
        email,
        otp: code.join(''), // Chuyển đổi mảng code thành chuỗi
      });

      if (response.status === 200) {
        alert('Xác minh thành công');
        navigate(`/UserInfo?email=${encodeURIComponent(email)}`);
      } else {
        setErrorMessage('Mã xác minh bạn nhập không đúng. Vui lòng thử lại');
      }
    } catch (error) {
      console.error(error.response);
      setErrorMessage('Đã xảy ra lỗi khi xác minh mã. Vui lòng thử lại');
    }
  };

  const handleResend = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/account?email=${email}`);

      if (response.data.length > 0) {
        const resendResponse = await axios.post(`http://127.0.0.1:8000/api/resend/${response.data[0].id}`);
        if (resendResponse.status === 200) {
          alert('Resend successful');
          
        } else {
          setErrorMessage('Mã xác minh bạn nhập không đúng. Vui lòng thử lại');
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Đã xảy ra lỗi khi gửi lại mã xác minh. Vui lòng thử lại');
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="form-register">
          <form onSubmit={handleFormSubmit}>
            <h2>Verify Your Account</h2>
            <p className="info">An OTP has been sent to {email}</p>
            <div className="code-container">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="number"
                  className="code"
                  placeholder="0"
                  min="0"
                  max="9"
                  required
                  value={code[index]}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  ref={(input) => (inputRefs.current[index] = input)}
                />
              ))}
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit" className="btn btn-primary" name="btn">
              Verify
            </button>
            <button type="button" className="btn btn-link" onClick={handleResend}>
              Resend Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;