import React from 'react'

export class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    render() {
        return React.createElement(
            'label',
            {
                className: 'form-label',
                defaultValue: 'label value'
            },
            this.props.name,
            React.createElement(
                'input',
                {
                    className: 'form-textInput',
                    type: 'text',
                    name: this.props.name,
                    id: this.props.id,
                    value: this.state.value,
                    onChange: this.handleChange,
                    placeholder: this.props.placeholder
                },
                null
            )
        )
    }
}
