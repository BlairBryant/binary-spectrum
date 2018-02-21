import React, {Component} from 'react'
import logo from '../images/logo.jpg'

class Home extends Component {
    render() {
        return(
            <div className="home">
                <img src={logo} alt="logoImg"/>
                <div className='loginContainer'>
                    <h2>Log in</h2>
                    <h3>Username</h3>
                    <input />
                    <h3>Password</h3>
                    <input /> <br /><br />
                    <button>Log in</button>
                </div>
                <br />
                <button>Sign Up</button>

            </div>
        )
    }
}

export default Home