import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Detailpage from "./pages/Detailpage"
import Adminpage from "./pages/Adminpage"
import AddProduct from "./layout/AddProduct"




function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Homepage />}/>
      <Route path="/detail/:id" element = {<Detailpage />}/>
      <Route path="/admin" element = {<Adminpage />}/>
      <Route path="/form-add" element = {<AddProduct />}/>
    </Routes>     
    </BrowserRouter>
  )
}

export default App
