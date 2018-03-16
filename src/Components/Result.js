import React, {Component} from 'react'
import Comment from './Comment'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestionResult, readPercent, readComments, typingComment, readUserSession} from '../ducks/reducer'


class Result extends Component {
    constructor() {
        super()

        this.state = {
            questionId: -1,
            percentShrink: false
        }
        this.percentShrink = this.percentShrink.bind(this)
    }

    componentDidMount() {
        // get question
        axios.get(`/QA`).then(res => {
            this.setState({questionId: res.data[0].question_id})
            this.props.readQuestionResult(res.data[0].question)
            // get percent
            axios.get(`/result/percent/${this.state.questionId}`).then(res => {
                // console.log(res.data)
                if(this.props.match.params.id === 'A') {
                    this.props.readPercent(
                    Math.round(+res.data[0].a_total/(+res.data[0].a_total + +res.data[0].b_total)*100))
                } else {
                    this.props.readPercent(
                    Math.round(+res.data[0].b_total/(+res.data[0].a_total + +res.data[0].b_total)*100))
                }
            })
            window.setTimeout(this.percentShrink, 400)
            // get comments
            axios.get(`/result/comments/${this.state.questionId}`).then(res => {
                this.props.readComments(res.data)
            })
            axios.get(`/getSessionUser`).then(res => {
                this.props.readUserSession(res.data)
            })
        })
    }

    postComment(e) {
        if (e.key === "Enter" && this.props.comment) {
            axios.post('/api/result/postComment', {question_id: this.state.questionId, comment: this.props.comment, votedAorB: this.props.match.params.id}).then(res => {
                this.props.readComments(res.data)
                this.props.typingComment('')
            })
        }
    }

    percentShrink() {
        this.setState({percentShrink: true})
    }

    render() {
        const {percentShrink} = this.state
        let mappedComments = this.props.commentsResult.map((x, i) => {
            return <Comment key={x.comment_id} commentObject={x} />
        })
        return(
            <div className='result'>
                <div className='colorTop' id='resultColorTop'></div>
                <div className='colorTop' id='resultColorLeft'></div>
                {/* <div className='qHolder'>{this.props.questionResult}</div> */}
                <div className={percentShrink ? 'percentDisplay percentShrink' : 'percentDisplay'}>{`${this.props.percentResult}%`}</div>
                <h4 id='votedBlurb'>of users voted the same as you</h4>

                <section className='commentsHolder'>
                    <textarea value={this.props.comment}
                              className='textInputArea' 
                              placeholder='Leave a comment' 
                              onChange={(e) => this.props.typingComment(e.target.value)}
                              onKeyPress={(e) => this.postComment(e)}
                    />
                    {mappedComments}
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questionResult: state.questionResult,
        percentResult: state.percentResult,
        commentsResult: state.commentsResult,
        userSession: state.userSession,
        comment: state.comment
    }
}

export default connect(mapStateToProps, {readQuestionResult, readPercent, readComments, typingComment, readUserSession})(Result)