export class Payment {
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed E${this.amount} for ${this.detail}`;
    }
}
