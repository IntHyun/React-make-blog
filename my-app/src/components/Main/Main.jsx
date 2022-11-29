import About from './About/About.jsx';
import Posts from './Posts/Posts.jsx';
import './main.css';

export default function Main() {
    return (
        <main>
            <div className='max-width'>
                <h2 className='a11y-hidden'>Post</h2>
                <ul className='posts'>
                    <Posts />
                </ul>
                <About />
            </div>
        </main>
    );
}
