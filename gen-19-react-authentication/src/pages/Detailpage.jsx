import React from "react";
import ProductDetail from "../layout/ProductDetail";
import Header2 from "../layout/Header2";
import Footer from "../layout/Footer"

export default function Detailpage() {
  return (
    <div>
      <div className="bg-slate-100">
      <Header2 />
      <ProductDetail />
      <Footer />
    </div>
    </div>
  );
}
