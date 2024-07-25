import Image from "next/image";
import React from "react";
import image from "../public/images/variety/Ratnagiri.jpg";
import Item from "../components/Item";
type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <div className="main-container">
      <div className="product-container border-radius">
        <div className=" single-product">
          <div className="  row">
            <div className="col1">
              <Image src={image} height={400} width={400} alt="" />
            </div>
            <div className="col2">
              <h2>Ratnagiri mango</h2>
              <p>Lorem ipsum dolor sit .</p>
              <h3 className="margin-10px">$50</h3>
              <select name="" id="">
                <option value="">small</option>
                <option value="">medium</option>
                <option value="">Large</option>
              </select>
              Quantity
              <input type="number" name="" id="" />
              <div className="atc margin-10px">
                <a className="btn" href="">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product-detail center">
          <h2>Product details</h2>
        </div>
        <div className="info">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt saepe? Minima consequuntur delectus dolores ipsam dolorum laboriosam at distinctio soluta, inventore cum magni itaque magnam exercitationem! Sed doloremque hic culpa, sunt in, quae earum voluptatem officia ipsa velit numquam aut nemo accusamus quo impedit soluta. Velit distinctio asperiores porro.</p>
          </div>
<div className="product-review">
  <h2>Product Review</h2>
  <div className="product-image-review">
    <Image src={image} height={150} width={150} alt=""/>
    <Image src={image} height={150} width={150} alt=""/>
    <Image src={image} height={150} width={150} alt=""/>
    <Image src={image} height={150} width={150} alt=""/>
    <Image src={image} height={150} width={150} alt=""/>
    <Image src={image} height={150} width={150} alt=""/>
  </div>
</div>

      </div>
    </div>
  );
};

export default ProductDetails;
