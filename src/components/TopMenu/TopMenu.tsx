import React from 'react';
import './login.css'
import '../../css/base.css'

export function LoginForm() : JSX.Element {
    return (
        <header className="menu-header">
            <div className="line">
                <a href="main.html" className="active">Главная</a>
                <a href="calendar.html">Календарь</a>
                <a href="add-game-page.html">Добавить игру</a>
                <a href="staff.html">Сотрудники</a>
                <a href="#">Инвентарь</a>
                <a href="#">Финансы</a>
                <a href="#">Статистика</a>
            </div>
        </header>
    )
}