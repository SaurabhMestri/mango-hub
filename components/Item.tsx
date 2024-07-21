import React, { Key } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import ProductDetails from "../pages/ProductDetails";

const product_list = [
  {
    product_name: " Ratnagiri Hapus (small 150-180g)",
    product_image: "/images/variety/Ratnagiri.jpg",
    price: 100,
  },
  {
    product_name: " Devgad Hapus (small 150-180g)",
    product_image: "/images/variety/devgad.jpg",
    price: 300,
  },
  {
    product_name: " Ratnagiri Hapus (small 150-180g)",
    product_image: "/images/product2.png",
    price: 200,
  },
  {
    product_name: " Ratnagiri Hapus (small 150-180g)",
    product_image: "/images/product2.png",
    price: 100,
  },
];

const Item = () => {
  return (
    <div className="container">
      <h1 className="center">Mostly Sales </h1>
      <Box>
        <div className="product_container">
      <Link href="../ProductDetails">
            <div className="product-menu">
              {product_list.map((product_list, index: Key) => {
                return (
                  <div key={index} className="product-card">
                    <Image
                      src={product_list.product_image}
                      height={200}
                      width={200}
                      alt=""
                    />
                    <h3>{product_list.product_name}</h3>
                    <p>{product_list.price}</p>
                    <button className="btn2">Add to Cart</button>
                  </div>
                );
              })}
            </div>
              </Link>
        </div>
      </Box>
    </div>
  );
};

export default Item;
