import Home from "@/components/Home";

export default Home


const Products = [
    {
      product_name: "Hapus Ratnagiri (small 150-180g)",
      product_image: "/images/logo.png",
      price: 100,
    },
    {
      product_name: "Hapus Ratnagiri (small 150-180g)",
      product_image: "/images/logo.png",
      price: 300,

    },
    {
      product_name: "Hapus Ratnagiri (small 150-180g)",
      product_image: "/images/logo.png",
      price: 200,
    },
    {
      product_name: "Hapus Ratnagiri (small 150-180g)",
      product_image: "/images/logo.png",
      price: 100,
    },
  ];
  
  export const getStaticProps = async () => {
    
    return {
      props: {
        products:Products
      },
    };
  };