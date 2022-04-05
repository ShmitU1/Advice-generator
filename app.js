// Selectors
const adviceNumber = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')
const diceBtn = document.querySelector('.btn')

// get data form api advice side and insert into paragraphs
async function getData() {
    try {
        diceBtn.classList.add('disableBtn')
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        generateAdvice(data);
    }
    catch (err) {
        console.log('Error: ' + err.message);
    }
}
// call getdata function
getData()

// Generate advice content on the page
function generateAdvice(data) {
    const { slip: { id, advice } } = data;
    adviceNumber.innerText = `Advice #${id}`
    adviceText.innerText = `"${advice}"`

    setTimeout(() => {
        diceBtn.classList.remove('disableBtn')
        diceBtn.addEventListener('click', () => {
            document.location.reload(true)
        })
    }, 1800)
}

