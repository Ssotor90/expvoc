    import React from 'react';

    const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start md:col-span-1">
                <img src="./src/assets/Nvo-Logo_FondoOscuro.png" alt="Logo" className="h-20 w-auto"/>
            </div>
            {/* Links Sections */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                <h2 className="text-lg font-semibold mb-4">Solutions</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Marketing</a></li>
                    <li><a href="#" className="hover:underline">Analytics</a></li>
                    <li><a href="#" className="hover:underline">Commerce</a></li>
                    <li><a href="#" className="hover:underline">Insights</a></li>
                </ul>
                </div>
                <div>
                <h2 className="text-lg font-semibold mb-4">Support</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Pricing</a></li>
                    <li><a href="#" className="hover:underline">Documentation</a></li>
                    <li><a href="#" className="hover:underline">Guides</a></li>
                    <li><a href="#" className="hover:underline">API Status</a></li>
                </ul>
                </div>
                <div>
                <h2 className="text-lg font-semibold mb-4">Company</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Blog</a></li>
                    <li><a href="#" className="hover:underline">Jobs</a></li>
                    <li><a href="#" className="hover:underline">Press</a></li>
                    <li><a href="#" className="hover:underline">Partners</a></li>
                </ul>
                </div>
                <div>
                <h2 className="text-lg font-semibold mb-4">Legal</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Claim</a></li>
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                    <li><a href="#" className="hover:underline">Terms</a></li>
                </ul>
                </div>
            </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Subscribe Section */}
                <div className="mb-8 md:mb-0 md:w-1/2">
                <h2 className="text-lg font-semibold mb-4">Suscribete a nuestro newsletter</h2>
                <p className="mb-4">Podrás recibir las últimas noticias al instante.</p>
                <form className="flex">
                    <input 
                    type="email" 
                    placeholder="Ingresa tu email" 
                    className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Suscribir
                    </button>
                </form>
                </div>
                {/* Social Media Icons and Copyright */}
                <div className="flex items-center space-x-6">
                <a href="https://www.instagram.com/mgbrain_cl?igshid=MTIyMzRjYmRlZg%3D%3D" className="hover:underline"><img src="./src/assets/instagram.svg" alt="Instagram" className="h-6 w-6"/></a>
                <a href="https://www.linkedin.com/in/mg-brain-consultora-497939208/" className="hover:underline"><img src="./src/assets/linkedin.svg" alt="LinkedIn" className="h-6 w-6"/></a>
                </div>
            </div>
            <div className="mt-8 text-sm text-center md:text-left">
                &copy; 2024 MG-BRAIN, Inc. TODOS LOS DERECHOS RESERVADOS.
            </div>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;
