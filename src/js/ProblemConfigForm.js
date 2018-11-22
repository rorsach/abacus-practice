import React from 'react'
import {TextInput} from './TextInput'

export class ProblemConfigForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return React.createElement(
            'form',
            {className: 'problemConfigForm'},
            React.createElement(
                TextInput,
                {
                    name: 'aname',
                    placeholder: 'an example value'
                },
                null
            ),
            React.createElement(
                'input',
                {
                    className: 'problemConfigForm-submit',
                    type: 'submit',
                    method: 'post',
                    defaultValue: 'Submit'
                },
                null
            )
        )
    }
}
