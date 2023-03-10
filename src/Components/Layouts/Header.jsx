import React from 'react'
 
const Header = () => {
  return (
    
<nav class="navbar border-bottom navbar-expand-lg   rounded  homeback border-dark">
  <div class="container">
         
    <a class="navbar-brand" href="/">
        {/* <img src="./image/logomain.png" alt="logo"  style={{width:"5rem", height:"2rem"}}  class="d-inline-block align-text-top"/> */}
        <h3 class="text-dark   fw-bold ">E-<span class="text-danger">Buy</span></h3>
       </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto    mb-lg-0">

    
        <li class="nav-item">
          <a class="nav-link active ms-2 fst-bold fs-5" aria-current="page" href="/">Home</a>
          
        </li>

        <li class="nav-item">
          <a class="nav-link active ms-2 fs-5" aria-current="page" href="#about">About</a>
        </li>
                                                                                                                                                                                                                                                                    
        <li class="nav-item">
          <a class="nav-link active ms-2 fs-5" aria-current="page" href="#contact-form">Contact</a>
        </li>
      
  
                                       
        
      </ul>

       <a href="/Product" class="btn btn-info ms-2 fw-bold fs-5">Products</a>
                             
       <a href="/" class="btn btn-dark ms-2 fw-bold fs-5">Cart<i class="fa fa-shopping-cart"                                                                                                                                                                                                                                                                                                                                               ></i></a>
        <a href="/Loginpage" class="btn btn-outline-danger ms-2 fw-bold fs-5 " type="submit">Login</a>
        
                                                                                                                                                                                                                                                                   
    
    </div>
  </div>
</nav>

  )
}

export default Header