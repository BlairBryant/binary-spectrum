import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestion, readAnswerA, readAnswerB} from '../ducks/reducer'

class QA extends Component {

    componentDidMount() {
        axios.get(`/QA/${this.props.match.params.id}`).then(res => {
            this.props.readQuestion(res.data[0].question)
            this.props.readAnswerA(res.data[0].a)
            this.props.readAnswerB(res.data[0].b)
        })
    }

    postAnswer(aorb) {
        axios.put(`/QA/${aorb}`, this.props.match.params.id).then(res => {
            console.log('Increased by 1 on ', aorb)
        })
    }


    render() {
        console.log(this.props)
        return(
            <div className="QA">
                <div className="questionHolder">
                    {this.props.question}
                </div>

                <section className="answersHolder">
                {/* Change links below */}
                    <Link to='/Result/1A'><div className="ansButton" onClick={() => this.postAnswer('A')}>{this.props.answerA}</div></Link>
                    <Link to='/Result/1B'><div className="ansButton" onClick={() => this.postAnswer('B')}>{this.props.answerB}</div></Link>
                </section>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        question: state.question,
        answerA: state.answerA,
        answerB: state.answerB
    }
}

export default connect(mapStateToProps, {readQuestion, readAnswerA, readAnswerB})(QA)