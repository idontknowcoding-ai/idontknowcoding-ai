import React from 'react';
import ToolCard from './ToolCard';
import styles from './CategorySection.module.css';

const CategorySection = ({ title, description, tools }) => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.grid}>
                {tools.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
