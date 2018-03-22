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
            smiles: 0,
            frowns: 0
        }
        this.setEditToggle = this.setEditToggle.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
        this.addSmile = this.addSmile.bind(this)
        this.addFrown = this.addFrown.bind(this)
    }

    componentDidMount() {
        this.setState({ editTheComment: this.props.commentObject.comment })
        axios.get(`/api/result/getSmiles/${this.props.commentObject.comment_id}`).then(res => {
            this.setState({ smiles: res.data[0].smiles, frowns: res.data[0].frowns })
        })
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

    addSmile() {
        axios.post(`/api/result/addSmile`, { comment_id: this.props.commentObject.comment_id }).then(res => {
            this.setState({ smiles: res.data[0].smiles })
        })
    }

    addFrown() {
        axios.post(`/api/result/addFrown`, { comment_id: this.props.commentObject.comment_id }).then(res => {
            this.setState({ frowns: res.data[0].frowns })
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
                    <div className='smileButton' onClick={() => this.addSmile()}>:)</div>
                    <div>{this.state.smiles}</div>
                    <div className='smileButton' onClick={() => this.addFrown()}>:(</div>
                    <div>{this.state.frowns}</div>
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