import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BlogDetail from './pages/BlogDetail/BlogDetail.jsx';
// 임포트 순서 => 1. 리셋 2. 글로벌
import './reset.css';
import './global.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<BlogDetail />} />
            </Routes>
        </BrowserRouter>
    );
}
