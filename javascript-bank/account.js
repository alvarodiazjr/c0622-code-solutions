/* exported Account */
function Account(number, holder) {
  if (number > 0 && Number.isInteger(number)) {
    this.number = number;
  }
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.number = function () {
  return this.number;
};

Account.prototype.holder = function () {
  return this.holder;
};

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction();
  if (amount > 0 && Number.isInteger(amount)) {
    transaction.amount = amount;
    transaction.type = 'deposit';
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction();
  if (amount > 0 && Number.isInteger(amount)) {
    withdrawal.amount = amount;
    withdrawal.type = 'withdrawal';
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};


Account.prototype.getBalance = function() {
  var deposits = 0;
  var withdraws = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
     deposits += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      withdraws += this.transactions[i].amount;
    }
  }
  return deposits - withdraws;
};
