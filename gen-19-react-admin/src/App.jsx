import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Detailpage from "./pages/Detailpage"
import Adminpage from "./pages/Adminpage"


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Homepage />}/>
      <Route path="/detail/:id" element = {<Detailpage />}/>
      <Route path="/admin" element = {<Adminpage />}/>
    </Routes>     
    </BrowserRouter>
  )
}

export default App
