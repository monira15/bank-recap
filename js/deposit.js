 function getInputvalueById(inputFiledId){
     const inputFiled = document.getElementById(inputFiledId);
     const inputFiledValueString =inputFiled.value;
     const inputFiledValue = parseFloat(inputFiledValueString)
    inputFiled.value = '';
     return inputFiledValue;
 }

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

 document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDepositeAmount = getInputvalueById('deposit-filed');
   
    const previousDepositTotal =getTextElementValueById('deposit-total');
    const newDepositTotal =previousDepositTotal+newDepositeAmount;
    setTextElementValueById('deposit-total',newDepositTotal);
// get privious balance by using the function
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal =previousBalanceTotal+newDepositTotal;
setTextElementValueById('balance-total',newBalanceTotal)
   
 })