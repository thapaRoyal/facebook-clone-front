import React from 'react';
import './style.css';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" alt="Logo" />
            <span>
              Facebook helps you to connect and share with the people in your
              life
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik>
                {(formik) => (
                  <Form>
                    <input type="text" />
                    <input type="text" />
                    <button type="submit" className="blue_btn">
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot" className="forgot_password">
                Forgot password?
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Craete a Page</b> for a celebrity, brand or business.
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
};

export default Login;
