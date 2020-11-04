
// Describe: BankAccount.prototype.withdrawl
// Test:   It will subtract from BankAccount.this.total
// Code:   this.total - withdrawl
// Expect: BankAccout(total).toEqual(total-withdrawl)
//business logic

function BankAccount(name, total) {
  this.name = name;
  this.total = total;
}

BankAccount.prototype.withdrawl = function(withdrawl) {
  return this.total= this.total - withdrawl;
}

//UI Logic