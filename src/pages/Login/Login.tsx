import React from 'react';
import '../../components/LoginForm/login.css';
import '../../css/base.css';
import LoginForm from "../../components/LoginForm/LoginForm";

const Login: React.FC = () => {
    return (
        <div className="login-body">
        <LoginForm/>
        </div>
    );
};

export default Login;