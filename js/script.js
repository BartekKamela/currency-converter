{
    const changeCurrency = () => {
        const currencyInElement = document.querySelector(".js-currencyIN");
        const currencyOutElement = document.querySelector(".js-currencyOUT");
        const changeIN = `${currencyOutElement.value}`;
        const changeOUT = `${currencyInElement.value}`;
        currencyInElement.value = changeIN;
        currencyOutElement.value = changeOUT;
    };

    const updateResultText = (amount, result, currencyInElement, currencyOutElement) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `Kwota po przeliczeniu: <br>${amount.toFixed(2)} ${currencyInElement.value} = <strong> ${result.toFixed(2)} ${currencyOutElement.value}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currencyInElement = document.querySelector(".js-currencyIN");
        const currencyOutElement = document.querySelector(".js-currencyOUT");
        const amountElement = document.querySelector(".js-amount");
        const currencyChange = `${currencyInElement.value}/${currencyOutElement.value}`;
        const amount = +amountElement.value;
        const exchangeRate = calculateResult(currencyChange);
        const result = amount * exchangeRate;

        updateResultText(amount, result, currencyInElement, currencyOutElement);
    };

    const calculateResult = (currencyChange) => {
        /* Kursy na dzień 2023-01-23 z NBP */
        const PLN = 1;
        const EUR = 4.7186;
        const USD = 4.3242;
        const GBP = 5.3648;
        const CHF = 4.7118;

        switch (currencyChange) {
            case "PLN/EUR":
                return PLN / EUR;
            case "PLN/USD":
                return PLN / USD;
            case "PLN/GBP":
                return PLN / GBP;
            case "PLN/CHF":
                return PLN / CHF;
            case "EUR/PLN":
                return EUR / PLN;
            case "EUR/USD":
                return EUR / USD;
            case "EUR/GBP":
                return EUR / GBP;
            case "EUR/CHF":
                return EUR / CHF;
            case "USD/PLN":
                return USD / PLN;
            case "USD/EUR":
                return USD / EUR;
            case "USD/GBP":
                return USD / GBP;
            case "USD/CHF":
                return USD / CHF;
            case "GBP/PLN":
                return GBP / PLN;
            case "GBP/EUR":
                return GBP / EUR;
            case "GBP/USD":
                return GBP / USD;
            case "GBP/CHF":
                return GBP / CHF;
            case "CHF/PLN":
                return CHF / PLN;
            case "CHF/EUR":
                return CHF / EUR;
            case "CHF/GBP":
                return CHF / GBP;
            case "CHF/USD":
                return CHF / USD;
            default:
                return 1;
        }
    };

    const init = () => {
        const formElement = document.querySelector(".js-form")
        const changeButton = document.querySelector(".js-changeButton");

        changeButton.addEventListener("click", changeCurrency);
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}