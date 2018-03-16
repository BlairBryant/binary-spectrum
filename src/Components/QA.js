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
            questionGrow: false
        }
        this.questionGrow = this.questionGrow.bind(this)
    }

    componentDidMount() {
        axios.get(`/QA/usercheck`).then(res => {
            // console.log(res.data)
            if(res.data.length) {
                if(res.data[0].a_vote) {
                    this.setState({resultEndpoint: 'A', redirect: true})
                }
                else if(res.data[0].b_vote) {
                    this.setState({resultEndpoint: 'B', redirect: true})
                }
            }
        
        axios.get(`/QA`).then(res => {
            // console.log(res.data)
            this.props.readQuestion(res.data[0].question)
            this.props.readAnswerA(res.data[0].answera)
            this.props.readAnswerB(res.data[0].answerb)
            this.setState({questionId: res.data[0].question_id})
        })
        })
        window.setTimeout(this.questionGrow)
    }

    postAnswer(aorb) {
        axios.put(`/QA/${aorb}`, {questionId: this.state.questionId})
    }

    questionGrow() {
        this.setState({questionGrow: true})
    }


    render() {
        const {questionGrow} = this.state
        if(this.state.redirect) {
            return <Redirect to={`/Result/${this.state.resultEndpoint}`} />
        }
        return(
            <div className="QA">
                <div className='colorTop' id='QAcolorTop'></div>
                {/* <div className='colorTop' id='QAcolorLeft'></div> */}
                <div className='colorTop' id='QAcolorBottom'></div>
                <div className={questionGrow ? 'questionHolder questionGrow' : "questionHolder"}>
                    {this.props.question}
                </div>
                <section className="answersHolder">
                    <Link to='/Result/A'><div className="ansButton" id='ansLeft' onClick={() => this.postAnswer('A')}>{this.props.answerA}</div></Link>
                    <Link to='/Result/B'><div className="ansButton" id='ansRight' onClick={() => this.postAnswer('B')}>{this.props.answerB}</div></Link>
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