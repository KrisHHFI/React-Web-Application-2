import React from 'react';
import AboutItem from './About-Item';
import OfficeInterior from '../../Images/About/OfficeInterior.png';
import ConstructionSite from '../../Images/About/ConstructionSite.png';
import HelsinkiSkyline from '../../Images/About/HelsinkiSkyline.jpg';
import Who from '../../Images/About/Who.png';
import WhatWeDo from '../../Images/About/WhatWeDo.png';
import Office from '../../Images/About/Office.png';
import OurStory from '../../Images/About/OurStory.png';

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
            <div class="About-Item Our-Story-Container">
                <img src={OurStory} alt="Our Story Title" className="AboutImageTitle" />
                <div class="Our-Story-Item">
                    <div class="Our-Story-Item-Number">
                        8
                    </div>
                    <div class="Our-Story-Item-Text">
                        Years
                    </div>
                </div>
                <div class="Our-Story-Item">
                    <div class="Our-Story-Item-Number">
                        14
                    </div>
                    <div class="Our-Story-Item-Text">
                        Countries
                    </div>
                </div>
                <div class="Our-Story-Item">
                    <div class="Our-Story-Item-Number">
                        40,000
                    </div>
                    <div class="Our-Story-Item-Text">
                        Customers
                    </div>
                </div>
                <div class="Our-Story-Item">
                    <div class="Our-Story-Item-Number">
                        16
                    </div>
                    <div class="Our-Story-Item-Text">
                        Awards
                    </div>
                </div>
            </div>
            <div class="About-Item Our-Story-Container-Part-2">
                <div class="About-Text-Box Our-Story-Container-Part-2-Text-Box">
                    <div class="About-Text-Title">
                        {titleText1}
                    </div>
                    <div>
                        {text2} <br/> <br/> {text2}
                    </div>
                </div>
            </div>
        </div>
    );
}
