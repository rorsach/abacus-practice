import React from 'react'
export class Label extends React.Component {
    render() {
        return React.createElement(
            'div',
            {className: 'problem-cell problem-label'},
            `${this.props.label}`
        )
    }
}
