import React from 'react'
import {ProblemColumn} from './ProblemColumn'

export class ProblemBank extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'problem-bank'},
            '',
            React.createElement(ProblemColumn, null, null),
            React.createElement(ProblemColumn, null, null),
            React.createElement(ProblemColumn, null, null),
        ]
        return React.createElement.apply(this, arr)
    }
}
