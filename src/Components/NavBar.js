import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {

  render() {
    return (
      <div className='container'>   
         <nav className="navbar navbar-expand-md">
         <div className="row">
           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-4">
           
         <Link to='/' className="navbar-brand"><img className="img-fluid" src='/images/mainlogo.svg'/></Link>
       </div>
       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8"> 
       <button className="navbar-toggler float-sm-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon">
            <ul> <li></li>
             <li></li>
             <li></li>
           </ul>
           </span>
         </button></div>
       </div>
         <div className="collapse navbar-collapse" id="navbarCollapse">
           <ul className="navbar-nav">
             <li className="nav-item">
             <Link to='/' className="nav-link">Choose Styles</Link>
             </li>
             
             <li className="nav-item">
               <Link to='/ConservativeFashion' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse">Conservative Fashion</span></Link>
             </li>
             <li className="nav-item">
             <Link to='/Appearance' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse">Appearance</span></Link>
             </li>
             <li className="nav-item">
             <Link to='/Budget' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse">Budget</span></Link>
             </li>
             <li className="nav-item">
             <Link to='/Profile' className="nav-link"><span data-toggle="collapse" data-target=".navbar-collapse">Profile</span></Link>
             </li>
             <li className="nav-item">
             <Link to='/Address' className="nav-link" href="enterAddress.html"><span data-toggle="collapse" data-target=".navbar-collapse">Enter Address</span></Link>
             </li>
             <li className="nav-item">
             <img src="/images/login.svg"/>
             </li>
             <li className="nav-item">
             <img src="/images/eicon.svg" className='p-1'/>
             </li>
             </ul>
             
         </div>
       </nav>
    </div> 
    )
  }
}

export default NavBar
