import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { Layout } from 'antd';
import Product from './pages/Product';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    );
}

export default App;
