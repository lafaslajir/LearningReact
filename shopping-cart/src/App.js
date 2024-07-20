import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import JewelryPage from './pages/JewelryPage';
import Footer from './components/Footer';
import ElectronicsPage from './pages/ElectronicsPage';
import FloatingCart from './components/FloatingCart';
import { fetchProducts } from './actions/productActions';
import store from './store/store';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the app loads
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/jewel" element={<JewelryPage />} />
      </Routes>
      <FloatingCart />
      <Footer />
    </Router>
  );
};

export default App;
