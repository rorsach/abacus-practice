console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {ProblemColumn} from './ProblemColumn.js'
import '../css/style.css'

ReactDOM.render(
    React.createElement(ProblemColumn, null, {}),
    document.body
)
