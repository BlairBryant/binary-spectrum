import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import QA from './Components/QA'
import Result from './Components/Result'

export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/QA/:id' component={QA} />
        <Route path='/Result/:id' component={Result} />
    </Switch>
)