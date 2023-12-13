import React from 'react';
import './login.css';
import '../../css/base.css';

const LoginForm: React.FC = () => {
    return (
        <div className="login-form">
            <p>
                <b>Почта:</b>
                <br />
                <input type="text" size={40} />
            </p>
            <p>
                <b>Пароль:</b>
                <br />
                <input type="password" size={40} />
            </p>
            <input type="button" value="Вход" /> <br/>
            <b>Нет аккаунта?</b>
            <br />
            Напиши на vladislav.naidyonov@yandex.ru
        </div>
    );
};

export default LoginForm;
