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

// Start pieChart Area
const pieXValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const pieYValues = [55, 49, 44, 24, 15];
const pieBarColors = ["#269DFF", "#FD536A", "#15CA20", "#FFCA2C", "#212529"];

new Chart("pieChart", {
  type: "doughnut",
  data: {
    labels: pieXValues,
    datasets: [{
      backgroundColor: pieBarColors,
      data: pieYValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});

// End pieChart Area


// Start barChart Area

const barXValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const barYValues = [55, 49, 44, 34, 35, 40, 35, 40, 45, 35, 40, 45];

const barColors = ["#269DFF", "#FD536A", "#15CA20", "#FFCA2C", "#212529", "#000000", "#00a1f1", "#000000", "#000000", "#000000", "#000000", "#000000"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: barXValues,
    datasets: [{
      backgroundColor: barColors,
      data: barYValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

// End barChart Area


// Start lineChart Area

var lineXValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("lineMyChart", {
  type: "line",
  data: {
    labels: lineXValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// End lineChart Area