import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <div className={styles.logo}>
                            idontknowcoding<span className={styles.dot}>.</span>com
                        </div>
                        {/* Add navigation links here if needed */}
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <div className="container">
                    <p>© {new Date().getFullYear()} idontknowcoding.com. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
