import React from 'react'
export class Digit extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: 'problem-cell problem-digit'},
            `${this.props.sign} ${this.props.value}`
        )
    }
}
