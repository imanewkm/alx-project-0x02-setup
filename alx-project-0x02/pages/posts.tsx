import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import PostModal from '@/components/common/PostModal';
import { PostCard } from '@/components/common/PostCard';
import { Post } from '@/interfaces/index';

const Posts: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch posts from JSONPlaceholder API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                
                const data = await response.json();
                
                // Transform API data to match our interface
                const transformedPosts: Post[] = data.map((post: any) => ({
                    id: post.id,
                    userId: post.userId,
                    title: post.title,
                    body: post.body,
                    createdAt: new Date() // API doesn't provide createdAt, so we use current date
                }));
                
                setPosts(transformedPosts);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error('Error fetching posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handlePostSubmit = (title: string, content: string) => {
        const newPost: Post = {
            id: Date.now(), // Temporary ID for new posts
            userId: 1, // Default user ID
            title,
            body: content,
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
                        {loading ? (
                            <div className="text-center py-12">
                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                                    <p className="text-gray-600">Loading posts...</p>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <h2 className="text-2xl font-semibold text-red-600 mb-4">
                                        Error Loading Posts
                                    </h2>
                                    <p className="text-gray-600 mb-6">{error}</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            </div>
                        ) : posts.length === 0 ? (
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
                            <div className="space-y-4">
                                {posts.map(post => (
                                    <PostCard
                                        key={post.id}
                                        id={post.id}
                                        userId={post.userId}
                                        title={post.title}
                                        body={post.body}
                                        createdAt={post.createdAt?.toISOString()}
                                    />
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

