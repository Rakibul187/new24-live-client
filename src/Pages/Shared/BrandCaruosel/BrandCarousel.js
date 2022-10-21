import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../Assets/Brands/brand1.jpg'
import Brand2 from '../../../Assets/Brands/brand2.png'

const BrandCarousel = () => {
    return (
        <div>
            <h4>Brand Partner</h4>
            <Carousel variant='border border-2'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;