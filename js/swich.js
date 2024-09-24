document.getElementById('history-btn').addEventListener('click',function(){

    const addtH=document.getElementById(('donation-btn'))
    addtH.classList.remove('bg-lime-300')
    const hisBtn = document.getElementById('history-btn')
    hisBtn.classList.add('bg-lime-300')
    const donationPage = document.getElementById('donation-section')
    donationPage.classList.add('hidden')
    const historyPage = document.getElementById('history-inbox')
    historyPage.classList.remove('hidden')
})


document.getElementById('donation-btn').addEventListener('click',function(){

    const addtH=document.getElementById(('history-btn'))
    addtH.classList.remove('bg-lime-300')
    const hisBtn = document.getElementById('donation-btn')
    hisBtn.classList.add('bg-lime-300')
    const donationPage = document.getElementById('donation-section')
    donationPage.classList.remove('hidden')
    const historyPage = document.getElementById('history-inbox')
    historyPage.classList.add('hidden')

})

