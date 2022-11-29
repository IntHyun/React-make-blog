import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './blogdetail.css';
import profileImg from '../../assets/profile.jpg';

export default function BlogDetail() {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/weniv/react-blog/react/public/post${id}.json`
            )
            .then((json) => {
                setPost(json.data);
            });
    }, []);
    console.log(post);

    let rederingContents = [];
    let counter = 1;
    if (post !== undefined) {
        for (let i of post.contents) {
            if (i.type === 'p') {
                rederingContents.push(<p key={counter}>{i.text}</p>);
                counter += 1;
            } else if (i.type === 'img') {
                const url = `https://github.com/weniv/react-blog/blob/react/public${i.src}?raw=true`;
                rederingContents.push(<img key={counter} src={url} />);
                counter += 1;
            }
        }
    }

    return (
        <>
            <Header />
            <Banner />
            {post === undefined ? (
                <></>
            ) : (
                <div className='view'>
                    <div className='max-width'>
                        <section className='wrap-box'>
                            <div className='inner'>
                                <dl className='author-wrap'>
                                    <dt className='a11y-hidden'>Author</dt>
                                    <dd className='author'>
                                        <img src={profileImg} alt='' />
                                        {post.userName}
                                    </dd>
                                    <dt className='a11y-hidden'>Created</dt>
                                    <dd className='created'>{post.created}</dd>
                                </dl>

                                <dl className='category'>
                                    <dt className='a11y-hidden'>Category</dt>
                                    {post.category.map((item, index) => (
                                        <dd key={index}>{item}</dd>
                                    ))}
                                </dl>

                                <div className='title-wrap'>
                                    <h2>{post.title}</h2>
                                    <button className='btn-like'>Like</button>
                                </div>
                                <hr />
                                <div className='view-contents'>
                                    {rederingContents}
                                </div>
                                <div className='btn-group'>
                                    <a href='#' className='btn-modify'>
                                        <span className='a11y-hidden'>
                                            modify
                                        </span>
                                    </a>
                                    <button
                                        type='button'
                                        className='btn-delete'
                                    >
                                        <span className='a11y-hidden'>
                                            delete
                                        </span>
                                    </button>
                                </div>
                                <Link to='/' className='btn-back'>
                                    <span className='a11y-hidden'>Back</span>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
