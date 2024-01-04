import React from 'react';
import CompanyLogo from '../Images/Company-Logo.png';
import CompanyText from '../Images/Company-Text.png';

export default function Header() {

    return (
        <div className="Header-Container">
            <div className="Header-Item">
                <img src={CompanyLogo} className="CompanyLogo" />
            </div>
            <div className="Header-Item">
                <img src={CompanyText} className="CompanyText" />
            </div>
            <div className="Header-Item">
                <div className="Nav-Bar">
                    <div className="Nav-Item">
                        Products
                    </div>
                    <div className="Nav-Item">
                        About
                    </div>
                    <div className="Nav-Item">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    );
}