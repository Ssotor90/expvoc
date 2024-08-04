// src/pages/Login.jsx
import React from 'react';

const Login = () => {
    return (
    <div className="container mt-5">
        <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
                <form>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Login;
