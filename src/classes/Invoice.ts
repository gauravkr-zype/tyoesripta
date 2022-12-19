import { hasFormat } from "../interfaces/hasFormat";

export class Invoice implements hasFormat {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes E${this.amount} for ${this.details}`;
  }
}
