console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {NumberFactory} from './NumberFactory'
import {ProblemBank} from './ProblemBank'
import '../css/style.css'

var numbers = new NumberFactory(1, 7, 16).generateNumbers()


ReactDOM.render(
    React.createElement(
        'div',
        {className: 'problem-root'},
        React.createElement(ProblemBank, {numbers: numbers}, null)
    ),
    document.getElementById('root')
)
