import React from 'react'
import {Digit} from './Digit'
import {Label} from './Label'

export class ProblemColumn extends React.Component {
    render() {
        let arr = [
            'div',
            {className: 'problem-column'},
            ''
        ]
        this.props.numberColumn.forEach((columnCell) => {
            let sign
            let value
            let element

            if (typeof columnCell === 'number') {
                sign = (columnCell < 0) ? '-' : ''
                value = Math.abs(columnCell)
                element = React.createElement(Digit, {sign: sign, value: value}, null)
            } else if (typeof columnCell === 'string') {
                element = React.createElement(Label, {label: columnCell}, null)
            }

            if (element) {
                arr.push(element)
            }
        })

        return React.createElement.apply(this, arr)
    }
}
