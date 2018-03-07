import React, {Component} from 'react'
import Comment from './Comment'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestionResult, readPercent, readComments, typingComment, readUserSession} from '../ducks/reducer'


class Result extends Component {
    constructor() {
        super()

        this.state = {
            questionId: -1
        }
    }

    componentDidMount() {
        // get question
        axios.get(`/QA`).then(res => {
            // console.log(res.data)
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
            // get comments
            axios.get(`/result/comments/${this.state.questionId}`).then(res => {
                // console.log(res.data)
                this.props.readComments(res.data)
                // console.log('this.props.commentsResult = ', this.props.commentsResult)
            })
            axios.get(`/getSessionUser`).then(res => {
                // console.log('session user info: ', res.data)
                this.props.readUserSession(res.data)
            })
        })
        
    }

    // postComment() {
    //     axios.put().then(res => {
    //         console.log(res.data)
    //     })
    // }

    // deleteComment() {
    //     axios.delete().then(res => {
    //         console.log("has deleted")
    //         readCommentsResult(res.data)
    //     })
    // }


    render() {
        // console.log(this.props)
        let mappedComments = this.props.commentsResult.map((x, i) => {
            return <Comment key={x.comment_id} commentObject={x} />
        })
        return(
            <div className='result'>
                {/* <div className='qHolder'>{this.props.questionResult}</div> */}
                <div className='percentDisplay'>{`${this.props.percentResult}%`}</div>

                <section className='commentsHolder'>Comments Holder <br /><br />
                    <textarea value={this.props.comment} placeholder='Leave a comment' onChange={(e) => this.props.typingComment(e.target.value)}/>
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