import React, {Component} from 'react'
import logo from '../images/logo.jpg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {typingUsername, typingPassword, typingNewUsername, typingNewPassword} from '../ducks/reducer'


class Home extends Component {

    clickLogin() {
        axios.post('/', {username: this.props.username, password: this.props.password}).then(res => {
            console.log('sent username and password')
        })
    }

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
                    <Link to={'/QA/1'}><button>Log in</button></Link>
                </div>
                <br />
                <h3>newUsername</h3>
                <input value={this.props.newUsername} onChange={e => this.props.typingNewUsername(e.target.value)}/> <br />
                <h3>newPassword</h3>
                <input value={this.props.newPassword} onChange={e => this.props.typingNewPassword(e.target.value)} type="password"/><br />
                <button>Sign Up</button>

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

export default connect(mapStateToProps, {typingUsername, typingPassword, typingNewUsername, typingNewPassword})(Home)