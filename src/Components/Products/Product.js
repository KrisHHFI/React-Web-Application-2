import React from 'react';
import Product1Logo from '../../Images/Product-1-Logo.png';
import Product1 from '../../Images/Product-1.jpg';

export default function Product() {

    return (
        <div class="Product">
            <img src={Product1} alt="Product Image" className="ProductImage" />
            <div class="Product-Section">
                <img src={Product1Logo} alt="Product Image Logo" className="ProductImageLogo" />
            </div>
            <div class="Product-Section">
                <div class="Product-Section-Divider">
                    <div class="Product-Text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </div>
                <div class="Product-Section-Divider">
                    <a class="Product-Link" href="#">Lorem</a>
                </div>
            </div>
        </div>
    );
}
