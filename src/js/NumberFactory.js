import seedrandom from 'seedrandom'
export class NumberFactory {

    constructor(options) {
        this.columns = options.columns
        this.rows = options.rows
        this.banks = options.banks
        this.numberHeading = 'No.' // TODO move these texts to a resource file options object
        this.result1 = '#'
        this.result2 = '##'
        this.MAX_RESULT = 100
        this.initialSeed = seedrandom('6')()
        this.seedCount = 0 + this.initialSeed
    }
    
    generateNumbers() {
        let numbers = {
            seed: null,
            output: [],
            answers: []
        }
        let output = []
        let columnNumber = 0; // Start column numbering at
        for (let bank = 0; bank < this.banks; bank++) {
            output[bank] = []
            
            for (let column = 0; column < this.columns; column++) {
                output[bank][column] = []
                let subtotal = 0;
                for (let row = 0; row < this.rows; row++) {
                    if ((column === 0) && (row === 0)) {
                        output[bank][column][row] = 'No.'
                    } else if (row === this.rows - 2) { // TODO Remove magic numbers for result rows
                        if (column === 0) {
                            output[bank][column][row] = this.result1
                        } else {
                            output[bank][column][row] = ''
                        }
                    } else if (row === this.rows - 1) { // TODO Remove magic numbers for result rows
                        if (column === 0) {
                            output[bank][column][row] = this.result2
                        } else {
                            output[bank][column][row] = ''
                            numbers.answers.push(subtotal)
                        }
                    } else if (column === 0) {
                        output[bank][column][row] = '' + row // ROW Numbering
                    } else if (row === 0) {
                        output[bank][column][row] = ++columnNumber + '' // COLUMN Numbering
                    } else {
                        // Don't allow negative totals.
                        let currentDigit
                        let maxDigit
                        let minDigit
                        // digit can't be less than negative subtotal.
                        if (subtotal > this.MAX_RESULT) {
                            minDigit = -this.MAX_RESULT
                            maxDigit = 0
                        } else {
                            minDigit = -subtotal
                            maxDigit = this.MAX_RESULT
                        }
                        currentDigit = this.randomRangeInt(minDigit, maxDigit) 
                        subtotal = subtotal + currentDigit
                        output[bank][column][row] = ''
                        output[bank][column][row] = currentDigit
                    }
                }
            }
        }

        numbers.seed = this.initialSeed
        numbers.output = output
        console.log('NumberFactory:numbers:', numbers)
        return numbers
    }

    randomRangeInt(min, max) {
        return Math.floor(seedrandom(this.seedCount++)() * (1 + max - min) + min)
    }
    
}
