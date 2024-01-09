import React from 'react';

export default function AboutItem3({ AboutItem3Title, AboutItem3Text }) {

    return (
        <div class="About-Item Our-Story-Container-Part-2">
            <div class="About-Text-Box Our-Story-Container-Part-2-Text-Box">
                <div class="About-Text-Title">
                    {AboutItem3Title}
                </div>
                <div>
                    {AboutItem3Text}
                </div>
            </div>
        </div>
    );
}
