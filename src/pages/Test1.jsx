// src/pages/Test1.jsx
import React from 'react';

const Test1 = () => {
    return (
    <div className="container">
        <h2>Test 1</h2>
        <form>
        {/* Aquí colocas las preguntas del primer test */}
        <button type="submit" className="btn btn-success">Enviar Test</button>
        </form>
    </div>
    );
};

export default Test1;
