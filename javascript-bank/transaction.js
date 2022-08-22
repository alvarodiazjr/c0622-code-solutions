/* exported Transaction */
function Transaction(type, amount) {
  if (type === 'deposit' || type === 'withdrawal') {
    this.type = type;
  }
  if (amount > 0 && Number.isInteger(amount)) {
    this.amount = amount;
  } else {
    this.amount = 'invalid number';
  }
}
