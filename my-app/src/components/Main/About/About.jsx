import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import profile from '../../../assets/profile.jpg';
import Facebook from '../../../assets/Facebook.svg';
import Twitter from '../../../assets/Twitter.svg';
import Instagram from '../../../assets/Instagram.svg';
import Github from '../../../assets/Github.svg';

export default function About() {
    return (
        <aside className='about'>
            <h2>About Me</h2>
            <img src={profile} alt='' className='user-profile' />
            <p className='user-name'>Chilli</p>
            <p className='user-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h3>Categories</h3>
            <ul className='categories'>
                <li>
                    <Link to='#'> Life</Link>
                </li>
                <li>
                    <Link to='#'>Style</Link>
                </li>
                <li>
                    <Link to='#'>Tech</Link>
                </li>
                <li>
                    <Link to='#'>Sport</Link>
                </li>
                <li>
                    <Link to='#'>Photo</Link>
                </li>
                <li>
                    <Link to='#'>Develop</Link>
                </li>
                <li>
                    <Link to='#'>Music</Link>
                </li>
            </ul>
            <h3>Follow</h3>
            <ul className='sns'>
                <li>
                    <Link to='#'>
                        <img src={Facebook} alt='Facebook' />
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={Twitter} alt='Twitter' />
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={Instagram} alt='Instagram' />
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={Github} alt='GitHub' />
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
