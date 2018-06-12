import React from 'react'
export class Digits extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: 'problem-digits'},
            `${this.props.sign} ${this.props.value}`
        )
    }
}
