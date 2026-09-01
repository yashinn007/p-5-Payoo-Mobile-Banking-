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
    alert(`Add Money Success from
      ${bankAccount}
      at ${new Date()}`);
    setBalance(newBalance);

    // 1. get history container
    const history = document.getElementById("history-container");
    // 2. create new div
    const newHistory = document.createElement("div");
    // 3. append innerHTML on div
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Add Money Success from ${bankAccount}, Account Number: ${accno} at ${new Date()}
    </div>
    `;
    // 4. append new-div in history container
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
