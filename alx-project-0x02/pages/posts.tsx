import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import PostModal from '@/components/common/PostModal';

interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
}

const Posts: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const handlePostSubmit = (title: string, content: string) => {
        const newPost: Post = {
            id: Date.now(),
            title,
            content,
            createdAt: new Date()
        };
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Posts
                        </h1>
                        <p className="text-xl text-gray-600 mb-6">
                            Share your thoughts and ideas with the community
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Create New Post
                        </button>
                    </header>

                    <main>
                        {posts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                        No posts yet
                                    </h2>
                                    <p className="text-gray-600 mb-6">
                                        Be the first to share something with the community!
                                    </p>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                    >
                                        Create Your First Post
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {posts.map(post => (
                                    <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {post.content}
                                        </p>
                                        <footer className="flex justify-between items-center text-sm text-gray-400">
                                            <span>
                                                Posted on {post.createdAt.toLocaleDateString()}
                                            </span>
                                            <span>
                                                {post.createdAt.toLocaleTimeString()}
                                            </span>
                                        </footer>
                                    </article>
                                ))}
                            </div>
                        )}
                    </main>

                    {/* Post Modal */}
                    <PostModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handlePostSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Posts;

