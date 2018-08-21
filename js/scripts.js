// function BankAccount(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }
//
//
// BankAccount.prototype.deposit = function(amount) {
//   this.balance += amount;
// }
//
// Account.prototype.withdrawal = function() {
//   this.balance -= amount;
// }


$(document).ready(function() {
  var amount = $("#formOne").submit(function() {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedFirstDeposit = parseInt($("input#first-deposit").val());

    // var amount = new BankAccount(name, balance)

    $(".display").text(inputtedFirstDeposit);
    $("#first-well").show();
  });

    $("#formTwo").submit(function() {
      event.preventDefault();
      var inputtedDeposit = parseInt($("input#deposit").val());
      $(".display-deposit").text(inputtedDeposit);
      $("#deposit-well").show();

    });

    $("#formThree").submit(function() {
      event.preventDefault();
      var inputtedWithdrawal = parseInt($("input#withdrawal").val());
      $(".display-withdrawal").text(inputtedWithdrawal);
      $("#withdrawal-well").show();

    });



  // $("#deposit").click(function() {
  //   BankAccount.deposit(amount)
  // });
  // $("#withdrawal").click(function() {
  //   BankAccount.withdrawal(amount)
  // });
});
