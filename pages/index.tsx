import Home from "@/components/Home";

export default Home


const Products = [
    {
      product_name: " Ratnagiri Hapus (small 150-180g)",
      product_image: "/images/product2.png",
      price: 100,
    },
    {
      product_name: " Ratnagiri Hapus (small 150-180g)",
      product_image: "/images/product2.png",
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
    {
      product_name: " Devgad Hapus (small 150-180g)",
      product_image: "/images/product1.png",
      price: 100,
    },
    {
      product_name: " Devgad Hapus (small 150-180g)",
      product_image: "/images/product1.png",
      price: 300,

    },
    {
      product_name: " Devgad Hapus (small 150-180g)",
      product_image: "/images/product1.png",
      price: 200,
    },
    {
      product_name: " Devgad Hapus (small 150-180g)",
      product_image: "/images/product1.png",
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