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