import React from 'react'

type Props = {}
const Menu_List = [
  {
  menu_name:"ratnagiri hapus mango ",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
},
  {
  menu_name:"ratnagiri hapus mango",
  menu_image:"image1"
}
];

const Product = (props: Props) => {
  return (
    <div className="explore-menu">
      <h1>Explore our Mango variety</h1>
      <p className='menu-txt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, est?</p>
      <div className="explore-menu-list">
        {Menu_List.map}

      </div>
    </div>
  )
}

export default Product