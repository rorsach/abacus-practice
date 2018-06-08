import React from 'react'
export class Digits extends React.Component {
    render() {
        return React.createElement('div', null, `${this.props.sign} ${this.props.value}`)
    }
}

                                   
