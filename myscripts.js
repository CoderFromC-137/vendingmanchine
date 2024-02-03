"use strict";

// getter
const getTotalCoin = () => {
    document.getElementById('pTotalCoin').style.color = "white";
    return +document.getElementById('pTotalCoin').innerHTML;
}

// setter
const setTotalCoin = coin => document.getElementById('pTotalCoin').innerHTML = coin;

// to insert coin
const addCoin = coin => setTotalCoin(getTotalCoin() + coin);

// to buy drink
const btnDrink = (drink, price) => {
    if (document.getElementById('btnGet').value != " ")
        document.getElementById('btnGet').style.border = "3px solid #ec4545";
    else if (getTotalCoin() >= price && getTotalCoin() != 0) {
        setTotalCoin(getTotalCoin() - price);
        document.getElementById('btnGet').value = drink;
    } else
        document.getElementById('pTotalCoin').style.color = "#ec4545";
}

// to reset inserted coin
const btnChange = () => {
    setTotalCoin(0);
    document.getElementById('pTotalCoin').style.color = "white";
}

// to reset btn get
const btnGetDrink = () => {
    document.getElementById('btnGet').value = " ";
    document.getElementById('btnGet').style.border = "1px solid #15243b"
}