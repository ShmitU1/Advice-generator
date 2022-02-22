const adviceNumber = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')
const diceBtn = document.querySelector('.btn');

async function getData() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
    
        const adviceId = data.slip.id
        const adviceValue = data.slip.advice
        adviceNumber.innerText = `Advice #${adviceId}`
        adviceText.innerText = `"${adviceValue}"`

        diceBtn.addEventListener('click', () => {
             window.location.reload();
        })
    }
    catch(err) {
        console.log('Error ' + err.message);
    }
}

getData()

