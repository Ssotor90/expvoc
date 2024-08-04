// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
    <header className="bg-dark text-white p-3">
        <div className="container">
        <h1 className="text-center">MG-Brain</h1>
        <nav className="d-flex justify-content-center">
            <a href="/" className="text-white mx-3">Inicio</a>
            <a href="/test1" className="text-white mx-3">Test 1</a>
            <a href="/test2" className="text-white mx-3">Test 2</a>
        </nav>
        </div>
    </header>
    );
};

export default Header;
