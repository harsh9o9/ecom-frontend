import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Categories';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />

            <Route path="/categories" element={Category} />
        </Routes>
    );
}

export default App;
