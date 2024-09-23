function getInputFieldValueId(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}



function getTextFieldValueId(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function jusTry(buttonId,amount,collection,avaiableTk){

    document.getElementById(buttonId).addEventListener('click',function(event){

        event.preventDefault();
        const donateTk = getInputFieldValueId(amount);
        const mainCollection  = getTextFieldValueId(collection);
        const mainBalance = getTextFieldValueId(avaiableTk);
        
    
        if(donateTk>mainBalance){
            alert('You do not have enough Money')
            return;

        }

        if(isNaN(donateTk) || donateTk<0){
            alert('Invalid input')
            return;
        }

        const newBalance= mainBalance- donateTk;
        document.getElementById(avaiableTk).innerText = newBalance

        const totalCollection = donateTk + mainCollection;
        document.getElementById(collection).innerText = totalCollection;

        document.getElementById('my_modal_1').showModal();
    })
 
}