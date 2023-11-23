import React from 'react';
import '../css/login.css'
import '../css/base.css'

export function LoginForm() : JSX.Element {
    return (
        <div className="login-body">
        <div className="login-form">
            <p><b>Почта:</b><br/>
                <input type="text" size={40}/>
            </p>
            <p><b>Пароль:</b><br/>
                <input type="password" size={40}/>
            </p>
            <a href="main.html">Вход</a>
            <b>Нет аккаунта?</b><br/>
            Напиши на vladislav.naidyonov@yandex.ru
        </div>
        </div>
    )
}
