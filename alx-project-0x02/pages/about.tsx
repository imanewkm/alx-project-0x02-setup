import React from 'react';
import Header from '@/components/layout/Header';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            About Us
                        </h1>
                        <p className="text-xl text-gray-600">
                            Learn more about our mission and values
                        </p>
                    </header>

                    <main className="space-y-8">
                        <section className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Our Story
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Founded with a vision to make a difference, our company has been
                                dedicated to providing exceptional solutions and services to our
                                clients. We believe in innovation, quality, and customer satisfaction.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Over the years, we have grown from a small startup to a trusted
                                partner for businesses and individuals alike. Our team of experts
                                continues to push boundaries and deliver results that exceed expectations.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                To empower individuals and organizations through innovative solutions
                                that drive growth, efficiency, and success. We are committed to
                                excellence in everything we do and strive to make a positive impact
                                in the communities we serve.
                            </p>
                        </section>

                        <section className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Our Values
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
                                    <p className="text-gray-600">
                                        We embrace new ideas and technologies to stay ahead of the curve.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality</h3>
                                    <p className="text-gray-600">
                                        We maintain the highest standards in all our products and services.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Integrity</h3>
                                    <p className="text-gray-600">
                                        We conduct business with honesty, transparency, and ethical practices.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Focus</h3>
                                    <p className="text-gray-600">
                                        Our customers are at the heart of everything we do.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default About;
