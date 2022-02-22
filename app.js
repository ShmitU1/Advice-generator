// Selectors
const adviceNumber = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')
const diceBtn = document.querySelector('.btn')

// get data form api advice side and insert into paragraphs
async function getData() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
    
        const adviceId = data.slip.id
        const adviceValue = data.slip.advice
        adviceNumber.innerText = `Advice #${adviceId}`
        adviceText.innerText = `"${adviceValue}"`

        diceBtn.addEventListener('click', () => {
            document.location.reload(true)
        })
    }
    catch(err) {
        console.log('Error ' + err.message);
    }
}

// call getdata function
getData()

