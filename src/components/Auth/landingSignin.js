import React, { useState } from 'react';

const LoginPage = () => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="wrapper">
      <div id="table">
        <a className="active">Sign in</a>
        <a className="">Sign Up</a>
      </div>
      <div id="signin">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input type="text" id="name" value={name} onChange={handleUsernameChange} autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input type={showPassword ? 'text' : 'password'} id="pass" value={password} onChange={handlePasswordChange} />
            <span id="showpwd" className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={handleShowPassword}></span>
          </div>
          <div className="form-group">
            <label id="checkbox">
              <input type="checkbox" checked />
              <span className="text">Keep me signed in</span>
            </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Sign in" />
          </div>
        </form>
        <div className="hr"></div>
        <a href="#" id="froget-pass">Forget Password?</a>
      </div>
    </div>
  );
};

export default LoginPage;
