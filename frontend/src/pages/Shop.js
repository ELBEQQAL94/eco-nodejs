import React from 'react'

// Components
import ProductCard from "../components/product-card/ProductCard";

const Shop = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <ProductCard />
            </div>
            <div className="col-md-4">
                <ProductCard />
            </div>
            <div className="col-md-4">
                <ProductCard />
            </div>
        </div>
    )
}

export default Shop;
