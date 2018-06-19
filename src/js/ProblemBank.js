import React from 'react'
import {ProblemColumn} from './ProblemColumn'

export class ProblemBank extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'problem-bank'},
            ''
        ]
        this.props.problemBank.forEach( (numberColumn) => {
            arr.push(React.createElement(ProblemColumn, {numberColumn: numberColumn}, null))
        })

        return React.createElement.apply(this, arr)
    }
}
