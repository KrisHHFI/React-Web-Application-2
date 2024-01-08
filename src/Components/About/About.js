import React from 'react';
import AboutItem from './About-Item';
import OfficeInterior from '../../Images/About/OfficeInterior.png';
import ConstructionSite from '../../Images/About/ConstructionSite.png';
import HelsinkiSkyline from '../../Images/About/HelsinkiSkyline.jpg';
import Who from '../../Images/About/Who.png';
import WhatWeDo from '../../Images/About/WhatWeDo.png';
import Office from '../../Images/About/Office.png';
import Mission from '../../Images/About/Mission.png';

export default function About() {
    const titleText1 = `Tempor incididunt ut labore!`;
    const text1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.`;
    const titleText2 = `Cillum dolore eu fugiat!`;
    const text2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

    return (
        <div class="About-Container">
            <AboutItem
                coverImage={OfficeInterior}
                titleImage={Who}
                titleText={titleText1}
                text={text1}
            />
            <AboutItem
                coverImage={ConstructionSite}
                titleImage={WhatWeDo}
                titleText={titleText2}
                text={text2}
            />
            <AboutItem
                coverImage={HelsinkiSkyline}
                titleImage={Office}
                titleText={titleText1}
                text={text1}
            />
            <div class="About-Item">
                <img src={Mission} alt="Mission Title" className="AboutImageTitle" />
            </div>
            <div class="About-Item">
            </div>
        </div>
    );
}
