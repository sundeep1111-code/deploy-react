import React from 'react'

export default function Profile() {
    return (
        <div className='container'>
            
            <div className="tabs_wrapper mt-5">
            <div class="btn btn-danger col-xl-2 col-lg-2  col-md-4 col-sm-4 float-right mr-3 mb-4">Book My Box</div>
            <div className='clearfix'></div>
  <div className="row">
    <div className="col-md-3 mb-3">
        <ul className="nav nav-pills flex-column tab" id="myTab" role="tablist">
  <li className="nav-item mb-2 p-0">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="home" aria-selected="true">
    <img src="/images/profile.svg"/><span>Profile</span></a>
  </li>
  <li className="nav-item mb-2 p-0">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#style" role="tab" aria-controls="profile" aria-selected="false">
    <img src="/images/stylei.svg"/><span>My Style</span></a>
  </li>
  <li className="nav-item mb-2 p-0">
    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#order" role="tab" aria-controls="contact" aria-selected="false">
    <img src="/images/order.svg"/><span>My Orders</span></a>
  </li>
  <li className="nav-item mb-2 p-0">
    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#address" role="tab" aria-controls="contact" aria-selected="false">
    <img src="/images/address.svg"/><span>My Address</span></a>
  </li>
  <li className="nav-item mb-2 p-0">
    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#chat" role="tab" aria-controls="contact" aria-selected="false">
    <img src="/images/chat.svg"/><span>Chat</span></a>
  </li>
</ul>
    </div>
     <div className="col-md-9 mb-5">
      <div className="tab-content p-3" id="myTabContent">
  <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="home-tab">
  <div class="tabhed mb-2 p-3"><img src="/images/profile.svg"/><span>Profile</span>
          <p class="msp p-0 m-0">You can edit your profile here</p>
        </div>  
        <div class="tabhed mb-2 p-3">
          <form class="needs-validation">
            <div class="form-row">
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom01">First name</label>
                <input type="text" class="form-control" placeholder="First name" required/>
                </div>
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom02">Last name</label>
                <input type="text" class="form-control" placeholder="Last name"required/>
                </div>
             </div>
            <div class="form-row">
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom03">Birthday:</label>
                <div class="input-group date">
                  <input type="text" class="form-control" id="datepicker" placeholder="MM/DD/YYYY" required/>
              </div>
              </div>
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom04">Nationality:</label>
                <select class="form-control" id="exampleFormControlSelect1" placeholder="Nationality" required>
                  <option>Saudi Arabia</option>
                  <option>India</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
                <div class="form-row col-12 mt-3 mb-3">
                
                <div class="col-md-3">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control" required>
                    <option selected>+971</option>
                    <option>+966</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" required/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity">Email</label>
                  <input type="email" class="form-control" id="Email" required/>
                </div> 
                
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </form>
          </div> 
  </div>
  <div className="tab-pane fade" id="style" role="tabpanel" aria-labelledby="profile-tab">
  <div class="tabhed mb-2 p-3"><img src="/images/profile.svg"/><span>My Style</span>
          <p class="msp p-0 m-0">You can edit your profile here</p>
        </div>  
        <div class="tabhed mb-2 p-3">
          <form class="needs-validation">
            <div class="form-row">
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom01">First name</label>
                <input type="text" class="form-control" placeholder="First name" required/>
                </div>
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom02">Last name</label>
                <input type="text" class="form-control" placeholder="Last name"required/>
                </div>
             </div>
            <div class="form-row">
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom03">Birthday:</label>
                <div class="input-group date">
                  <input type="text" class="form-control" id="datepicker" placeholder="MM/DD/YYYY" required/>
              </div>
              </div>
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom04">Nationality:</label>
                <select class="form-control" id="exampleFormControlSelect1" placeholder="Nationality" required>
                  <option>Saudi Arabia</option>
                  <option>India</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
                <div class="form-row col-12 mt-3 mb-3">
                
                <div class="col-md-3">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control" required>
                    <option selected>+971</option>
                    <option>+966</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" required/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity">Email</label>
                  <input type="email" class="form-control" id="Email" required/>
                </div> 
                
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </form>
          </div> 
  </div>
  
  <div className="tab-pane fade" id="order" role="tabpanel" aria-labelledby="contact-tab">
  <div class="tabhed mb-2 p-3"><img src="/images/profile.svg"/><span>My Order</span>
          <p class="msp p-0 m-0">You can edit your profile here</p>
        </div>  
        <div class="tabhed mb-2 p-3">
          <form class="needs-validation">
            <div class="form-row">
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom01">First name</label>
                <input type="text" class="form-control" placeholder="First name" required/>
                </div>
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom02">Last name</label>
                <input type="text" class="form-control" placeholder="Last name"required/>
                </div>
             </div>
            <div class="form-row">
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom03">Birthday:</label>
                <div class="input-group date">
                  <input type="text" class="form-control" id="datepicker" placeholder="MM/DD/YYYY" required/>
              </div>
              </div>
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom04">Nationality:</label>
                <select class="form-control" id="exampleFormControlSelect1" placeholder="Nationality" required>
                  <option>Saudi Arabia</option>
                  <option>India</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
                <div class="form-row col-12 mt-3 mb-3">
                
                <div class="col-md-3">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control" required>
                    <option selected>+971</option>
                    <option>+966</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" required/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity">Email</label>
                  <input type="email" class="form-control" id="Email" required/>
                </div> 
                
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </form>
          </div> 
  
  </div>
  <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="contact-tab">
  <div class="tabhed mb-2 p-3"><img src="/images/profile.svg"/><span>My Address</span>
          <p class="msp p-0 m-0">You can edit your profile here</p>
        </div>  
        <div class="tabhed mb-2 p-3">
          <form class="needs-validation">
            <div class="form-row">
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom01">First name</label>
                <input type="text" class="form-control" placeholder="First name" required/>
                </div>
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom02">Last name</label>
                <input type="text" class="form-control" placeholder="Last name"required/>
                </div>
             </div>
            <div class="form-row">
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom03">Birthday:</label>
                <div class="input-group date">
                  <input type="text" class="form-control" id="datepicker" placeholder="MM/DD/YYYY" required/>
              </div>
              </div>
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom04">Nationality:</label>
                <select class="form-control" id="exampleFormControlSelect1" placeholder="Nationality" required>
                  <option>Saudi Arabia</option>
                  <option>India</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
                <div class="form-row col-12 mt-3 mb-3">
                
                <div class="col-md-3">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control" required>
                    <option selected>+971</option>
                    <option>+966</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" required/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity">Email</label>
                  <input type="email" class="form-control" id="Email" required/>
                </div> 
                
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </form>
          </div> 
  
  </div>
  <div className="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="contact-tab">
  <div class="tabhed mb-2 p-3"><img src="/images/profile.svg"/><span>My Chat</span>
          <p class="msp p-0 m-0">You can edit your profile here</p>
        </div>  
        <div class="tabhed mb-2 p-3">
          <form class="needs-validation">
            <div class="form-row">
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom01">First name</label>
                <input type="text" class="form-control" placeholder="First name" required/>
                </div>
              <div class="col-md-6 col-sm-12 mb-3 mt-3">
                <label for="validationCustom02">Last name</label>
                <input type="text" class="form-control" placeholder="Last name"required/>
                </div>
             </div>
            <div class="form-row">
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom03">Birthday:</label>
                <div class="input-group date">
                  <input type="text" class="form-control" id="datepicker" placeholder="MM/DD/YYYY" required/>
              </div>
              </div>
              <div class="col-md-6 mb-3 mt-3">
                <label for="validationCustom04">Nationality:</label>
                <select class="form-control" id="exampleFormControlSelect1" placeholder="Nationality" required>
                  <option>Saudi Arabia</option>
                  <option>India</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
                <div class="form-row col-12 mt-3 mb-3">
                
                <div class="col-md-3">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control" required>
                    <option selected>+971</option>
                    <option>+966</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" required/>
                </div>
                <div class="col-md-6">
                  <label for="inputCity">Email</label>
                  <input type="email" class="form-control" id="Email" required/>
                </div> 
                
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </form>
          </div> 
  
  
  </div>

</div>
    </div>
  </div>
</div></div> 
    )
}
