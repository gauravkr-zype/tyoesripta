import { hasFormat } from "../interfaces/hasFormat";


export class Payment implements hasFormat{
    constructor(
        readonly recipient:string,
        private detail:string,
        public amount: number
    ){}
    format() {
        return`${this.recipient} is owed E${this.amount} for ${this.detail}`
    }
}