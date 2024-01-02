import React, { useEffect } from 'react';
import ClockCase from '../Images/Clock Case.png';
import Signature from '../Images/Signature.svg';

export default function Clock() {
    const full_Turn = 360;

    function updateClock() {
        const localTime = new Date();

        // Get the current hours, minutes, and seconds
        const date = localTime.getDate();
        const hours = localTime.getHours();
        const minutes = localTime.getMinutes();
        const seconds = localTime.getSeconds();

        // Calculate the rotation angles
        let hourRotation = ((hours % 12) / 12) * full_Turn; // 12 hours in a clock, 360 degrees in a circle
        hourRotation += (minutes / 60) * 30; // 30 degrees per hour (360 degrees / 12 hours)
        const minuteRotation = (minutes / 60) * full_Turn; // 60 minutes in an hour, 360 degrees in a circle
        const secondRotation = ((seconds + localTime.getMilliseconds() / 1000) / 60) * full_Turn;

        // Get the clock elements
        const dateContainer = document.getElementById('date');
        const hourHand = document.getElementById('hourHand');
        const minuteHand = document.getElementById('minuteHand');
        const secondHand = document.getElementById('secondHand');

        // Apply the date to the date container
        dateContainer.innerHTML = date;

        // Apply the rotations to the clock hands
        hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
        minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
        secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
    }

    function initializeClock() {
        updateClock();
        setInterval(updateClock, 100); // Update every 100 milliseconds
    }

    useEffect(() => {
        initializeClock(); // Call initializeClock when the component is mounted
    }, []);

    document.addEventListener("DOMContentLoaded", initializeClock);

    return (
        <div className="Section1">
            <div class="clock">
                <img src={ClockCase} class="clockCaseImage clockCentre"></img>
                <div class="face clockCentre">
                    <div id="alphanumerics" class="alphanumerics">
                        <p class="twelve">12</p>
                        <p class="one">1</p>
                        <p class="two">2</p>
                        <p class="three">3</p>
                        <p class="four">4</p>
                        <p class="five">5</p>
                        <p class="six">6</p>
                        <p class="seven">7</p>
                        <p class="eight">8</p>
                        <p class="nine">9</p>
                        <p class="ten">10</p>
                        <p class="eleven">11</p>
                        <img src={Signature} class="signature clockCentre"></img>
                        <div class="date" id="date"></div>
                    </div>
                    <div id="hands" class="clockCentre">
                        <div class="handBase"></div>
                        <div class="hourHand clockCentre" id="hourHand">
                            <div class="hourHandInvertedPointer"></div>
                            <div class="hourHandPointer"></div>
                        </div>
                        <div class="minuteHand clockCentre" id="minuteHand">
                            <div class="minuteHandInvertedPointer"></div>
                            <div class="minuteHandPointer"></div>
                        </div>
                        <div class="secondHand clockCentre" id="secondHand">
                            <div class="secondHandPointer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}