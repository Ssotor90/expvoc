    import React from 'react';

    const LandingPage = () => {
    return (
        <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(your-hero-image-url.jpg)' }}>
            <div className="text-center px-6">
            <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
            <p className="text-lg mb-8">
                Discover the most advanced solutions for your business.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Get Started
            </button>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
            <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Features</h2>
                <p className="text-lg mt-4 text-gray-400">Explore the wide range of features we offer</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-md text-center">
                <h3 className="text-xl font-semibold mb-4">Feature One</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-md text-center">
                <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
                <p className="text-gray-400">Quisque tincidunt eros ac neque congue, ut feugiat massa ultrices.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-md text-center">
                <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
                <p className="text-gray-400">Integer sollicitudin purus nec vestibulum fermentum.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-md text-center">
                <h3 className="text-xl font-semibold mb-4">Feature Four</h3>
                <p className="text-gray-400">Aenean tincidunt quam nec nibh fringilla, non laoreet enim gravida.</p>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Dive In?</h2>
            <p className="text-lg mb-8">Join us today and start experiencing the difference.</p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Get Started
            </button>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
            <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-md text-center">
                <p className="text-gray-400 mb-4">"This platform has completely transformed our business."</p>
                <h3 className="text-xl font-semibold">- Client One</h3>
                </div>
                <div className="bg-gray-800 p-6 rounded-md text-center">
                <p className="text-gray-400 mb-4">"Amazing features and incredible support team!"</p>
                <h3 className="text-xl font-semibold">- Client Two</h3>
                </div>
                <div className="bg-gray-800 p-6 rounded-md text-center">
                <p className="text-gray-400 mb-4">"Highly recommended for any business looking to grow."</p>
                <h3 className="text-xl font-semibold">- Client Three</h3>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    };

    export default LandingPage;
