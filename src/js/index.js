console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {ProblemBank} from './ProblemBank'
import '../css/style.css'

ReactDOM.render(
    React.createElement(
        'div',
        {className: 'problem-root'},
        React.createElement(ProblemBank, null, null)
    ),
    document.getElementById('root')
)
