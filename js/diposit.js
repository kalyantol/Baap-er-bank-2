

document.getElementById('btn-diposit').addEventListener('click', function(){
    const newDipositAmount = getInputFiledAmoutById('diposit-text');

    if(isNaN(newDipositAmount)){
        alert('Please Enter Valid Amount');
        return;
    }

    if(newDipositAmount < 1){
        alert('Please Enter Valid Amount');
        return;
    }
    const previousAmount = getPreviousAmounById('diposit-total');

    const totalDipositAmount = previousAmount + newDipositAmount;

   setElementTextById('diposit-total', totalDipositAmount);

   const previousBalenceAmount = getPreviousAmounById('balance-total');
   const totalBalanceAmount = previousBalenceAmount + newDipositAmount;

   setElementTextById('balance-total', totalBalanceAmount);
})