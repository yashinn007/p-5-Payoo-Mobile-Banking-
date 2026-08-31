const btn = document.querySelector("#login-btn");
const numberInput = document.querySelector("#number-input");
const pinInput = document.querySelector("#pin-input");

btn.addEventListener("click", () => {
  // input number & pin
  let contactNumber = numberInput.value;
  let pin = pinInput.value;

  // varifying
  if (contactNumber == "00123456789" && pin == "1234") {
    alert("Login success");
    window.location.assign("./home.html");
  } else {
    alert("Login faild. Num: 00123456789, Pin: 1234");
    numberInput.value = "";
    pinInput.value = "";
    return;
  }
});
