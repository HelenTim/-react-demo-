import React from 'react';
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/app'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

render((
    <BrowserRouter> // 一个应用只有一个BrowserRouter
        <App />
    </BrowserRouter>
),document.getElementById('root'))
