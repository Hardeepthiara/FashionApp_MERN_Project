import React from 'react';
import '../css/style.css';

import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import CatWiseProductsSection from '../components/CatWiseProductsSection';



export default function Products() {
  return (
    <div>
      <div><Navbar/></div>
      <div><CatWiseProductsSection/></div>
      <div><Footer/></div>
    </div>
  )
}
