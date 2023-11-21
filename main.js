document
  .getElementById("Deposit-button")
  .addEventListener("click", function (e) {
    var input = document.getElementById("Deposit-input").value;
    var convertAmount = parseInt(input);
    var currentDeposit = document.getElementById("Deposit-amount").innerText;
    var convertCurrentDepositAmount = parseInt(currentDeposit);
    var TotalAmount = document.getElementById("Total-amount").innerText;
    var convertTotalAmount = parseInt(TotalAmount);

    if (convertAmount > 0) {
      document.getElementById("Deposit-amount").innerText =
        convertAmount + convertCurrentDepositAmount;
      document.getElementById("Total-amount").innerText =
        convertTotalAmount + convertAmount;
    } else {
      alert("Please positive amount");
    }

    document.getElementById("Deposit-input").value = "";
  });

document
  .getElementById("Withdraw-button")
  .addEventListener("click", function (e) {
    var input = document.getElementById("Withdraw-input").value;
    var convertAmount = parseInt(input);
    var currentWithdraw = document.getElementById("Withdraw-amount").innerText;
    var convertCurrentWithdrawAmount = parseInt(currentWithdraw);
    var TotalAmount = document.getElementById("Total-amount").innerText;
    var convertTotalAmount = parseInt(TotalAmount);

    if (convertAmount > 0 && convertAmount < convertTotalAmount) {
      document.getElementById("Withdraw-amount").innerText =
        convertAmount + convertCurrentWithdrawAmount;
      document.getElementById("Total-amount").innerText =
        convertTotalAmount - convertAmount;
    } else {
      alert("This amount Withdraw is not possible");
    }

    document.getElementById("Withdraw-input").value = "";
  });
