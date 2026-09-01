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

// machine --> hide all > show id
function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");

  // hide all elements
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");

  // show only selected element
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
