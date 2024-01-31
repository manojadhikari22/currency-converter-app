import key from './key.js'

const ul = document.querySelector('ul');
const convertButton = document.querySelector('.btn')
const currencyAmountInput = document.querySelector('.currency-amount-input');
let currenciesObject;// Decaring currencies globally

// Function to fetch currencies from the API
const fetchCurrencies = async() => {
    // Fetching data from the API
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/NPR`)
    const data = await response.json()
    //console.log(data)
    // Storing the conversion rates in currenciesObject
    const currenciesObject = data.conversion_rates;
    // Rendering currencies on initial load
    renderCurencies(currenciesObject)
    
    // Adding click event listener to the convert button
    convertButton.addEventListener('click', ()=>{
        // Rendering currencies with the specified amount when the button is clicked
        renderCurencies(currenciesObject, Number(currencyAmountInput.value))
    })
    console.log(currenciesObject);
}
// Initial fetch of currencies when the page loads
fetchCurrencies()

// Function to render currencies in the list
const renderCurencies = (data, amount=1)=>{
    // Clearing the existing list items
    ul.textContent = "";
    // Creating list items for each currency and appending them to the list
    const NOKItem = document.createElement('li');
    NOKItem.textContent = `To Norwegian Krone ➡️${(amount * data.NOK).toFixed('2')}`;
    const SEKItem = document.createElement('li');
    SEKItem.textContent = `To Swedish Krone ➡️${(amount * data.SEK).toFixed('2')}`;
    const DKKItem = document.createElement('li');
    DKKItem.textContent = `To Danish Krone ➡️${(amount * data.DKK).toFixed('2')}`;
    const GBPItem = document.createElement('li');
    GBPItem.textContent = `To Great Britains Pound ➡️${(amount * data.GBP).toFixed('2')}`;
    const EURItem = document.createElement('li');
    EURItem.textContent = `To Euro ➡️${(amount * data.EUR).toFixed('2')}`;

    ul.append(NOKItem, SEKItem, DKKItem, GBPItem, EURItem)
}

//creating an array of objects from currenciesObject
/*for(let key in currenciesObject){
        const values = currenciesObject[key];
        const newObject = {};
        newObject[key] = values
        currenciesArray.push(newObject)
     }*/