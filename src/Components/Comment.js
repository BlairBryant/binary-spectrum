import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { readComments } from '../ducks/reducer'

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editToggle: false,
            editTheComment: '',
        }
        this.setEditToggle = this.setEditToggle.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    componentDidMount() {
        this.setState({ editTheComment: this.props.commentObject.comment })
    }

    setEditToggle() {
        this.setState({ editToggle: !this.state.editToggle })
        if (this.state.editTheComment !== this.props.commentObject.comment) {
            axios.put('/api/result/editComment', { editComment: this.state.editTheComment, comment_id: this.props.commentObject.comment_id, question_id: this.props.commentObject.question_id }).then(res => {
                this.props.readComments(res.data)
            })
        }
    }

    deleteComment() {
        axios.put(`/api/result/deleteComment/${this.props.commentObject.comment_id}`, { question_id: this.props.commentObject.question_id }).then(res => {
            this.props.readComments(res.data)
        })
    }

    render() {
        const { commentObject, userSession } = this.props
        const { editToggle } = this.state

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
                                    onClick={() => this.setEditToggle()}>
                                    {editToggle ? 'Save' : 'Edit'}
                                </div>
                                <div className='button' id='deleteButton' onClick={() => this.deleteComment()}>Delete</div>
                            </div>
                            :
                            null
                    }
                </section>
                <section className='commentOrTextarea'>
                    {
                        editToggle
                            ?
                            <textarea className='editingTextArea' value={this.state.editTheComment} onChange={(e) => this.setState({ editTheComment: e.target.value })} />
                            :
                            <div className='commentDiv'>{commentObject.comment}</div>
                    }
                </section>
                <section className='smiles'>
                    <div>:)</div>
                    <div>7</div>
                    <div>:(</div>
                    <div>2</div>
                </section>           
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userSession: state.userSession,
        commentsResult: state.commentsResult
    }
}

export default connect(mapStateToProps, { readComments })(Comment)