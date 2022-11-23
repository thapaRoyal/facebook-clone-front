import './style.css';
import LoginForm from '../../components/Login/LoginForm';
import Footer from '../../components/Login/Footer';
import RegisterForm from '../../components/Login/RegisterForm';
import { useState } from 'react';

const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm setVisible={setVisible} />
        {visible && <RegisterForm setVisible={setVisible} />}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
