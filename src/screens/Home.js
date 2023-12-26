import React from 'react';
import '../css/style.css';

import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import CategoriesSection from '../components/CategoriesSection';
import ProductsSection from '../components/ProductsSection';
import DiscServiceSection from '../components/DiscServiceSection';


export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div><CategoriesSection/></div>
      <div><ProductsSection/></div>
      <div><DiscServiceSection/></div>
      <div><Footer/></div>
    </div>
  )
}
