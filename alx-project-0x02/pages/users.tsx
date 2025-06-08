import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces/index';

interface UsersPageProps {
    initialUsers: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ initialUsers }) => {
    const [users, setUsers] = useState<UserProps[]>(initialUsers);
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            Users
                        </h1>
                        <p className="text-xl text-gray-600">
                            Meet our community members
                        </p>
                    </header>

                    <main>
                        {error ? (
                            <div className="text-center py-12">
                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <h2 className="text-2xl font-semibold text-red-600 mb-4">
                                        Error Loading Users
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
                        ) : users.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                        No users found
                                    </h2>
                                    <p className="text-gray-600">
                                        Unable to load user data at this time.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {users.map(user => (
                                    <UserCard key={user.id} user={user} />
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        const apiUsers = await response.json();
        
        // Transform API data to match our interface
        const users: UserProps[] = apiUsers.map((user: any) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            Address: {
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode,
                geo: {
                    lat: user.address.geo.lat,
                    lng: user.address.geo.lng,
                },
            },
        }));
        
        return {
            props: {
                initialUsers: users,
            },
            revalidate: 3600, // Revalidate every hour
        };
    } catch (error) {
        console.error('Error fetching users:', error);
        
        return {
            props: {
                initialUsers: [],
            },
            revalidate: 60, // Try again in 1 minute if there was an error
        };
    }
};

export default Users;

