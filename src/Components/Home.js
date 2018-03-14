import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className='colorTop'></div>
                <div className='colorBottom'></div>
                <p className='topLeftLine'></p>
                <h1 className='binary'>Binary</h1>
                <h1 className='spectrum'>Spectrum</h1>
                <h2>Discover where you stand on various fronts</h2>
                <a href='http://192.168.1.81:3500/auth' className='signInButton'><div className='signInDiv'>
                Sign in
                </div></a>
            </div>
        )
    }
}

export default Home