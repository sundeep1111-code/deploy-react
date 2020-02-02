import React from 'react'
import Title from '../Components/Title'

export default function Appearance() {
    return (
        <section className="rate mb-5">
      <div className="container">
          <Title title={"Help us determine your dominant characteristics"}/>
    <div className="row justify-content-center align-items-center">
      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 mb-5">
        <div><img src="/images/app1.png" height="100%" width="80%" id="the-image" className='imgrad'/></div>
  </div>
  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
    <div id="bottom">
      <div><div className="radio-color clr1"><input type="radio"/><label for="#212121"><div></div></label></div>
      <div className="radio-color clr1"><input type="radio"/><label for="#F0F0F0"><div></div></label></div>
      <div className="radio-color clr2"><input type="radio"/><label for="#B6523A"><div></div></label></div>
      <div className="radio-color clr3"><input type="radio"/><label for="#8F4F27"><div></div></label></div>
      <div className="radio-color clr4"><input type="radio"/><label for="#B56B39"><div></div></label></div>
      <div className="radio-color clr5"><input type="radio"/><label for="#F9EDB7"><div></div></label></div>
      <div className="color-labels">Hair Color</div></div>
      <div><div className="radio-color clr6"><input type="radio" id="#82B41F" name="eyes"/><label for="#82B41F"></label></div>
      <div className="radio-color clr7"><input type="radio" /><label for="#141414"></label></div>
      <div className="radio-color clr8"><input type="radio" /><label for="#1956A7"></label></div>
      <div className="radio-color clr9"><input type="radio" /><label for="#7F4617"></label></div>
      <div className="radio-color clr10"><input type="radio" /><label for="#512907"></label></div>
      <div className="radio-color clr11"><input type="radio" /><label for="#A8A8A8"></label></div>
      <div className="color-labels">Eyes Color</div></div>
      <div><div className="radio-color clr12"><input type="radio" /><label for="#4e2a14"></label></div>
      <div className="radio-color clr13"><input type="radio" /><label for="#9f6143"></label></div>
      <div className="radio-color clr14"><input type="radio" /><label for="#e1a073"></label></div>
      <div className="radio-color clr15"><input type="radio" /><label for="#f1d1b1"></label></div>
      <div className="radio-color clr16"><input type="radio" /><label for="#f2dac1"></label></div>
      <div className="radio-color clr17"><input type="radio" /><label for="#f9ead9"></label></div>
      <div className="color-labels">Skin Color</div></div></div>    
  </div>
  </div>
   </div>
    </section>
    
    )
}
