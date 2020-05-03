export class Connection {
  customer: Customer;
  dvd: DVD;
  _id: Object;
}
export class DVD{
  title: String;
  state: String;
  dateOfBorrow: Number;
}
export class Customer{
  person_name: String;
  phone_number: Number;
  ID_Number: String;
}
