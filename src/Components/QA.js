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
            questionId: -1
        }
        //this might break things. But should be speedier than componentWillMount or didMount.
        

    }

    componentWillMount() {
        axios.get(`/QA/usercheck`).then(res => {
            console.log(res.data)
            if(res.data.length) {
                if(res.data[0].a_vote) {
                    this.setState({resultEndpoint: 'A', redirect: true})
                }
                else if(res.data[0].b_vote) {
                    this.setState({resultEndpoint: 'B', redirect: true})
                }
            }
        })
    }

    componentDidMount() {
        

        axios.get(`/QA`).then(res => {
            // console.log(res.data)
            this.props.readQuestion(res.data[0].question)
            this.props.readAnswerA(res.data[0].answera)
            this.props.readAnswerB(res.data[0].answerb)
            this.setState({questionId: res.data[0].question_id})
        })
    }

    postAnswer(aorb) {
        axios.put(`/QA/${aorb}`, {questionId: this.state.questionId}).then(res => {
            console.log('Passed a 1 into ', aorb)
        })
    }


    render() {
        // console.log(this.props)
        if(this.state.redirect) {
            return <Redirect to={`/Result/${this.state.resultEndpoint}`} />
        }
        return(
            <div className="QA">
                <div className="questionHolder">
                    {this.props.question}
                </div>
                <section className="answersHolder">
                {/* Change links below */}
                    <Link to='/Result/A'><div className="ansButton" onClick={() => this.postAnswer('A')}>{this.props.answerA}</div></Link>
                    <Link to='/Result/B'><div className="ansButton" onClick={() => this.postAnswer('B')}>{this.props.answerB}</div></Link>
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