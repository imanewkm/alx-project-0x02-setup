import React from 'react';
import { UserProps } from '@/interfaces/index';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{user.name}</h3>
                <p className="text-gray-700">@{user.username}</p>
            </div>
            
            <div className="space-y-3">
                <div>
                    <p className="text-sm font-medium text-gray-800">Email:</p>
                    <p className="text-gray-900">{user.email}</p>
                </div>
                
                <div>
                    <p className="text-sm font-medium text-gray-800">Phone:</p>
                    <p className="text-gray-900">{user.phone}</p>
                </div>
                
                <div>
                    <p className="text-sm font-medium text-gray-800">Website:</p>
                    <p className="text-gray-900">{user.website}</p>
                </div>
                
                <div>
                    <p className="text-sm font-medium text-gray-800">Address:</p>
                    <div className="text-gray-900">
                        <p>{user.Address.street}, {user.Address.suite}</p>
                        <p>{user.Address.city}, {user.Address.zipcode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;