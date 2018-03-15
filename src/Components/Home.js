import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            fadeIn: false,
            blurbSlide: false,
            signSlide: false
        }
        this.setFade = this.setFade.bind(this)
        this.blurbSlide = this.blurbSlide.bind(this)
        this.signSlide = this.signSlide.bind(this)
    }

    componentDidMount() {
        window.setTimeout(this.setFade)
        window.setTimeout(this.signSlide)
        window.setTimeout(this.blurbSlide)
    }

    setFade() {
        this.setState({fadeIn: true})
    }

    blurbSlide() {
        this.setState({blurbSlide: true})
    }

    signSlide() {
        this.setState({signSlide: true})
    }

    render() {
        const {fadeIn, blurbSlide, signSlide} = this.state
        return (
            <div className="home">
                <div className='colorTop'></div>
                <div className='colorBottom'></div>
                <p className='topLeftLine'></p>
                <h1 className={fadeIn ? 'binary fadeIn' : 'binary'}>Binary</h1>
                <h1 className={fadeIn ? 'spectrum fadeIn' : 'spectrum'}>Spectrum</h1>
                <h2 className={blurbSlide ? 'topBlurb blurbLeft' : 'topBlurb'}>Discover where you stand</h2>
                <h2 className={blurbSlide ? 'bottomBlurb blurbRight' : 'bottomBlurb'}>on various fronts.</h2>
                <a href='http://localhost:3500/auth' className={signSlide ? 'signInButton signSlide' : 'signInButton'}><div className='signInDiv'>
                Sign in
                </div></a>
            </div>
        )
    }
}

export default Home