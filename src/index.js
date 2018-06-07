console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {Digits} from './digits'

ReactDOM.render(
    React.createElement(Digits, {sign: '-', value: '396'}, null),
    document.body
)
