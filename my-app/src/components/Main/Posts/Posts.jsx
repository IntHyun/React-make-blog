import Author from '../Author/Author.jsx';
import Category from '../Category/Category.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './posts.css';
import { Link, useParams } from 'react-router-dom';

export default function Posts() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        axios
            .get(
                'https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json'
            )
            .then((json) => {
                setPosts(json.data);
            });
    }, []);
    console.log(posts);

    return (
        <>
            {posts === undefined ? (
                <></>
            ) : (
                posts.map((item) => (
                    <li key={item.id}>
                        <Link to={`detail/${item.id}`} className='post'>
                            <article>
                                <img
                                    src={`https://github.com/weniv/react-blog/blob/react/public/${item.thumbnail}?raw=true`}
                                    alt=''
                                />
                                <div className='contents-wrap'>
                                    <Category category={item.category} />
                                    <h3>{item.title}</h3>
                                    <Author
                                        userName={item.userName}
                                        created={item.created}
                                    />
                                    <p className='post-description'>
                                        {item.summary}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </li>
                ))
            )}
        </>
    );
}
