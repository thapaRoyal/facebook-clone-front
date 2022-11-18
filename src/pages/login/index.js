import './style.css';
import LoginForm from '../../components/Login/LoginForm';
import Footer from '../../components/Login/Footer';
import RegisterForm from '../../components/Login/RegisterForm';

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
};

export default Login;
