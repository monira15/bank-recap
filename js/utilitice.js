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