import React from 'react';
import OfficeInterior from '../Images/About/OfficeInterior.png';
import ConstructionSite from '../Images/About/ConstructionSite.png';
import HelsinkiSkyline from '../Images/About/HelsinkiSkyline.jpg';

export default function About() {

    return (
        <div class="About-Container">
            <div class="About-Item">
                <img src={OfficeInterior} alt="Office Interior" className="CoverImage" />
            </div>
            <div class="About-Item">
                <img src={ConstructionSite} alt="ConstructionSite" className="CoverImage" />
            </div>
            <div class="About-Item">
                <img src={HelsinkiSkyline} alt="Credit to Tapio Haaja, Pexels." className="CoverImage" />
            </div>
            <div class="About-Item">
            </div>
            <div class="About-Item About-1">
            </div>
        </div>
    );
}
