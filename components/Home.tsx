import Head from "next/head";
import Image from "next/image";
import React from "react";
import Product, { ProductInterface } from "./Product";
import Menu from "./Menu";
import Item from "./Item"

interface HomeProps {
  products : ProductInterface[]
}

const Home = (props : HomeProps) => {
  
  return (
    <>
      <Head>
        <title>MangoHub</title>
        <meta name="description" content="Mango Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="hero-section">
          <div className="hero-text">
            <h3>Organic</h3>
            <h1>Mango</h1>
            <p>
              The whole world best quality Alphonso mangoes come from India,
              within India it comes from Konkan, the coastal region of Western
              Maharashtra. Also, in the entire coastal region of Maharashtra,
              Ratnagiri district has gained much popularity for producing the
              best flavoured, tasty, juicy, and aromatic Alphonso varieties.
              Cherish the authentic taste of Alphonso from the Konkan Region of
              Maharashtra.
            </p>
            <button className="btn2">See More</button>
          </div>
        </div>
        {/* <Product products={props.products} /> */}
        <Menu/>
        <Item/>
      </div>
    </>
  );
};

export default Home;
