import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import CategoriesHome from './pages/CategoriesHome';
import CategoryPage from './pages/CategoryPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/categories" element={<CategoriesHome />} />
            <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
    );
}

export default App;
