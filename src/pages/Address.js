import React from 'react'

export default function Address() {
    return (
        <section className="rate mb-5 budget">
      <div className="container">
    
    <div className="clearfix"></div>
    <div className="row justify-content-center align-items-center">
    <div className="tabhed mt-4 p-3 col-xl-8 col-lg-8 col-md-12 col-sm-12">
      <form>
        <div className="form-row">
              <div className="col-md-6 col-sm-12 mb-3 mt-3">
                <input type="text" className="form-control" placeholder="First name" required />
                </div>
              <div className="col-md-6 col-sm-12 mb-3 mt-3">
               <input type="text" className="form-control" placeholder="Last name" required />
                </div>
             </div>
             <div className="form-row">
              <div className="col-md-6 col-sm-12 mb-3 mt-3">
                <input type="E-mail" className="form-control" placeholder="E-mail" required />
                </div>
              <div className="col-md-6 col-sm-12 mb-3 mt-3">
               <input type="Phone" className="form-control" placeholder="Phone" required />
                </div>
             </div>
             <div className="form-row">
              <div className="col-md-6 col-sm-12 mb-3 mt-3">
                <input type="Phone" className="form-control" placeholder="Street" required />
                 </div>
                 <div className="col-md-6 col-sm-12 mb-3 mt-3">
                  <input type="City" className="form-control" placeholder="City" required />
                   </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 col-sm-12 mb-3 mt-3">
                  <input type="Zip Code" className="form-control" placeholder="Zip Code" required />
                   </div>
                   <div className="col-md-6 col-sm-12 mb-3 mt-3">
                    <input type="United Arab Emirates" className="form-control" placeholder="United Arab Emirates" required />
                     </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 col-sm-12 mb-3 mt-3">
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Dubai</option>
                      </select></div>
                    </div>
        <button type="submit" className="btn btn-danger">Add Address</button>
      </form> 
    </div>
   </div>
  </div>
    </section>
    
    )
}
