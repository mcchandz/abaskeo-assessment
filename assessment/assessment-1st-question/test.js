function maxProfit(price) {
    let profit = 0;
    for (let i = 1; i < price.length; i++) {
        if (price[i] > price[i - 1]) {
            profit += price[i] - price[i - 1];
        }
    }
    return profit;
}

const stockPrices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(stockPrices)); 
