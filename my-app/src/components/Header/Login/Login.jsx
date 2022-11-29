import React from 'react';
import profileImg from '../../../assets/profile.jpg';

export default function Login() {
    return (
        <>
            <li class='profile-img'>
                <a href='#'>
                    <img src={profileImg} alt='My Page' />
                </a>
            </li>
            <li>
                <a href='#' class='button'>
                    <img src='./assets/icon-modify-white.svg' alt='' />
                    <span>Write</span>
                </a>
            </li>
            <li>
                <button class='button white'>
                    <img src='./assets/icon-logout.svg' alt='' />
                    <span>Logout</span>
                </button>
            </li>
        </>
    );
}
