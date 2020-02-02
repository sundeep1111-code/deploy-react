import React from 'react'
import Title from '../Components/Title'

export default function ConservativeFashion() {
    return (
      <section className="rate mb-5">
      <div className="container">
        <Title title={"How conservative are you in your fashion style?"}/>
     <div className="row justify-content-center align-items-center">
      <div className="col-10">
        <div className="mx-auto">
      <table className="table table-bordered table-responsive">
        <thead>
        <tr>
        <th></th>
        <th><img src="/images/cleavage.svg"/></th>
        <th><img src="/images/back.svg"/></th>
        <th><img src="/images/arms.svg"/></th>
        <th><img src="/images/shoulder.svg"/></th>
        <th><img src="/images/legs.svg"/></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th scope="row">I love showing<br/> them off</th>
        <td><input type="radio" name="Cleavage" id="I love showing"/></td>
        <td><input type="radio" name="back" id="I love showing"/></td>
        <td><input type="radio" name="arms" id="I love showing"/></td>
        <td><input type="radio" name="shoulder" id="I love showing"/></td>
        <td><input type="radio" name="legs" id="I love showing"/></td>
        </tr>
        <tr>
        <th scope="row">Sometimes I'll<br/> show them</th>
        <td><input type="radio" name="Cleavage" id="Sometimes i will show them"/></td>
        <td><input type="radio" name="back" id="Sometimes i will show them"/></td>
        <td><input type="radio" name="arm" id="Sometimes i will show them"/></td>
        <td><input type="radio" name="shoulder" id="Sometimes i will show them"/></td>
        <td><input type="radio" name="legs" id="Sometimes i will show them"/></td>
        </tr>
        <tr>
          <th scope="row">Show only for special occasions</th>
          <td><input type="radio" name="Cleavage" id="Sometimes i will show them"/></td>
          <td><input type="radio" name="back" id="Sometimes i will show them"/></td>
          <td><input type="radio" name="arm" id="Sometimes i will show them"/></td>
          <td><input type="radio" name="shoulder" id="Sometimes i will show them"/></td>
          <td><input type="radio" name="legs" id="Sometimes i will show them"/></td>
          </tr>
          <tr>
            <th scope="row">Less is more, keep them covered</th>
            <td><input type="radio" name="Cleavage" id="Sometimes i will show them"/></td>
            <td><input type="radio" name="back" id="Sometimes i will show them"/></td>
            <td><input type="radio" name="arm" id="Sometimes i will show them"/></td>
            <td><input type="radio" name="shoulder" id="Sometimes i will show them"/></td>
            <td><input type="radio" name="legs" id="Sometimes i will show them"/></td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
  </div>
   </div>
    </section>
    
    )
}
