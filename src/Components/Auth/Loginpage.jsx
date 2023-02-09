import React from 'react'

const Loginpage =() =>{
    return (

        <section className="login-form py-3">
    
        <div class="container shadow-lg p-3  py-3 mb-2 rounded text-center reg">
           <div class="row ">
                <h1 class="text-center">Login now</h1>
                <div class="col-md-6 mt-5 ">
                        <h1 className='fst-italic mb-3'>Welcome to E-<span class="text-danger">Buy</span></h1>
                        <p className='text-success mb-3 fs-4'>Register now and get enroll to new tranding books in exclusive offers.</p>
                        <h3 className='mb-3'>Don't have account?</h3>
                        <a href="/Registerpage" class="btn btn-warning ms-2 fw-bold fs-5 mt-4 " type="submit">Register</a>
                   </div>
               <div class="col-md-6 mt-5 ">
                  
                   <div class="card  ">
                       <div class="card-body shadow-lg p-3  py-3  rounded ">
                           
                           <form action="/contact" method="POST"autocomplete="off">
      
                           <div class="form-floating">
                               <input type="text" class="form-control" name="fullname"   placeholder="Full Name"
                                    required/>
                               <label for="floatingInputGroup1">username</label>
                           </div>
                            
                           <div class="form-floating mt-3">
                               <input type="password" class="form-control" name="password" placeholder="password" required/>
                               <label for="floatingInputGroup1">password</label>
                           </div>
                            
                           <button type="submit" class="btn btn-success ms-2 fw-bold fs-5 mt-4 ">Login</button>
                           
                           </form>
      
                       </div>
      
                   </div>
                   </div>
      
                   
               </div>
           </div>
      
      </section>
    )
}
export default Loginpage