import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className='homeContainer'>
                    <a href='http://192.168.1.81:3500/auth'><div className='signInButton'>
                    Sign in
                    </div></a>
                </div>

            </div>
        )
    }
}

export default Home