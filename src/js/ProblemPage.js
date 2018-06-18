import React from 'react'
import {ProblemBank} from './ProblemBank'

export class ProblemPage extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'problem-page'},
            ''
        ]
        this.props.numbers.forEach( (problemBank) => {
            arr.push(React.createElement(ProblemBank, {problemBank: problemBank}, null))
        })

        return React.createElement.apply(this, arr)
    }
}
