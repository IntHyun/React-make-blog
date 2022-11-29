import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Login from './Login/Login';
import Logout from './Logout/Logout';

export default function Header() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <header>
            <div className='max-width'>
                <h1>
                    <Link to='/'>
                        <img src={Logo} alt='My Blog' />
                    </Link>
                </h1>
                <ul>{isLogin ? <Login /> : <Logout />}</ul>
            </div>
        </header>
    );
}
