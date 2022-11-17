import './style.css';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/Login/LoginForm';
import Footer from '../../components/Login/Footer';

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <div className="register"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
