// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
    <header className="bg-dark text-white p-3">
        <div className="container">
        <h1 className="text-center">MG-Brain</h1>
        <nav className="d-flex justify-content-center">
            <a href="/" className="text-white mx-3">Inicio</a>
            <a href="/ipv" className="text-white mx-3">IPV</a>
            <a href="/hexaco" className="text-white mx-3">HEXACO</a>
        </nav>
        </div>
    </header>
    );
};

export default Header;
