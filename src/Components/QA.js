import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import axios from 'axios'
import {connect} from 'react-redux'
import {readQuestion, readAnswerA, readAnswerB} from '../ducks/reducer'

class QA extends Component {
    constructor() {
        super()

        this.state = {
            resultEndpoint: '',
            redirect: false,
            questionId: -1,
        }
    }

    componentDidMount() {
        axios.get(`/api/QA/usercheck`).then(res => {
            if(res.data.length) {
                if(res.data[0].a_vote) {
                    this.setState({resultEndpoint: 'A', redirect: true})
                }
                else if(res.data[0].b_vote) {
                    this.setState({resultEndpoint: 'B', redirect: true})
                }
            }
        
        axios.get(`/api/QA`).then(res => {
            this.props.readQuestion(res.data[0].question)
            this.props.readAnswerA(res.data[0].answera)
            this.props.readAnswerB(res.data[0].answerb)
            this.setState({questionId: res.data[0].question_id})
        })
        })
    }

    postAnswer(aorb) {
        axios.put(`/api/QA/${aorb}`, {questionId: this.state.questionId})
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={`/Result/${this.state.resultEndpoint}`} />
        }
        return(
            <div className="QA">
                <div className='colorTop' id='QAcolorTop'></div>
                <div className='colorTop' id='QAcolorBottom'></div>
                <div className='whiteOpacity'></div>
                <h2>Today's Question</h2>
                <div className="questionHolder">
                    {this.props.question}
                </div>
                <h3 className='answerAtext'><span>A : </span>{this.props.answerA}</h3>
                <h3 className='answerBtext'><span>B : </span>{this.props.answerB}</h3>
                <section className="answersHolder">
                    <Link to='/Result/A'><div className="ansButton" id='ansLeft' onClick={() => this.postAnswer('A')}>A</div></Link>
                    <Link to='/Result/B'><div className="ansButton" id='ansRight' onClick={() => this.postAnswer('B')}>B</div></Link>
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