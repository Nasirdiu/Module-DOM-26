// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get the amount deposited
    // console.log('deposit button click');
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    // parseFloat use kora hoi '12' mode thake + hoi na bola
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    //update deposit total

    const depositTotal = document.getElementById("deposit-add");
    const depositCurrentText = depositTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentText);
    const newDepositTotal = depositCurrentAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance

    const balanceTotal = document.getElementById("balance-update");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;

    //clear input field
    depositInput.value = "";
  });

// handle withdraw balance
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //  console.log(newWithdrawAmount);

    // set withdrawTotal
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // balance low hba
    const balanceTotal = document.getElementById("balance-update");
    const previousBalanceText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear
    withdrawInput.value = "";
  });
