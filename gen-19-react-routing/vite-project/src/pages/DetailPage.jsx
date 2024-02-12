import React from 'react'
import Footer from '../layout/Footer';
import ProductDetail from '../layout/ProductDetail';
import Header2 from '../layout/Header2';

export default function DetailPage() {
  return (
    <div className="bg-gray-200">
      <Header2 />
      <ProductDetail />
      <Footer />
    </div>
  )
}
