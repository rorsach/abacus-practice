console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {NumberFactory} from './NumberFactory'
import {ProblemPage} from './ProblemPage'
import '../css/style.css'

let numbers = new NumberFactory(3, 7, 8).generateNumbers()


ReactDOM.render(
    React.createElement(
        'div',
        {className: 'problem-root'},
        React.createElement(ProblemPage, {numbers: numbers}, null)
    ),
    document.getElementById('root')
)
