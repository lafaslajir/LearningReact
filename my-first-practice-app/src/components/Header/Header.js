import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../../context/PageContext';
import './Header.css';

function Header() {
    const { currentPage, setPage } = useContext(PageContext);

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <header id="header">
            <div className="inner">
                <Link to="/" className={`logo ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handlePageChange('home ')}>
                    introspect
                </Link>
                <nav id="nav">
                    <Link to="/" className={`header-link ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handlePageChange('home')}>
                        Home
                    </Link>
                    <Link to="/generic" className={`header-link ${currentPage === 'generic' ? 'active' : ''}`} onClick={() => handlePageChange('generic')}>
                        Generic
                    </Link>
                    <Link to="/elements" className={`header-link ${currentPage === 'elements' ? 'active' : ''}`} onClick={() => handlePageChange('elements')}>
                        Elements
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
