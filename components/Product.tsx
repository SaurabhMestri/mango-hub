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
    <div id="products" className="container">
      <h1>Mangoes Variety</h1>
      <div className="product-menu">
        {props?.products?.map((product, index: Key) => {
          return (
            <div key={index} className="product-card">
              <img height={100} width={200} src={product.product_image} alt={product.product_name} />
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
