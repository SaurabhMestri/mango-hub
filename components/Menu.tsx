import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Menu = ({products}) => {
  return (
    <Box>
      <div className="menu_list">
        <h1 className="center" >Mango Variety</h1>
        <div className="menu_item">
          {products.map((product, index ) => {
            return (
              <div key={index} className="menu_image">
                <Image
                  src={product.menu_image}
                  height={200}
                  width={200}
                  alt=""
                />
                <h3>{product.menu_name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default Menu;
