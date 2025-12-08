import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ProductDetailPage from "./pages/ProductDetailPage"
import Registration from "./pages/Registration"
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {


  return (
    <>
     

   <Navbar/>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/registration" element={<Registration/>} />
    <Route path="/product/:id" element={<ProductDetailPage/>} />

    

   
    </Routes>
         <Footer/>
   

    </>
  )
}

export default App
