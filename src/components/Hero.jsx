import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={`${styles.title} gradient-text`}>
                        Build without code.
                        <br />
                        Launch without limits.
                    </h1>
                    <p className={styles.subtitle}>
                        The curated directory of the best no-code tools for founders, creators, and dreamers.
                        Stop coding, start building.
                    </p>
                    <a href="#tools" className={styles.ctaButton}>
                        Explore AI Tools ↓
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
