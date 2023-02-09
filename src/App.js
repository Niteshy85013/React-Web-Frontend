 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from "./Components/Layouts/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Products";
import ShoopingCart from "./Components/Products/ShoopingCart";
import Registerpage from "./Components/Auth/Registerpage";
import Loginpage from "./Components/Auth/Loginpage";
// import Item from "./DangerZone/Item";
// import Cart from "./demo/Cart";
 
import "./Style/Product.css";
import "./Style/Main.css";
 
 
function App() {
  return (
    <Router>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
 
  <Route path="/Product" element ={<Product/>}/>
  <Route path="/Loginpage" element ={<Loginpage/>}/>
  <Route path="/Registerpage" element ={<Registerpage/>}/>
  <Route path="/ShoopingCart" element={<ShoopingCart/>}/>
 
  
</Routes>
{/* <Footer/> */}
</Router>
  );
}

export default App;
