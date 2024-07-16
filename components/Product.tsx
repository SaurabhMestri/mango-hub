import Image from "next/image";
import React, { Key } from "react";


export interface ProductInterface {
  product_name: string;
  product_image: string;
  price : number;
}
interface ProductsProps  {
  products: ProductInterface[];
};

const Product = (props: ProductsProps) => {
  
  return (
    <div className="container">
      <h1>Mangoes Variety</h1>
      <div className="product-menu">
        {props?.products?.map((product, index: Key) => {
          return (
            <div  key={index} className="product-card">
              <a href="www.google.com">
              <Image height={180} width={180} src={product.product_image} alt={product.product_name} />
              <p>{product.product_name}</p>
              <h3>$ {product.price}</h3>
              <button className="btn2">Add to Cart</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default Product;
