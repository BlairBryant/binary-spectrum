import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class QA extends Component {
    render() {
        return(
            <div className="QA">
                <div className="questionHolder">
                </div>

                <section className="answersHolder">
                    <Link to='/Result'><div className="ansButton">Ans A</div></Link>
                    <Link to='/Result'><div className="ansButton">Ans B</div></Link>
                </section>

            </div>
        )
    }
}

export default QA