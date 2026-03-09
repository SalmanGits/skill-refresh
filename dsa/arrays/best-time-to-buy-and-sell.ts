const bestTimeTOBuyAndSell = (arr: number[]): number => {
    let maxProfit = 0
    let minPrice = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let sellPrice = arr[i]
        let profit = sellPrice - minPrice
        maxProfit = Math.max(maxProfit, profit)
        if (sellPrice < minPrice) {
            minPrice = sellPrice
        }
    }

    return maxProfit
}

console.log(bestTimeTOBuyAndSell([7, 1, 5, 3, 6, 4]))