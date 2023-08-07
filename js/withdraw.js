document.getElementById('btn-withdraw').addEventListener('click', function(){    
    const withdrawAmount = document.getElementById('withdraw-text');    
    const newWithdrawAmountString = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawAmount.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please enter valid amount');
        return;
    }

    if(newWithdrawAmount < 1){
        alert('Please enter valid amount');
        return;
    }

    const withrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withrawTotal.innerText;    
    const previousWithdrawTotalTest = parseFloat(previousWithdrawTotalString);
    
    const currentWithdrawTotal = previousWithdrawTotalTest + newWithdrawAmount;
    withrawTotal.innerText = currentWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Insufficent Balance');
        return;
    }
    
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = currentBalanceTotal;

    
    
})