import React from 'react';
import { CardProps } from '@/interfaces/index';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-xl text-gray-600">
                        Your journey starts here
                    </p>
                </header>

                <main className="max-w-4xl mx-auto">
                    <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            About Us
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We're dedicated to providing exceptional experiences and solutions
                            that meet your needs. Our team is committed to excellence and
                            innovation in everything we do.
                        </p>
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        <Card
                            title="Our Services"
                            content="Discover the range of services we offer to help you achieve your goals."
                        />
                        <Card
                            title="Get Started"
                            content="Ready to begin? Contact us today and let's start your journey together."
                        />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;
