document.getElementById('btn-withdraw').addEventListener('click', function(){

   
    newWithdrawAmount = getInputFiledAmoutById('withdraw-text');

    if(isNaN(newWithdrawAmount)){
        alert('Please Enter Valid Amount');
        return;
    }

    if(newWithdrawAmount < 1){
        alert('Please Enter Valid Amount');
        return;
    }

    totalWithdraw = getPreviousAmounById('withdraw-total');
    
    totalWithdrawAmount = totalWithdraw + newWithdrawAmount;

    setElementTextById('withdraw-total', totalWithdrawAmount);
    previousBalence = getPreviousAmounById('balance-total');

    newBalence = previousBalence - newWithdrawAmount;
    setElementTextById('balance-total', newBalence);
})