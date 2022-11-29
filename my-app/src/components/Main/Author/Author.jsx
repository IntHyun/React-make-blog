import React from 'react';
import './author.css';

export default function Author({ userName, created }) {
    const url =
        'https://github.com/weniv/react-blog/blob/html/css/images/profile.jpg?raw=true';
    return (
        <dl className='author-wrap'>
            <dt className='a11y-hidden'>Author</dt>
            <dd className='author'>
                <img src={url} alt='' /> {userName}
            </dd>
            <dt className='a11y-hidden'>Created</dt>
            <dd className='created'>{created}</dd>
        </dl>
    );
}
