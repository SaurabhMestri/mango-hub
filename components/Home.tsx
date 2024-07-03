import Head from 'next/head'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Mango Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      Abhishek Sanjay Mestri
      </main>
    </>
  )
}

export default Home