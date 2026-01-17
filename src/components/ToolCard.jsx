import React from 'react';
import styles from './ToolCard.module.css';

const ToolCard = ({ tool }) => {
    return (
        <a href={tool.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.icon}>{tool.icon}</div>
            <div className={styles.content}>
                <h3 className={styles.title}>{tool.name}</h3>
                <p className={styles.description}>{tool.description}</p>
            </div>
            <div className={styles.arrow}>→</div>
        </a>
    );
};

export default ToolCard;
