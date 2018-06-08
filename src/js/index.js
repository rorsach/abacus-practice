console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {Digits} from './digits'
import '../css/style.css'

ReactDOM.render(
    React.createElement(Digits, {sign: '-', value: '395'}, null),
    document.body
)
