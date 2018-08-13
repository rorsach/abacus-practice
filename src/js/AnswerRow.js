import React from 'react'
import {AnswerColumn} from './AnswerColumn'
import {Digit} from './Digit'
import {Label} from './Label'


export class AnswerRow extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'answer-page'},
            ''
        ]

        this.props.answers.forEach( (answer, index) => {
            arr.push(React.createElement(AnswerColumn, {
                column: {
                    answer: answer,
                    label: index + 1 + ''
                }
            }, null))
        })

        return React.createElement.apply(this, arr)
    }
}
