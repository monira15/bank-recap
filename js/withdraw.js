/*
1. add event handler with the withdraw button
2. get the withdraw amount

3. clear the withdraw input field

4. get previous withdraw total

5. calculate total Withdraw amount and set it to the withdraw total element

6. get previous balance

7. calcula

*/ 
document.getElementById('withdraw-btn ').addEventListener('click',function(){
    const newWithdrawAmount =getInputvalueById('withdraw-filed');
    const previousWithdrawTotal= getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal +newWithdrawAmount;
    setTextElementValueById('withdraw-total',newWithdrawTotal);
    const previousBalanceTotal =getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal -newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal)

})