 

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