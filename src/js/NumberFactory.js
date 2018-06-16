export class NumberFactory {

    constructor(banks, columns, rows) {
        this.columns = columns
        this.rows = rows
        this.banks = banks
        this.numberHeading = 'No.'
        this.result1 = 'result#1'
        this.result2 = 'result#2'        
    }
    
    // hard code a data structure for now to see how things work.
    generateNumbers() {
        let output = []
        for (let bank = 0; bank < this.banks; bank++) {
            console.log('bank:', bank)
            output[bank] = []
            
            for (let column = 0; column < this.columns; column++) {
                output[bank][column] = []
                for (let row = 0; row < this.rows; row++) {
                    if ((column === 0) && (row === 0)) {
                        output[bank][column][row] = 'No.'
                    } else if (row === this.rows - 2) {
                        if (column === 0) {
                            output[bank][column][row] = this.result1
                        } else {
                            output[bank][column][row] = ''
                        }
                    } else if (row === this.rows - 1) {
                        if (column === 0) {
                            output[bank][column][row] = this.result2
                        } else {
                            output[bank][column][row] = ''
                        }
                    } else if (column === 0) {
                        output[bank][column][row] = '' + row
                    } else if (row === 0) {
                        output[bank][column][row] = '' + column
                    } else {
                        output[bank][column][row] = this.randomRangeInt(1, 100)
                    }
                }
                
            }
        }

        return output[0]
    }

    randomRangeInt(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min)
    }
    
}
