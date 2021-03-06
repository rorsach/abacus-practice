# abacus-practice

Generate abacus practice sheets with hidden answers.

https://en.wikipedia.org/wiki/Soroban

![Example abacus practice sheet](practice-sheet-example.png)

## Installation

Clone the repo and install dependencies with npm:

```
npm install
```

To start the development server for testing run this command.

```
npm start
```

This should work with a recent node js version installed. I have node `v6.2.1` and npm `3.7.1`

A webpack-dev-server will start up and live update any changes to the code in the `src` folder. The server runs at [http://localhost:3001/](http://localhost:3001/).

## Goals

- [ ] Support:
  - [ ] multiplication.
  - [x] addition.
  - [x] subtraction.
  - [ ] toggling of carrying.
  - [ ] history.
  - [ ] difficulty control.
  - [ ] scoring.
  - [ ] timers, stopwatch.
  - [ ] alarms.
  - [ ] dialog for encouragement.
  - [ ] pagination, react native swiping for mobile support. Allow users to swipe between problem sets.
- [x] React cell, column, table.
- [x] Google fonts.
- [x] Webpack + hot module replacement.
- [x] Use CSS ~~Grid~~ Flexbox.
- [ ] Use AWS Lambda function to generate sheet data. Unnecessary over engineering, but good for practice.
