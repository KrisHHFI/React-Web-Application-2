import React from 'react';
import OfficeInterior from '../Images/About/OfficeInterior.png';
import ConstructionSite from '../Images/About/ConstructionSite.png';
import HelsinkiSkyline from '../Images/About/HelsinkiSkyline.jpg';
import Who from '../Images/About/Who.png';
import Mission from '../Images/About/Mission.png';
import Office from '../Images/About/Office.png';

export default function About() {

    return (
        <div class="About-Container">
            <div class="About-Item">
                <img src={OfficeInterior} alt="Office Interior" className="CoverImage" />
                <img src={Who} alt="Office Interior" className="AboutImageTitle" />
                <div class="About-Divider"></div>
            </div>
            <div class="About-Item">
                <img src={ConstructionSite} alt="ConstructionSite" className="CoverImage" />
                <img src={Mission} alt="Office Interior" className="AboutImageTitle" />
                <div class="About-Divider"></div>
            </div>
            <div class="About-Item">
                <img src={HelsinkiSkyline} alt="Credit to Tapio Haaja, Pexels." className="CoverImage" />
                <img src={Office} alt="Office Interior" className="AboutImageTitle" />
                <div class="About-Divider"></div>
            </div>
            <div class="About-Item">
            </div>
            <div class="About-Item About-1">
            </div>
        </div>
    );
}
