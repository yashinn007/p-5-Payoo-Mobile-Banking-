const addMoneyBtn = document.querySelector("#add-money-btn");

addMoneyBtn.addEventListener("click", () => {
  // 1. get bank accounnt
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please select a Bank");
    return;
  }

  // 2. get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid Number");
    return;
  }

  //3. get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert("Add money Sucessfull");
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
