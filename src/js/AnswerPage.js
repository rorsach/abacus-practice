import React from 'react'
import {AnswerColumn} from './AnswerColumn'
import {Digit} from './Digit'
import {Label} from './Label'


export class AnswerPage extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'answer-page'},
            ''
        ]

        this.props.answers.forEach( (answer, index) => {
            if (index > 0 && index%10 === 0) {
                arr.push(React.createElement('br', {}, null))
            }
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
