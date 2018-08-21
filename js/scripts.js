function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

function Deposit(deposit) {
  this.deposit = deposit;
}

function resetFields() {
  $("input#first-deposit").val("");
  $("input#deposit").val("");
  $("input#withdrawal").val("");
};

BankAccount.prototype.deposit = function() {
  return this.balance += this.deposit;
}

// BankAccount.prototype.withdrawal = function(additionalWithdrawal) {
//   this.balance -= additionalWithdrawal;
// }

$(document).ready(function() {
   $("#formOne").submit(function() {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedFirstDeposit = parseInt($("input#first-deposit").val());

    var newBankAccount = new BankAccount(inputtedName, inputtedFirstDeposit);

    $(".display").text(inputtedFirstDeposit);
    $("#first-well").show();
  });

   $("#formTwo").submit(function() {
      event.preventDefault();
      var inputtedDeposit = parseInt($("input#deposit").val());

      var newDeposit = new Deposit(inputtedFirstDeposit, inputtedDeposit)

      $(".display-deposit").text(newBankAccount.newDeposit);
      $("#deposit-well").show();
    });

  // var additionalWithdrawal =  $("#formThree").submit(function() {
  //     event.preventDefault();
  //     var inputtedWithdrawal = parseInt($("input#withdrawal").val());
  //     $(".display-withdrawal").text(inputtedWithdrawal);
  //     $("#withdrawal-well").show();
  //
  //   });


  // $("#deposit").click(function() {
  //   BankAccount.deposit(additionalDeposit)
  // });
  // $("#withdrawal").click(function() {
  //   BankAccount.withdrawal(amount)
  // });
    function resetFields(){

    };
});
