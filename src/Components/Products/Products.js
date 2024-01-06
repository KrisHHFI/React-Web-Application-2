import React from 'react';
import Product from './Product';
import Product1 from '../../Images/Product-1.jpg';
import Product1Logo from '../../Images/Product-1-Logo.png';

export default function Products() {

    const Product1Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua.`;

    return (
        <div class="Product-Container">
            <div className="Product-Item">
                <Product
                    imageSrc={Product1}
                    imageLogoSrc={Product1Logo}
                    text={Product1Text}
                />
            </div>
            <div class="Product-Item">

            </div>
            <div class="Product-Item">
                <Product />
            </div>
            <div class="Product-Item">

            </div>
            <div class="Product-Item">
                <Product />
            </div>
            <div class="Product-Item">

            </div>
            <div class="Product-Item">
                <Product />
            </div>
            <div class="Product-Item">

            </div>
            <div class="Product-Item">
                <Product />
            </div>
        </div>
    );
}
