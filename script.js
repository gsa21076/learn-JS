document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const
        main = document.getElementById('main'),
        SumValute = document.getElementById('valute'),
        typeValute = document.getElementById('type-valute'),
        btnConvert = document.querySelector('.btn'),
        output1 = document.querySelector('.convert-1'),
        output2 = document.querySelector('.convert-2');


    const convert = (usd, euro) => {
        // event.preventDefault();
        // let target = event.target;
        const selectValute = typeValute.options[typeValute.selectedIndex].value;
        const sum = SumValute.value;

        switch (selectValute) {
            case 'dollar':
                const cur1 = sum / usd;
                output1.textContent = `${cur1.toFixed(2)} рублей`;
                output2.textContent = '';
                break;
            case 'euro':
                const cur2 = sum / euro;
                output1.textContent = `${cur2.toFixed(2)} рублей`;
                output2.textContent = '';
                break;
            case 'ruble':
                const cur3 = sum * usd;
                const cur4 = sum * euro;
                output1.textContent = `${cur3.toFixed(2)} долларов`;
                output2.textContent = `${cur4.toFixed(2)} евро`;
                break;
        }

    };


    btnConvert.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        return fetch('https://www.cbr-xml-daily.ru/latest.js')
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                return (response.json());
            })
            .then((data) => {
                const USDrate = data.rates.USD;
                const EUROrate = data.rates.EUR;
                convert(USDrate, EUROrate);
            })
            .catch((error) => console.error(error));

    });

});



