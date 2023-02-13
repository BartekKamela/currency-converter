const formElement = document.querySelector(".js-form")
const currencyInElement = document.querySelector(".js-currencyIN");
const currencyOutElement = document.querySelector(".js-currencyOUT");
const changeButton = document.querySelector(".js-changeButton");

const changeCurrency = () => {
    const changeIN = `${currencyOutElement.value}`;
    const changeOUT = `${currencyInElement.value}`;
    currencyInElement.value = changeIN;
    currencyOutElement.value = changeOUT;
};

const calculateResult = (amount, currencyChange) => {
    /* Kursy na dzień 2023-01-23 z NBP */
    const PLN = 1;
    const EUR = 4.7186;
    const USD = 4.3242;
    const GBP = 5.3648;
    const CHF = 4.7118;

    switch (currencyChange) {
        case "PLN/EUR":
            exchangeRate = PLN / EUR;
            return amount * +exchangeRate;
        case "PLN/USD":
            exchangeRate = PLN / USD;
            return amount * +exchangeRate;
        case "PLN/GBP":
            exchangeRate = PLN / GBP;
            return amount * +exchangeRate;
        case "PLN/CHF":
            exchangeRate = PLN / CHF;
            return amount * +exchangeRate;
        case "EUR/PLN":
            exchangeRate = EUR / PLN;
            return amount * +exchangeRate;
        case "EUR/USD":
            exchangeRate = EUR / USD;
            return amount * +exchangeRate;
        case "EUR/GBP":
            exchangeRate = EUR / GBP;
            return amount * +exchangeRate;
        case "EUR/CHF":
            exchangeRate = EUR / CHF;
            return amount * +exchangeRate;
        case "USD/PLN":
            exchangeRate = USD / PLN;
            return amount * +exchangeRate;
        case "USD/EUR":
            exchangeRate = USD / EUR;
            return amount * +exchangeRate;
        case "USD/GBP":
            exchangeRate = USD / GBP;
            return amount * +exchangeRate;
        case "USD/CHF":
            exchangeRate = USD / CHF;
            return amount * +exchangeRate;
        case "GBP/PLN":
            exchangeRate = GBP / PLN;
            return amount * +exchangeRate;
        case "GBP/EUR":
            exchangeRate = GBP / EUR;
            return amount * +exchangeRate;
        case "GBP/USD":
            exchangeRate = GBP / USD;
            return amount * +exchangeRate;
        case "GBP/CHF":
            exchangeRate = GBP / CHF;
            return amount * +exchangeRate;
        case "CHF/PLN":
            exchangeRate = CHF / PLN;
            return amount * +exchangeRate;
        case "CHF/EUR":
            exchangeRate = CHF / EUR;
            return amount * +exchangeRate;
        case "CHF/GBP":
            exchangeRate = CHF / GBP;
            return amount * exchangeRate;
        case "CHF/USD":
            exchangeRate = CHF / USD;
            return amount * +exchangeRate;
        default:
            exchangeRate = 1;
            return amount * +exchangeRate;
    }
};

changeButton.addEventListener("click", () => {
   changeCurrency();
}); 

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");
    
    const currencyChange = `${currencyInElement.value}/${currencyOutElement.value}`;
    const amount = +amountElement.value;
   
    const result = calculateResult(amount, currencyChange);
    
    resultElement.innerHTML = `Kwota po przeliczeniu: <br>${amount.toFixed(2)} ${currencyInElement.value} = <strong> ${result.toFixed(2)} ${currencyOutElement.value}</strong>`
});

