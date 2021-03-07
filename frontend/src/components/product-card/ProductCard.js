import React from 'react';
import Image from '../../assets/image_01.jpg';

const ProductCard = () => {
    return (
        <div className="card">
            <img src={Image} className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default ProductCard;
