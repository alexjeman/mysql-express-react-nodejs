import React, { useState, useContext, useEffect } from "react";
import NotificationContext from "../../context/notification/notificationContext";
import AuthContext from "../../context/auth/authContext";

const Login = props => {
  const notificationContext = useContext(NotificationContext);
  const authContext = useContext(AuthContext);

  const { setNotification } = notificationContext;

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/admin");
    }

    if (error === "Invalid credentials" || error === "Invalid password") {
      setNotification(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setNotification("Please fill in all fields");
    } else {
      login({
        email,
        password
      })
    }
  };

  return (
    <div className='register-form'>
      <h1>Login user</h1>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input type='submit' value='Login' className='btn' />
      </form>
    </div>
  );
};

export default Login;
