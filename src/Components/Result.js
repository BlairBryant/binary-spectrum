import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestionResult, readPercentResult, readCommentsResult, typingComment} from '../ducks/reducer'

class Result extends Component {

    componentDidMount() {
        //get question
        axios.get(`/Result/question/${this.props.match.params.id}`).then(res => {
            this.props.readQuestionResult(res.data[0].question)
        // get percent
        axios.get(`/Result/percent/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
        })
        // //get comments
        // axios.get().then(res => {
        //     console.log(res.data)
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
        console.log(this.props)
        return(
            <div className='result'>
                <div className='qHolder'>{this.props.questionResult}</div>
                <div className='percentDisplay'>Percent Display</div>

                <section>Comments Holder <br /><br />
                    <input value={this.props.comment} onChange={(e) => this.props.typingComment(e.target.value)}/>

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
        comment: state.comment
    }
}

export default connect(mapStateToProps, {readQuestionResult, readPercentResult, readCommentsResult, typingComment})(Result)