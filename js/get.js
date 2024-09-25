function getInputFieldValueId(id){
    const inputValue = document.getElementById(id).value;
    if(isNaN(inputValue)){
        return "Invail input"
    }
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}



function getTextFieldValueId(id){
    const textValue = document.getElementById(id).innerText;
    if(isNaN(textValue)){
        return "Invail input"
    }
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function jusTry(buttonId,amount,collection,avaiableTk,sector){

    document.getElementById(buttonId).addEventListener('click',function(event){

        event.preventDefault();
        const donateTk = getInputFieldValueId(amount);
        const mainCollection  = getTextFieldValueId(collection);
        const mainBalance = getTextFieldValueId(avaiableTk);
        
    
        if(donateTk>mainBalance){
            alert('You do not have enough Money')
            return;

        }

        if(isNaN(donateTk) || donateTk<=0 ){
            alert('Invalid input')
            return;
        }

        const div = document.createElement('div')

         div.innerHTML =` 
                       <div class=" border-teal-700 rounded-lg bg-teal-400 p-7 m-6  flex justify-center flex-col">
                            <h1 class="mx-auto text-lg md:text-2xl font-semibold">${donateTk} Taka is Donated for ${sector}, Bangladesh. </h1>
                            <p class="mx-auto">${new Date().toString()} </p> 
                       </div>
                        `
document.getElementById('history-inbox').appendChild(div)

        const newBalance= mainBalance- donateTk;
        document.getElementById(avaiableTk).innerText = newBalance

        const totalCollection = donateTk + mainCollection;
        document.getElementById(collection).innerText = totalCollection;

        document.getElementById('my_modal_1').showModal();
    })
 
}