import React, { Component } from 'react'
import logo from '../images/logo.jpg'

class Home extends Component {

    render() {
        return (
            <div className="home">
                <img src={logo} alt="logoImg" />
                <div className='loginContainer'>
                    <a href='http://localhost:3500/auth'>Log in</a>
                </div>

            </div>
        )
    }
}

export default Home