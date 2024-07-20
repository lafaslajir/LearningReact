import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Generic from './components/Generic/Generic';
import Elements from './components/Elements/Elements';
import Header from './components/Header/Header';
import { PageProvider } from './context/PageContext';

function App() {
    return (
        <PageProvider>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/generic" element={<Generic />} />
                    <Route path="/elements" element={<Elements />} />
                </Routes>
            </Router>
        </PageProvider>
    );
}

export default App;
