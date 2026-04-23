import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-columns">
                <div className="footer-column">
                    <h4>Tracks</h4>
                    <ul>
                        <li><a href="#">Track 1</a></li>
                        <li><a href="#">Track 2</a></li>
                        <li><a href="#">Track 3</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Your Name. All rights reserved.</p>
                <p><a href="https://github.com/sankalp24/SysDes">GitHub</a></p>
            </div>
        </footer>
    );
};

export default Footer;