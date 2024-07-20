import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import JewelryPage from './pages/JewelryPage';
import Footer from './components/Footer';
import ElectronicsPage from './pages/ElectronicsPage';
import FloatingCart from './components/FloatingCart';
import store from './store/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
