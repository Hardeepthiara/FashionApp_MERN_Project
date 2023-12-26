import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useHistory hook

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const formValidation = async (event) => {
    event.preventDefault();

    try {
      if (!formData.email || !formData.password) {
        setError('Email and password are required');
        return;
      }

      const response = await axios.post('http://localhost:4000/auth/login', formData);
      if (response.status === 200) {
        console.log('Login successful');
        if (response.data.userId) {
          sessionStorage.setItem('userId', response.data.userId);
        }
        setError('');
        // Redirect to '/' after successful login
        navigate('/');
      } else {
      // Handle specific error codes
      if (response.status === 401) {
        setError('Invalid credentials');
      } else {
        setError('An error occurred during login');
      }      }
    } catch (error) {
      console.log(error.response.status)
      if (error.response.status === 401) {
        setError('Invalid credentials');
      } else {
        console.error('Error during login:', error.message);
        setError(error.message);

      }  

    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-10 mt-5">
          <div className="card" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img src="img/logos/7.jpeg" alt="Your Logo" className="img-fluid" />
                </div>
                <div className="col-md-6 text-center">
                  <h4 className="card-title mb-4 mt-4 txt-login-signup">Login</h4>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={formData.password}
                      />
                    </div>
                    {error && <div className="text-danger mt-2">{error}</div>}

                    <button
                      type="submit"
                      className="btn btn-submit btn-primary"
                      onClick={formValidation}
                    >
                      Login
                    </button>
                  </form>
                  <div className="mt-3 txt-register">
                    <span>Don't have an account?</span>
                    <Link to="/register" className="ms-2 btn-register">
                      Sign Up
                    </Link>
                    <br />
                    <br />
                    <Link to="/" className="ms-2 btn-register">
                      <i className="fa fa-arrow-left"> Home </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
