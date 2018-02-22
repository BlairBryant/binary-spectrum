import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestion, readAnswerA, readAnswerB} from '../ducks/reducer'

class QA extends Component {

    // componentDidMount() {
    //     axios.get(`/QA/${this.props.match.params.id}`).then(res => {
    //         console.log(res.data)
    //         readQuestion(res.data.question)
    //         readAnswerA(res.data.answerA)
    //         readAnswerB(res.data.answerB)
    //     })
    // }

    render() {
        console.log(this.props)
        return(
            <div className="QA">
                <div className="questionHolder">
                </div>

                <section className="answersHolder">
                {/* Change links below */}
                    <Link to='/Result/a'><div className="ansButton">Ans A</div></Link>
                    <Link to='/Result/b'><div className="ansButton">Ans B</div></Link>
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