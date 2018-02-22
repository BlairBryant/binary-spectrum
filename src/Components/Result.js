import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestionResult, readPercentResult, readCommentsResult, typingComment} from '../ducks/reducer'

class Result extends Component {

    // componentDidMount() {
    //     //get question
    //     //get percent
    //     axios.get().then(res => {
    //         console.log(res.data)
    //     })
    //     //get comments
    //     axios.get().then(res => {
    //         console.log(res.data)
    //     })
    // }

    // postComment() {
    //     axios.put().then(res => {
    //         console.log(res.data)
    //     })
    // }

    // deleteComment() {
    //     axios.delete().then(res => {
    //         console.log("has deleted")
    //     })
    // }


    render() {
        console.log(this.props)
        return(
            <div className='result'>
                <div className='qHolder'>Question Here</div>
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