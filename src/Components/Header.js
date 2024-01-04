import React, { useState } from 'react';
import CompanyLogo from '../Images/Company-Logo.png';
import CompanyText from '../Images/Company-Text.png';

export default function Header() {
    const [activeLink, setActiveLink] = useState('Products');

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        return activeLink === linkName;
    };

    return (
        <div className="Header-Container">
            <div className="Header-Item">
                <img src={CompanyLogo} alt="Company Logo" className="CompanyLogo" />
            </div>
            <div className="Header-Item">
                <img src={CompanyText} alt="Company Text" className="CompanyText" />
            </div>
            <div className="Header-Item">
                <div className="Nav-Bar">
                    <div className={`Nav-Item ${activeLink === 'Products' ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick('Products')}>Products</a>
                    </div>
                    <div className={`Nav-Item ${activeLink === 'About' ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick('About')}>About</a>
                    </div>
                    <div className={`Nav-Item ${activeLink === 'Contact' ? 'active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick('Contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
