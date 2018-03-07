import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editToggle: false,
            editTheComment: '',
        }
        this.setToggle = this.setToggle.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    componentDidMount() {
        this.setState({editTheComment: this.props.commentObject.comment})
    }

    setToggle() {
        this.setState({editToggle: !this.state.editToggle})
        // if(this.state.editTheComment !== this.props.commentObject.comment){
        //     axios.put('/api/result/editComment', {editComment: this.state.editTheComment, comment_id: this.props.commentObject.comment_id}).then(res => {
        //         console.log('edit worked. I think. Here is new editTheCommentState: ', this.state.editTheComment)
        //     })
        // }
    }

    deleteComment() {
        axios.delete('/api/result/deleteComment', {comment_id: this.props.commentObject.comment_id}).then(() => {
            console.log('comment deleted. I think.')
        })
    }

    render() {
        const { commentObject } = this.props
        const { userSession } = this.props
        const { editToggle } = this.state
        // console.log('this is commentObject ', commentObject)
        console.log(this.props)
        console.log('this is state: ', this.state)
        return (
            <div className='comment' id={commentObject.a ? 'commentA' : ''}>
                <section className='commentOptionsWrapper'>
                    {commentObject.username}
                    {
                        commentObject.user_id === userSession.user_id
                            ?
                            <div className='buttonsHolder'>
                                <div className='button'
                                     id='editButton'
                                     onClick={() => this.setToggle()}>
                                     {editToggle ? 'Save' : 'Edit'}
                                </div>
                                <div className='button' id='deleteButton' onClick={() => this.deleteComment()}>Delete</div>
                            </div>
                            :
                            null
                    }
                </section>
                    {
                        editToggle 
                            ?
                            <textarea className='editingTextArea' value={this.state.editTheComment} onChange={(e) => this.setState({editTheComment: e.target.value})}/>
                            :
                            commentObject.comment
                    }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userSession: state.userSession,
    }
}

export default connect(mapStateToProps)(Comment)