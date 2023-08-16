 
/* 
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2-5. Convert string deposit amount to a number type

3. clear the deposit input field after getting the value

4. get the previous deposit total 

5. calculate new deposit total and set the value to the deposit total

6. get current balance total

7. calculate the new balance and set it to the balance total element
*/
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