import React from 'react';
import OfficeInterior from '../Images/About/OfficeInterior.png';
import ConstructionSite from '../Images/About/ConstructionSite.png';
import HelsinkiSkyline from '../Images/About/HelsinkiSkyline.jpg';
import Who from '../Images/About/Who.png';
import WhatWeDo from '../Images/About/WhatWeDo.png';
import Office from '../Images/About/Office.png';
import Mission from '../Images/About/Mission.png';

export default function About() {

    return (
        <div class="About-Container">
            <div class="About-Item">
                <img src={OfficeInterior} alt="Office Interior" className="CoverImage" />
                <img src={Who} alt="Who Title" className="AboutImageTitle" />
                <div class="About-Divider">
                    <div class="About-Text-Box-1">
                        <div class="About-Text-Title">
                            Tempor incididunt ut labore!
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>

            </div>
            <div class="About-Item">
                <img src={ConstructionSite} alt="ConstructionSite" className="CoverImage" />
                <img src={WhatWeDo} alt="What We Do Title" className="AboutImageTitle" />
                <div class="About-Divider"></div>
            </div>
            <div class="About-Item">
                <img src={HelsinkiSkyline} alt="Credit to Tapio Haaja, Pexels." className="CoverImage" />
                <img src={Office} alt="Office Title" className="AboutImageTitle" />
                <div class="About-Divider"></div>
            </div>
            <div class="About-Item">
                <img src={Mission} alt="Mission Title" className="AboutImageTitle" />
            </div>
            <div class="About-Item">
            </div>
        </div>
    );
}
