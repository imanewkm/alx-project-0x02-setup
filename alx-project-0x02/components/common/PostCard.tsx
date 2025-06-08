import React from "react";
import { PostProps } from "@/interfaces/index";

export const PostCard: React.FC<PostProps> = ({ id, userId, title, body, createdAt }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{title}</h2>
                <span className="text-sm text-gray-400">#{id}</span>
            </div>
            <p className="text-gray-700 mb-4">{body}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>User ID: {userId}</span>
                <span>
                    {createdAt ? `Posted on ${new Date(createdAt).toLocaleDateString()}` : 'Posted recently'}
                </span>
            </div>
        </div>
    );
};