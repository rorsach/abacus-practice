export class NumberFactory {

    constructor(columns, rows) {
        this.columns = columns
        this.rows = rows
    }
    
    // hard code a data structure for now to see how things work.
    generateNumbers() {
        return [
            ['No.', '1', '2', '3', '4', '5', 'result#1', 'result#2' ],
            ['1', 1,2,3,4,5, '', ''],
            ['2', 1,2,3,4,5, '', ''],
            ['3', 1,2,3,4,5, '', ''],
            ['4', 1,2,3,4,5, '', '']
        ]    
    }
    
}
