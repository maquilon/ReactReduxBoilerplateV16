import React from 'react';

const Footer = () => {
    let currentDate = new Date().getFullYear();

    return (
        <footer className="pt-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p style={{ color: '#8a8a8a',  font: 'Open Sans, Helvetica Neue', fontSize: '12px', padding: '0px 0px 200px 0px' }}>
                    {currentDate} - APPLICATION Inc. All rights Reserved
                 </p>
            </nav>
        </footer>
    );
};

export default Footer;
