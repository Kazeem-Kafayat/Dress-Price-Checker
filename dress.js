//write a dress price checker function;
//teling a customer the price of a dress available in stock
//else return dress is not available

function checkDressPrice(item) {
    let price;

    if (item === "gown") {
        price = 50;
        return ` The price of ${item} is $${price}`

    } else if (item === "shirt") {
        price = 120;
        return ` The price of ${item} is $${price}`


    } else if (item === "beach-wear") {
        price = 40;
        return ` The price of ${item} is $${price}`


    } else if (item === "top") {
        price = 40;
        return ` The price of ${item} is $${price}`


    } else {
        return `${item} is not available`
    }


}
let buy = checkDressPrice("top");
console.log(buy);