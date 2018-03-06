import React, {Component} from 'react'

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        console.log(this.props)
        return (
            <div className='comment'>
                I'm a comment
            </div>
        )
    }
}

export default Comment