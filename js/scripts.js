// Describe: BankAccount.prototype.deposit
// Test:   It will add to BankAccount.this.total
// Code:   this.total - desposit
// Expect: BankAccount(total).toEqual(total-deposit)


function BankAccount(name, total) {
  this.name = name;
  this.total = total;
}

BankAccount.prototype.withdrawl = function(withdrawl) {
  return this.total= this.total - withdrawl;
}

BankAccount.prototype.deposit = function(deposit) {
  return this.total= this.total + deposit;
}

//UI Logic
$(document).ready(function(){
  attachContactListeners();
  $("form#register").submit(function(event){
    event.preventDefault();
  
  }); 
  $("form#money").submit(function(event){
    event.preventDefault();
  });
});