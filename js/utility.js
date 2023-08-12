function getInputFiledAmoutById(event){
    console.log(event)
    inputFiledText = document.getElementById(event);
    
    inputFiledTextString = inputFiledText.value;
    console.log(inputFiledTextString)
    inputFiledAmount = parseFloat(inputFiledTextString);
    inputFiledText.value = '';
    return inputFiledAmount;
}

function getPreviousAmounById(event){
    const amountText = document.getElementById(event);
    const amountTextString = amountText.innerText;
    const amount = parseFloat(amountTextString);    
    return amount;
}

function setElementTextById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}