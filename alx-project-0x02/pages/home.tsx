import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
}

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const handlePostSubmit = (title: string, content: string) => {
        const newPost: Post = {
            id: Date.now(), // Simple ID generation
            title,
            content,
            createdAt: new Date()
        };
        setPosts(prevPosts => [newPost, ...prevPosts]); // Add new post to the beginning
    };

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
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Create New Post
                    </button>
                </header>

                <main className="max-w-4xl mx-auto">
                    {/* Display Posts Section */}
                    {posts.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Posts</h2>
                            <div className="space-y-4">
                                {posts.map(post => (
                                    <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-3">
                                            {post.content}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Posted on {post.createdAt.toLocaleDateString()} at {post.createdAt.toLocaleTimeString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

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
                        <Card
                            title="Our Mission"
                            content="We aim to empower individuals and organizations through innovative solutions."
                        />
                        <Card
                            title="Contact Us"
                            content="Have questions? Reach out to us and we'll be happy to assist you."
                        />
                    </section>
                </main>

                {/* Post Modal */}
                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handlePostSubmit}
                />
            </div>
        </div>
    );
};

export default Home;
