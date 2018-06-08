export class NumberFactory {

    constructor(columns, rows) {
        this.columns = columns
        this.rows = rows
    }
    
    // hard code a data structure for now to see how things work.
    generateNumbers() {
        return [
            [1,2,3,4,5],
            [-1,-2,-3,-4,-5],
            [99,99,99,99,99],
            [0,0,0,0,0]
        ]    
    }
    
}
