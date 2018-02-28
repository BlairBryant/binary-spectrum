import React, {Component} from 'react'
import logo from '../images/logo.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {typingUsername, typingPassword} from '../ducks/reducer'


class Home extends Component {

    clickSignUp() {
        axios.post('/', {newUsername: this.props.newUsername, newPassword: this.props.newPassword}).then(res => {
            console.log('username and pass created')
        })
    }


    render() {
        console.log(this.props)
        return(
            <div className="home">
                <img src={logo} alt="logoImg"/>
                <div className='loginContainer'>
                    <h2>Log in</h2>
                    <h3>Username</h3>
                    <input value={this.props.username} onChange={e => this.props.typingUsername(e.target.value)}/>
                    <h3>Password</h3>
                    <input value={this.props.password} onChange={e => this.props.typingPassword(e.target.value)} type="password"/> <br /><br />
                    {/* Set the to= below to have 1 entered dynamically as an ID */}
                    <a href='http://localhost:3500/auth'>Log in</a>
                </div>
                <br />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password,
        newUsername: state.newUsername,
        newPassword: state.newPassword
    }
}

export default connect(mapStateToProps, {typingUsername, typingPassword})(Home)