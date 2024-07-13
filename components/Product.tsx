<<<<<<< HEAD
import React from 'react'

type Props = {}
const Menu_List = [
  {
  menu_name:"ratnagiri hapus mango ",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
}
];

const Product = (props: Props) => {
  return (
    <div className="explore-menu">
      <h1>Explore our Mango variety</h1>
      <p className='menu-txt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, est?</p>
      <div className="explore-menu-list">
        {Menu_List.map}

      </div>
    </div>
  )
}

export default Product
=======
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
    <div id="products" className="container">
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
>>>>>>> 62ded01fe5b60de5e2064ce31e5c4d27a205ab8b
