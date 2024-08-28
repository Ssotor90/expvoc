// src/pages/Login.jsx
import React from 'react';

const Login = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-lg rounded-lg">
                        <div className="p-6">
                            <h2 className="text-center text-2xl font-semibold mb-6">Iniciar Sesión</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Usuario</label>
                                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                                    <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
