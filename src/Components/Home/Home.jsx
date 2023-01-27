import React from 'react'
import About from "./About"
import Contact from "./Contact"
const Home = () => {
  return (
    <>
    <section className="home  ">
    <div className="container ">
        <div class="row">
            <div class="col-md-6 py-3">
            
               
                <h1 class="text-dark ms-5 mt-5 py-5 fw-bold headings">Welcome To <span class="text-danger"> Book Store</span></h1>
                <h2 class="ms-5 fst-italic text-success">When you read someone else gets Inspired</h2>
                <br/>
                 
              
                <a href="/" class="btn btn-info ms-5 fw-bold fs-5">Learn More</a>

            </div>
            <div class="col-md-6    text-center ">
              
                <img src="./image/book.gif" alt=""  class="py-2" />
                
            </div>

        </div>
    </div>
   
  

  {/* <!-- {{!-- Main section ends --}} --> */}

 
                  {/* {{!-- Services sections --}} --> */}

                  <div class="container">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2 class="section-title">Services We Provide</h2>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">24 x 7</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Free Delivery</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-receipt icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Secure Payments</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Cloud Service</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        
         
        
       
    </div>
</div>
        
{/* <!-- 
{{!-- Service section ends --}} */}

</section>

<About/>
<Contact/>
</>
  )
}

export default Home