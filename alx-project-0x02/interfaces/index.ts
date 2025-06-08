export interface CardProps {
    title: string;
    content: string;
    imageUrl?: string;
    linkUrl?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void;
    className?: string;
}

export interface PostProps {
    id: number;
    userId: number;
    title: string;
    body: string;
    createdAt?: string;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    createdAt?: Date;
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}