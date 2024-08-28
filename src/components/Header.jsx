// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-3">
            <div className="container mx-auto">
                <h1 className="text-center text-xl">MG-Brain</h1>
                <nav className="flex justify-center mt-3">
                    <a href="/" className="text-white mx-3 hover:underline">Inicio</a>
                    <a href="/ipv" className="text-white mx-3 hover:underline">IPV</a>
                    <a href="/hexaco" className="text-white mx-3 hover:underline">HEXACO</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
