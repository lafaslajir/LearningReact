import React, { createContext, useState } from 'react';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

    const setPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <PageContext.Provider value={{ currentPage, setPage }}>
            {children}
        </PageContext.Provider>
    );
};
