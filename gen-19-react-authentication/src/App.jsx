import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";
import Adminpage from "./pages/Adminpage";
import AddProductpage from "./pages/AddProductPage";
import Updatepage from "./pages/Updatepage";
import Cartpage from "./pages/Cartpage";
import { CartProvider } from "./context/Cartcontext";
import { Provider } from "react-redux";
import AboutPage from "./pages/Aboutpage";
import store from "./redux/store";
import Loginpage from "./pages/Loginpage";
import PrivateRoute from "./component/route/PrivateRoute";
import NotFoundpage from "./pages/NotFoundpage";
import GuestRoute from "./component/route/GuestRoute";

function App() {
  return (
    // <CartProvider>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Loginpage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/detail/:id" element={<Detailpage />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/admin" element={<Adminpage />} />
            <Route path="/admin/add" element={<AddProductpage />} />
            <Route path="/admin/updateProducts/:id" element={<Updatepage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
    // </CartProvider>
  );
}

export default App;
