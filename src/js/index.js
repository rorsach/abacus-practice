console.log('webpack started this')
import React from 'react'
import ReactDOM from 'react-dom'
import {NumberFactory} from './NumberFactory'
import {ProblemPage} from './ProblemPage'
import {AnswerPage} from './AnswerPage'
import {ProblemConfigForm} from './ProblemConfigForm'
import '../css/style.css'

let options = {
    banks: 3, // the number of problem sets per page.
    columns: 11, // The number of columns per problem set.
    rows: 12, // The number of rows, currently, including two result rows TODO: break this parameter into two, one for results rows and one for digit rows.
}
let numbers = new NumberFactory(options).generateSums()

// Test out form creation and event passing.
ReactDOM.render(
    React.createElement(
        'div',
        {className: 'problemConfigForm-root'},
        React.createElement(ProblemConfigForm, null, null)
    ),
    document.getElementById('problemConfigForm')
)

ReactDOM.render(
    React.createElement(
        'div',
        {className: 'problem-root'},
        // TODO: Add headers and footers to the data structure passed in to page.
        // TODO: Allow users to pick layouts based on the intended task, such as multiplications layouts.
      
        React.createElement(ProblemPage, {numbers: numbers.output}, null)
    ),
    document.getElementById('root')
)

ReactDOM.render(
    React.createElement(
        'p',
        {},
        'seed:' + numbers.seed
    ),
    document.getElementById('seed')
)


ReactDOM.render(
    React.createElement(
        'div',
        {className: 'problem-root'},
      
        React.createElement(AnswerPage, {answers: numbers.answers}, null)
    ),
    document.getElementById('answers')
)
