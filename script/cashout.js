const cashoutBtn = document.querySelector("#cashout-btn");
const cashoutNumberInput = document.querySelector("#cashout-number");
const cashoutAmountInput = document.querySelector("#cashout-amount");
const balanceElement = document.querySelector("#balance");
const cashoutPinInput = document.querySelector("#cashout-pin");

cashoutBtn.addEventListener("click", () => {
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);
  // current balance
  const balance = balanceElement.innerText;
  console.log(balance);
  // calculate new balance
  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  //get pin and update new balance
  const pin = cashoutPinInput.value;
  if (pin == "1234") {
    alert("Cashout Sucessfull");
    console.log(newBalance);
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});
