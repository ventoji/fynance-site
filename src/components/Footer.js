import React from 'react';
import footerStyle from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={footerStyle.footer}>
            <div className="container">
                <div>
                    <span className="text-muted"> © Fynance 2020</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;