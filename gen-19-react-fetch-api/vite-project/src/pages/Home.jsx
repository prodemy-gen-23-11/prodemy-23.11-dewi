import React from 'react'
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ProductPage from '../layout/ProductPage';

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  )
}
