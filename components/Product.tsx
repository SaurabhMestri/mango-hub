import React, { Key } from "react";

type ProductsProps = {
  products: {
    product_name: string;
    product_image: string;
    price : number;
  }[];
};

const Product = (props: ProductsProps) => {
  
  return (
    <div id="products" className="container">
      <h1>Mangoes Variety</h1>
      <div className="product-menu">
        {props?.products?.map((product, index: Key) => {
          return (
            <div key={index} className="product-card">
              <img height={100} width='100%' src={product.product_image} alt={product.product_name} />
              <p>{product.product_name}</p>
              <h3>$ {product.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default Product;
