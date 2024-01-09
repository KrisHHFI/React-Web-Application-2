import React from 'react';

export default function AboutItem2({ AboutItem2Number, AboutItem2Text }) {

    return (
        <div class="Our-Story-Item">
            <div class="Our-Story-Item-Number">
                {AboutItem2Number}
            </div>
            <div class="Our-Story-Item-Text">
                {AboutItem2Text}
            </div>
        </div>
    );
}
