import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection = ({ videoId, title, description }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.videoWrapper}>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className={styles.iframe}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
