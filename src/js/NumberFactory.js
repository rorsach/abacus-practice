import seedrandom from 'seedrandom'
export class NumberFactory {

    constructor(options) {
        console.log('seedrandom', seedrandom)
        this.columns = options.columns
        this.rows = options.rows
        this.banks = options.banks
        this.numberHeading = 'No.' // TODO move these texts to a resource file options object
        this.result1 = 'result#1'
        this.result2 = 'result#2'
        this.MAX_RESULT = 100
        this.initialSeed = seedrandom('1')()
        this.seedCount = 0 + this.initialSeed
    }
    
    generateNumbers() {
        let numbers = {}
        let output = []
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
                        }
                    } else if (column === 0) {
                        output[bank][column][row] = '' + row
                    } else if (row === 0) {
                        output[bank][column][row] = column + row + -1 + ''
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
                            maxDigit = 100
                        }
                        currentDigit = this.randomRangeInt(minDigit, maxDigit) 
                        subtotal = subtotal + currentDigit
                        output[bank][column][row] = currentDigit
                    }
                }
                
            }
        }

        numbers.seed = this.initialSeed
        numbers.output = output
        return numbers
    }

    randomRangeInt(min, max) {
        return Math.floor(seedrandom(this.seedCount++)() * (1 + max - min) + min)
    }
    
}
