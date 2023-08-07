document.getElementById('btn-diposit').addEventListener('click', function(){
    const dipositAmount = document.getElementById('diposit-text');
    const newDipositAmountString = dipositAmount.value;    
    const newDipositAmount = parseFloat(newDipositAmountString);  
    
    dipositAmount.value = '';

    if(isNaN(newDipositAmount)){
        alert('Please Enter Valid Amount');
        return;
    }

    if(newDipositAmount < 1){
        alert('Please Enter Valid Amount');
        return;
    }

    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotal.innerText;
    const previousDipositTotalText = parseFloat(previousDipositTotalString);

    const currentDipositTotal = previousDipositTotalText + newDipositAmount;   
    dipositTotal.innerText = currentDipositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    const currentBalanceTotal = newDipositAmount + previousBalanceTotal;
    balanceTotal.innerText = currentBalanceTotal;

    

})

