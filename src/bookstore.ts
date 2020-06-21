export class Bookstore {
    static version = '1'
    constructor() {}
    add(a: number, b: number):number {
        console.log(`version ${Bookstore.version}`)
        return a + b
    }
}