/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance) {
  if(Number.isInteger(balance) && balance > 0){
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance)
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function(number) {
  for(var i = 0; i < this.accounts.length; i++){
    if(number === this.accounts[i].number){
      return this.accounts[i];
    }
  }
  return null;
}

Bank.prototype.getTotalAssets = function () {
  var deposits = 0;
  var withdraws = 0;
  var total = deposits - withdraws;
  var trans = [];
  if(this.accounts.length === 0){
    return 0;
  }
  for(var i = 0; i < this.accounts.length; i++){
    trans.push(this.accounts[i].transactions);
  }
  for(var i = 0; i < trans.length; i++){
    if(trans[i].type === 'deposit'){
      deposits += trans[i].amount;
    } else if(trans[i].type === 'withdrawal'){
      withdraws += trans[i].amount;

    }
  }
  return total;
};

// var bank = new Bank();
// var one = bank.openAccount('Jeff Jefferson', 10);
// var two = bank.openAccount('Jeff Jefferson Jr', 100);
// var three = bank.openAccount('Jeff Jefferson III', 1000);
// var first = bank.getAccount(one);
// var second = bank.getAccount(two);
// var third = bank.getAccount(three);
// bank.getTotalAssets()
// first.deposit(5);
// second.deposit(15);
// second.withdraw(32);
// third.deposit(30);
// bank.getTotalAssets()
