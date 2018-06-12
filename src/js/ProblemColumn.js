import React from 'react'
import {Digits} from './Digits'

export class ProblemColumn extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'problem-column'},
            '',
            React.createElement(Digits, {sign: '-', value: '10'}, null),
            React.createElement(Digits, {sign: '-', value: '11'}, null),
            React.createElement(Digits, {sign: '-', value: '12'}, null),
            React.createElement(Digits, {sign: '-', value: '99'}, null)
        ]
        return React.createElement.apply(this, arr)
    }
}
