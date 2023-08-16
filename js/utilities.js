// first Shoe Discount function
function giveMeAmountPercentAmountSetAreaId(shoeAmount, percentAmount, setAmountHere) {
    const getShoePrice = document.getElementById(shoeAmount);
    const shoePriceString = getShoePrice.innerText;
    const shoePrice = parseFloat(shoePriceString);
    // get the discount percent amount
    const discountPercentElement = document.getElementById(percentAmount);
    const discountPercentString = discountPercentElement.innerText;
    const discountPercent = parseFloat(discountPercentString);
    // calculate the Price After The discount
    const finalAmount = (shoePrice - ((discountPercent / 100) * shoePrice)).toFixed(2);
    // set the Amount to the Shoe final price
    document.getElementById(setAmountHere).innerText = finalAmount;
}