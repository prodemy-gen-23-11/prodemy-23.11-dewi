import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Detailpage from "./pages/Detailpage"
import Adminpage from "./pages/Adminpage"
import AddProductpage from "./pages/AddProductPage"
import Updatepage from "./pages/Updatepage"


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Homepage />}/>
      <Route path="/detail/:id" element = {<Detailpage />}/>
      <Route path="/admin" element = {<Adminpage />}/>
      <Route path="/admin/add" element = {<AddProductpage />}/>
      <Route path="/admin/updateProducts/:id" element = {<Updatepage />}/>


    </Routes>     
    </BrowserRouter>
  )
}

export default App
