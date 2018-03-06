import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestionResult, readPercent, readComments, typingComment} from '../ducks/reducer'

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
                console.log(res.data)
                if(this.props.match.params.id === 'A') {
                    this.props.readPercent(
                    Math.round(+res.data[0].a_total/(+res.data[0].a_total + +res.data[0].b_total)*100))
                } else {
                    this.props.readPercent(
                    Math.round(+res.data[0].b_total/(+res.data[0].a_total + +res.data[0].b_total)*100))
                }
            })
        })
        //get comments
        // axios.get().then(res => {
        //     console.log(res.data)
        // })
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
                {/* <div className='qHolder'>{this.props.questionResult}</div> */}
                <div className='percentDisplay'>{`${this.props.percentResult}%`}</div>

                <section className='commentsHolder'>Comments Holder <br /><br />
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

export default connect(mapStateToProps, {readQuestionResult, readPercent, readComments, typingComment})(Result)