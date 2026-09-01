// machineget --> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// machine --> get balance
function getBalance() {
  const balanceElement = document.querySelector("#balance");
  const balance = balanceElement.innerText;
  console.log("Current balance", Number(balance));
  return Number(balance);
}

// machine --> set balance
function setBalance(value) {
  const balanceElement = document.querySelector("#balance");
  balanceElement.innerText = value;
}
