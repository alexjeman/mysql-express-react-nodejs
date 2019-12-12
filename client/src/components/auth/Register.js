import React, { useState, useContext, useEffect } from "react";
import NotificationContext from "../../context/notification/notificationContext";
import AuthContext from '../../context/auth/authContext'

const Register = () => {
  const notificationContext = useContext(NotificationContext);
  const authContext = useContext(AuthContext);

  const { setNotification } = notificationContext;

  const { register, error, clearErrors } = authContext;

  useEffect(() => {
    if(error === 'User already exists' ) {
      setNotification(error, 'danger');
      clearErrors()
    }
  }, [error])

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("Register Submit");
    if (name === "" || email === "" || password === "") {
      setNotification("Please enter all fields", "danger");
    } else if (password !== password2) {
      setNotification("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      })
    }
  };

  return (
    <div className='register-form'>
      <h1>Register user</h1>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input type='submit' value='Register' className='btn' />
      </form>
    </div>
  );
};

export default Register;
