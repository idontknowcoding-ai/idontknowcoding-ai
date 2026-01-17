import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>


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
