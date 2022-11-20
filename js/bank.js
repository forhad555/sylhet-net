var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};


// Get Deposit and Withdraw input ID

function getInputValue(inputId){ // Deposit form =============
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);

    // Clear input field after submit
    inputField.value = '';
    return inputFieldAmount;
}

// Current Amount 
function CurrentAmount(fieldId){
    const depositCurrent = document.getElementById(fieldId);
    const depositCurrentText = depositCurrent.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentText);
     
    return depositCurrentAmount;

}


// Add deposit button Event
const depositbutton = document.getElementById('deposit-btn').addEventListener('click' , function(){
    
    const depositUserInput = getInputValue('deposit-user-input');
    const depositCurrentAmount = CurrentAmount('deposit-total');
    const depositCurrentId = document.getElementById('deposit-total');
    const depositCurrentTotal = depositUserInput + depositCurrentAmount;
    depositCurrentId.innerHTML = depositCurrentTotal;

    const balanceTotalId = document.getElementById('balance-total');
    const balanceTotal =  depositCurrentAmount + depositUserInput;
    balanceTotalId.innerHTML = balanceTotal;
    


});

// Withdraw button Event
const withdrawButton = document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawUserInput = getInputValue('withdraw-user-input');
    const withdrawCurrentAmount = CurrentAmount('withdraw-total');
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawCurrentTotal = withdrawUserInput + withdrawCurrentAmount;
    withdrawTotal.innerHTML = withdrawCurrentTotal;


    const depositCurrentAmount = CurrentAmount('deposit-total');
    const balanceTotalId = document.getElementById('balance-total');
    const withdrawFromBlance = depositCurrentAmount - withdrawCurrentTotal;
    balanceTotalId.innerHTML = withdrawFromBlance;

    const ExpenceTotalId = document.getElementById('expence-total');
    const ExpenceTotalAmount =  withdrawCurrentTotal;
    ExpenceTotalId.innerHTML = ExpenceTotalAmount;
    
});

