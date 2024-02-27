import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";
import Adminpage from "./pages/Adminpage";
import AddProductpage from "./pages/AddProductPage";
import Updatepage from "./pages/Updatepage";
import Cartpage from "./pages/Cartpage";
import { CartProvider } from "./context/Cartcontext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:id" element={<Detailpage />} />
          <Route path="/admin" element={<Adminpage />} />
          <Route path="/admin/add" element={<AddProductpage />} />
          <Route path="/admin/updateProducts/:id" element={<Updatepage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
