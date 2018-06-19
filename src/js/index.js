console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {NumberFactory} from './NumberFactory'
import {ProblemPage} from './ProblemPage'
import '../css/style.css'

var numbers = new NumberFactory(1, 7, 6).generateNumbers()


ReactDOM.render(
    React.createElement(
        'div',
        {className: 'problem-root'},
        React.createElement(ProblemPage, {numbers: numbers}, null)
    ),
    document.getElementById('root')
)
