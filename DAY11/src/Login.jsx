// import React, { useState } from 'react';
// import './Login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Home from './Home';

// const Login = () => {
//   const navigate = useNavigate();

//   const [isSignUpMode, setIsSignUpMode] = useState(false);
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [phone, setPhone] = useState('');
//   const [phoneError, setPhoneError] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignUpClick = () => {
//     setIsSignUpMode(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUpMode(false);
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       setEmailError('Please enter a valid email address');
//       return false;
//     } else {
//       setEmailError('');
//       return true;
//     }
//   };

//   const validatePhone = (phone) => {
//     const phonePattern = /^\d{10}$/;
//     if (!phonePattern.test(phone)) {
//       setPhoneError('Please enter a valid 10-digit contact number');
//       return false;
//     } else {
//       setPhoneError('');
//       return true;
//     }
//   };

//   const validatePassword = (password) => {
//     if (password.length < 8 || password.length > 16) {
//       setPasswordError('Must be 8-16 characters long');
//       return false;
//     } else if (!/[A-Z]/.test(password)) {
//       setPasswordError('Must contain at least one uppercase letter');
//       return false;
//     } else if (!/\d.*\d/.test(password)) {
//       setPasswordError('Must contain at least two numbers');
//       return false;
//     } else if (!/[!@#$%^&*()]/.test(password)) {
//       setPasswordError('Must contain at least one special character');
//       return false;
//     } else {
//       setPasswordError('');
//       return true;
//     }
//   };

//   const validateConfirmPassword = (confirmPassword) => {
//     if (confirmPassword !== password) {
//       setConfirmPasswordError('Passwords do not match');
//       return false;
//     } else {
//       setConfirmPasswordError('');
//       return true;
//     }
//   };

//   const handleEmailChange = (e) => {
//     const emailValue = e.target.value;
//     setEmail(emailValue);
//     validateEmail(emailValue);
//   };

//   const handlePhoneChange = (e) => {
//     const phoneValue = e.target.value;
//     setPhone(phoneValue);
//     validatePhone(phoneValue);
//   };

//   const handlePasswordChange = (e) => {
//     const passwordValue = e.target.value;
//     setPassword(passwordValue);
//     validatePassword(passwordValue);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const confirmPasswordValue = e.target.value;
//     setConfirmPassword(confirmPasswordValue);
//     validateConfirmPassword(confirmPasswordValue);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent form submission

//     // Validate username and password fields
//     if (!email || !password) {
//       setErrorMessage('Please fill in all the required fields');
//       return;
//     }

//     // Redirect to the next home page
//     navigate('/Home');
//   };

//   const handleRegister = (e) => {
//     e.preventDefault(); // Prevent form submission

//     // Validate all fields before registering
//     const isEmailValid = email && !emailError;
//     const isPhoneValid = phone && !phoneError;
//     const isPasswordValid = password && !passwordError;
//     const isConfirmPasswordValid = confirmPassword && !confirmPasswordError;

//     if (isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
//       // Perform registration logic

//       // Redirect to the home page
//       navigate('/Home');
//     } else {
//       setErrorMessage('Please fill in all the required fields');
//     }
//   };

//   return (
//     <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
//               <div class="homebutton">
// <a href="/">Home</a>
// </div>
//       <div className="forms-container">
//         <div className="signin-signup">
//           <form action="#" className="sign-in-form" onSubmit={handleLogin}>
//             <h2 className="title">Sign in</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" value={email} onChange={handleEmailChange} required />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <button type="submit" className="butt">
//               Login
//             </button>
//           </form>
//           <form action="#" className="sign-up-form" onSubmit={handleRegister}>
            
//             <h2 className="title">Sign up</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" required />
//             </div>

