import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { hasFormat } from "./interfaces/hasFormat.js";

// let docOne: hasFormat;
// let docTwo: hasFormat;
// docOne = new Invoice("abc", "ajjcknc", 200);
// docTwo = new Payment("abdc", "ajjckfjkjfnc", 250);

// let docs: hasFormat[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('abc',"ankv website",200)
// const invTwo = new Invoice('abcd',"ankvsdf website",280)

// console.log(invOne)

// let invoices : Invoice[] =[];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices)

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// // console.log(form.children);

// //inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc:hasFormat;
  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
  }else{
    doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
  }
  list.render(doc,type.value,'end');
});
