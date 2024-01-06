import React from 'react';
import Product from './Product';
import Product1 from '../../Images/Product-1.jpg';
import Product1Logo from '../../Images/Product-1-Logo.png';
import Product2 from '../../Images/Product-2.jpg';
import Product2Logo from '../../Images/Product-2-Logo.png';
import Product3 from '../../Images/Product-3.jpg';
import Product3Logo from '../../Images/Product-3-Logo.png';
import Product4 from '../../Images/Product-4.jpg';
import Product4Logo from '../../Images/Product-4-Logo.png';
import Product5 from '../../Images/Product-5.jpg';
import Product5Logo from '../../Images/Product-5-Logo.png';
import Product6 from '../../Images/Product-6.jpg';
import Product6Logo from '../../Images/Product-6-Logo.png';

export default function Products() {

    const Product1Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua.`;
    const Product2Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`;
    const Product3Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

    return (
        <div class="Product-Container">
            <div className="Product-Item">
                <Product
                    imageSrc={Product1}// Credit to Mark Stebnicki, Pexels
                    imageLogoSrc={Product1Logo}
                    text={Product1Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product2}// Credit to Holger Schué, Pexels
                    imageLogoSrc={Product2Logo}
                    text={Product2Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product3}// Credit to Quang Nguyen Vinh, Pexels
                    imageLogoSrc={Product3Logo}
                    text={Product3Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product4}// Credit to Claudio, Pexels
                    imageLogoSrc={Product4Logo}
                    text={Product1Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product5}// Credit to Ron Lach, Pexels
                    imageLogoSrc={Product5Logo}
                    text={Product2Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product6}// Credit to Ron Lach, Pexels
                    imageLogoSrc={Product6Logo}
                    text={Product3Text}
                />
            </div>
        </div>
    );
}
