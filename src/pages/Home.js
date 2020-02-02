import React, { Component } from 'react'
import NavBar from '../Components/NavBar'
import container from 'bootstrap'
import Title from '../Components/Title'
import RateStyle from '../Components/RateStyle'

class Home extends Component {
    render() {
        return (
            <div className='container'>
              <RateStyle/>
            </div>
        )
    }
}

export default Home
