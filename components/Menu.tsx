import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
const menu_list = [
  {
    menu_name: "Alphonso",
    menu_image: "/images/product2.png",
  },
  {
    menu_name: "Devgad",
    menu_image: "/images/product2.png",
  },
  {
    menu_name: "Totapuri",
    menu_image: "/images/product2.png",
  },
  {
    menu_name: "Kesar",
    menu_image: "/images/product2.png",
  },
  {
    menu_name: "Rajapuri",
    menu_image: "/images/product2.png",
  },
  {
    menu_name: "Himsagar",
    menu_image: "/images/product2.png",
  },
];
const Menu = () => {
  return (
    <Box>
      <div className="menu_list">
        <h1 className="center" >Mango Variety</h1>
        <div className="menu_item">
          {menu_list.map((menu_list, index ) => {
            return (
              <div key={index} className="menu_image">
                <Image
                  src={menu_list.menu_image}
                  height={200}
                  width={200}
                  alt=""
                />
                <h3>{menu_list.menu_name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default Menu;
