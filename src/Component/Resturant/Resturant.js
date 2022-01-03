import React, { useState } from 'react'
import './Style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
 ...new Set(
  Menu.map((curElem) => {
   return curElem.category;
  })
 ), "All",
];
console.log(uniqueList);

const Resturant = () => {
 const [menudata, setMenudata] = useState(Menu);
 const [menuList, setMenuList] = useState(uniqueList);

 const filterItem = (category) => {
  if (category === "All") {
   setMenudata(Menu);
   return
  }
  const updatedList = Menu.filter((curElem) => {
   return curElem.category === category;
  });
  setMenudata(updatedList);
 }

 return (
  <>
   <Navbar filterItem={filterItem} menuList={uniqueList} />
   <MenuCard menudata={menudata} />
  </>
 )
}

export default Resturant;
//Pratik creation
