const cashoutBtn = document.querySelector("#cashout-btn");

cashoutBtn.addEventListener("click", () => {
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");
  // current balance
  const currentBalance = getBalance();
  // calculate balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // get pin
  const pin = getValueFromInput("cashout-pin");
  if (pin == "1234") {
    alert("Cashout Sucessfull");
    setBalance(newBalance);

    // 1. get history container
    const history = document.getElementById("history-container");
    // 2. create new div
    const newHistory = document.createElement("div");
    // 3. append innerHTML on div
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Cashout ${cashoutAmount} TAKA Success to ${cashoutNumber}, at ${new Date()}
    </div>
    `;
    // 4. append new-div in history container
    history.append(newHistory);
  } else {
    alert("Invalid Pin.");
    return;
  }
});

// Version-1
// const cashoutBtn = document.querySelector("#cashout-btn");
// const cashoutNumberInput = document.querySelector("#cashout-number");
// const cashoutAmountInput = document.querySelector("#cashout-amount");
// const balanceElement = document.querySelector("#balance");
// const cashoutPinInput = document.querySelector("#cashout-pin");

// cashoutBtn.addEventListener("click", () => {
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   // get number
//   if (cashoutNumber != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }
//   // get amount
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   // current balance
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   // calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   //get pin and update new balance
//   const pin = cashoutPinInput.value;
//   if (pin == "1234") {
//     alert("Cashout Sucessfull");
//     console.log(newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     alert("Invalid Pin");
//     return;
//   }
// });