//             <div className="input-field">
//               <i className="fas fa-envelope"></i>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />
//               {emailError && <p className="error-message">{emailError}</p>}
//             </div>
//             <div className="input-field">
//               <i className="fas fa-phone"></i>
//               <input
//                 type="tel"
//                 placeholder="Contact Number"
//                 value={phone}
//                 onChange={handlePhoneChange}
//                 required
//               />
//               {phoneError && <p className="error-message">{phoneError}</p>}
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//               />
//               {passwordError && <p className="error-message">{passwordError}</p>}
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//                 required
//               />
//               {confirmPasswordError && (
//                 <p className="error-message">{confirmPasswordError}</p>
//               )}
//             </div>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <button type="submit" className="btn">
//               Register
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>Great to have you here!</h3>
//             <p>Register and unlock a world of organized productivity.</p>
//             <button
//               className="btn transparent"
//               id="sign-up-btn"
//               onClick={handleSignUpClick}
//             >
//               Sign up
//             </button>
//           </div>
//           <img
//             src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-4517376-3742807.png"
//             className="image"
//             alt=""
//           />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>Hello, Productivity Seeker!</h3>
//             <p>
//               Login to your account and stay organized with ease. Your tasks
//               are just a few clicks away.
//             </p>
//             <button
//               className="btn transparent"
//               id="sign-in-btn"
//               onClick={handleSignInClick}
//             >
//               Sign in
//             </button>
//           </div>
//           <img
//             src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-3896323-3243247.png"
//             className="image"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validateNumber = (number) => {
    const numberPattern = /^\d{10}$/;
    if (!numberPattern.test(number)) {
      setNumberError('Please enter a valid 10-digit contact number');
      return false;
    } else {
      setNumberError('');
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8 || password.length > 16) {
      setPasswordError('Must be 8-16 characters long');
      return false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('Must contain at least one uppercase letter');
      return false;
    } else if (!/\d.*\d/.test(password)) {
      setPasswordError('Must contain at least two numbers');
      return false;
    } else if (!/[!@#$%^&*()]/.test(password)) {
      setPasswordError('Must contain at least one special character');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    } else {
      setConfirmPasswordError('');
      return true;
    }
  };
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
  };
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const handleNumberChange = (e) => {
    const numberValue = e.target.value;
    setNumber(numberValue);
    validateNumber(numberValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validatePassword(passwordValue);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    validateConfirmPassword(confirmPasswordValue);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in all the required fields');
      return;
    }
    navigate('/Home');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const isEmailValid = email && !emailError;
    const isNumberValid = number && !numberError;
    const isPasswordValid = password && !passwordError;
    const isConfirmPasswordValid = confirmPassword && !confirmPasswordError;

    if (isEmailValid && isNumberValid && isPasswordValid && isConfirmPasswordValid) {
      const registrationData = {
        name,
        email,
        number,
        password,
        confirmPassword,
      };

      try {
        const response = await fetch('http://127.0.0.1:8080/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });

        if (response.ok) {
          setRegistrationSuccess(true);
          setErrorMessage('');
          navigate('/Home'); // Redirect to the home page upon successful registration
        } else {
          setRegistrationSuccess(false);
          setErrorMessage('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setRegistrationSuccess(false);
        setErrorMessage('Registration failed. Please try again.');
      }
    } else {
      setErrorMessage('Please fill in all the required fields');
    }
  };
  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div class="homebutton">
        <a href="/">Home</a>
      </div>
      <div className="forms-container">
        <div className="signin-signup">
        <form action="#" className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="butt">
              Login
            </button>
          </form>
          <form action="#" className="sign-up-form" onSubmit={handleRegister}>
  <h2 className="title">Sign up</h2>
  <div className="input-field">
  <i className="fas fa-user"></i>
  <input
    type="text"
    placeholder="User Name"
    value={name}
    onChange={handleNameChange}
    required
  />
  {nameError && <p className="error-message">{nameError}</p>}
</div>
  <div className="input-field">
    <i className="fas fa-envelope"></i>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={handleEmailChange}
      required
    />
    {emailError && <p className="error-message">{emailError}</p>}
  </div>
  <div className="input-field">
  <i className="fas fa-phone"></i>
  <input
    type="tel"
    placeholder="Contact Number"
    value={number}
    onChange={handleNumberChange}
    required
  />
  {numberError && <p className="error-message">{numberError}</p>}
</div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {confirmPasswordError && (
                <p className="error-message">{confirmPasswordError}</p>
              )}
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="panels-container">
      <div className="panel left-panel">
          <div className="content">
            <h3>Great to have you here!</h3>
            <p>Register and unlock a world of organized productivity.</p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-4517376-3742807.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Hello, Productivity Seeker!</h3>
            <p>
              Login to your account and stay organized with ease. Your tasks
              are just a few clicks away.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-3896323-3243247.png"
            className="image"
            alt=""
          />
        </div>      </div>
    </div>
  );
};

export default Login;
