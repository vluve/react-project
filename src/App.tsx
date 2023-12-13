import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Login} from './pages/Login';

const App: React.FC = () => {
    return (
                <Login />
    );
};

export default App;
