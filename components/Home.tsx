import Head from "next/head";
import Image from "next/image";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Mango Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="hero-container">
          <div className="hero-text" >
            <h3>Organic</h3>
            <h1>Mango</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              neque. Veniam, ullam exercitationem. Molestias nobis vero
              exercitationem, quo totam obcaecati expedita eius sunt maiores
              explicabo rem porro doloribus assumenda blanditiis?
            </p>
          </div>
          <img className="hero-img" src="/images/logo.png" alt="hero" />
        </div>
      </main>
    </>
  );
};

export default Home;
