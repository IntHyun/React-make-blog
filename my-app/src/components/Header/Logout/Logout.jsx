import React from 'react';
import { Link } from 'react-router-dom';

export default function Logout() {
    return (
        <>
            <li>
                <Link to='/' className='button gray'>
                    <img src='./assets/icon-login.svg' alt='' />
                    <span>Login</span>
                </Link>
            </li>
            <li className='only-pc'>
                <a href='#' className='button gray'>
                    <img src='./assets/icon-register.svg' alt='' />
                    <span>Register</span>
                </a>
            </li>
        </>
    );
}
