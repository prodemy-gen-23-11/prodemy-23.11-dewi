import React from 'react'
import Header from "../layout/Header"
import ProductPage from "../layout/ProductPage"
import Footer from "../layout/Footer"

export default function Homepage() {
  return (
    <div>
      <div className="bg-slate-100">
      <Header />
      <ProductPage />
      <Footer />
    </div>
    </div>
  )
}
