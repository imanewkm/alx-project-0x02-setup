import React from 'react';
import { type CardProps } from '@/interfaces/index';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.content}>{content}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '16px auto',
    },
    title: {
        margin: '0 0 8px',
        fontSize: '1.5rem',
        color: '#333',
    },
    content: {
        margin: '0',
        fontSize: '1rem',
        color: '#555',
    },
};

export default Card;