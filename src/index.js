import React from 'react'
import ReactDOM from 'react-dom'
import {Digits} from './digits'

ReactDOM.render(
    React.createElement(Digits, {sign: '-', value: '397'}, null),
    document.getElementById('root')
)
