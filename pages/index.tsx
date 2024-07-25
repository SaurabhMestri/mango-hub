import Home from "@/components/Home";

export default Home

export const getStaticProps = async () => {
    const data = await fetch('http://localhost:5000/products').then((res) => res.json()).catch((err) => console.log("SAURABH",err))
    return {
      props: {
        products:  data.products || []
      },
    };
  };

