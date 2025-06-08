import React from 'react';
import Button from '@/components/common/Button';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <div className="max-w-3xl">
                <p className="text-lg mb-4">
                    Welcome to our company. We are dedicated to providing exceptional services 
                    and creating innovative solutions for our customers.
                </p>
                <p className="text-lg mb-4">
                    Our team consists of passionate professionals who are committed to excellence 
                    and continuous improvement in everything we do.
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg mb-6">
                        To deliver high-quality products and services that exceed customer 
                        expectations while fostering innovation and growth.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                        <Button size="small" shape="rounded-sm">
                            Learn More
                        </Button>
                        <Button size="medium" shape="rounded-md">
                            Contact Us
                        </Button>
                        <Button size="large" shape="rounded-full">
                            Join Team
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
