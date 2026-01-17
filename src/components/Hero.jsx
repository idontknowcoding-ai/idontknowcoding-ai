import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="container">
                <div className={styles.split}>
                    <div className={styles.textSide}>
                        <h1 className={`${styles.title} gradient-text`}>
                            Build without code.
                            <br />
                            Launch without limits.
                        </h1>
                        <p className={styles.subtitle}>
                            The curated directory of the best no-code tools for founders, creators, and dreamers.
                            Stop coding, start building.
                        </p>
                    </div>
                    <div className={styles.videoSide}>
                        <div className={styles.videoWrapper}>
                            <iframe
                                src="https://www.youtube.com/embed/iZ78G3BhDyc"
                                title="FlutterFlow Tutorial"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className={styles.iframe}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
