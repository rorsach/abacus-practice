import React from 'react'
import {Digit} from './Digit'
import {Label} from './Label'

export class AnswerColumn extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'problem-column'},
            ''
        ]
        let sign = ''
        
        arr.push(React.createElement(Label, {label: this.props.column.label}, null))
        arr.push(React.createElement(Digit, {sign: sign, value: this.props.column.answer}, null))

        return React.createElement.apply(this, arr)
    }
}
