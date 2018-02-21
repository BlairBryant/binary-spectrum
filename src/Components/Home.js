import React, {Component} from 'react'
import logo from '../images/logo.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {typingUsername, typingPassword} from '../ducks/reducer'


class Home extends Component {

    // clickLogin() {
    //     axios.post('/', )
    // }



    render() {
        console.log(this.props.username)
        return(
            <div className="home">
                <img src={logo} alt="logoImg"/>
                <div className='loginContainer'>
                    <h2>Log in</h2>
                    <h3>Username</h3>
                    <input value={this.props.username} onChange={e => this.props.typingUsername(e.target.value)}/>
                    <h3>Password</h3>
                    <input value={this.props.password} onChange={e => this.props.typingPassword(e.target.value)}/> <br /><br />
                    <Link to={'/QA'}><button>Log in</button></Link>
                </div>
                <br />
                <button>Sign Up</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password
    }
}

export default connect(mapStateToProps, {typingUsername, typingPassword})(Home)