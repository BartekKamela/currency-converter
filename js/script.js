console.log("Witam. Kalkulator walut do modułu 04.");

/* Kursy na dzień 2023-01-23 z NBP */
let PLN = 1;
let EUR = 4.7186;
let USD = 4.3242;
let GBP = 5.3648;
let CHF = 4.7118;

let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount");
let currencyInElement = document.querySelector(".js-currencyIN");
let currencyOutElement = document.querySelector(".js-currencyOUT");
let resultElement = document.querySelector(".js-result");
let changeButton = document.querySelector(".js-changeButton")

changeButton.addEventListener("click", () => {
    let changeIN = `${currencyOutElement.value}`;
    let changeOUT = `${currencyInElement.value}`;
    currencyInElement.value = changeIN;
    currencyOutElement.value = changeOUT;
}); 

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currencyChange = `${currencyInElement.value}/${currencyOutElement.value}`;

    switch (currencyChange) {
        case "PLN/EUR":
            exchangeRate = PLN / EUR;
            break;
        case "PLN/USD":
            exchangeRate = PLN / USD;
            break;
        case "PLN/GBP":
            exchangeRate = PLN / GBP;
            break;
        case "PLN/CHF":
            exchangeRate = PLN / CHF;
            break;
        case "EUR/PLN":
            exchangeRate = EUR / PLN;
            break;
        case "EUR/USD":
            exchangeRate = EUR / USD;
            break;
        case "EUR/GBP":
            exchangeRate = EUR / GBP;
            break;
        case "EUR/CHF":
            exchangeRate = EUR / CHF;
            break;
        case "USD/PLN":
            exchangeRate = USD / PLN;
            break;
        case "USD/EUR":
            exchangeRate = USD / EUR;
            break;
        case "USD/GBP":
            exchangeRate = USD / GBP;
            break;
        case "USD/CHF":
            exchangeRate = USD / CHF;
            break;
        case "GBP/PLN":
            exchangeRate = GBP / PLN;
            break;
        case "GBP/EUR":
            exchangeRate = GBP / EUR;
            break;
        case "GBP/USD":
            exchangeRate = GBP / USD;
            break;
        case "GBP/CHF":
            exchangeRate = GBP / CHF;
            break;
        case "CHF/PLN":
            exchangeRate = CHF / PLN;
            break;
        case "CHF/EUR":
            exchangeRate = CHF / EUR;
            break;
        case "CHF/GBP":
            exchangeRate = CHF / GBP;
            break;
        case "CHF/USD":
            exchangeRate = CHF / USD;
            break;
        default:
            exchangeRate = 1;
    }

    let amount = parseFloat(amountElement.value);
    let exchange = parseFloat(exchangeRate);
    let result = amount * exchange;
    
    resultElement.innerHTML = `Kwota po przeliczeniu: <br>${amount.toFixed(2)} ${currencyInElement.value} = <strong> ${result.toFixed(2)} ${currencyOutElement.value}</strong>`
});

