document.getElementById('btn-discount').addEventListener('click', function () {
    // get the price of the shoe
    const getShoePrice = document.getElementById('shoe-amount');
    const shoePriceString = getShoePrice.innerText;
    const shoePrice = parseFloat(shoePriceString);
    // get the discount percent amount
    const discountPercentElement = document.getElementById('percent-amount');
    const discountPercentString = discountPercentElement.innerText;
    const discountPercent = parseFloat(discountPercentString);
    // calculate the Price After The discount
    const finalAmount = (shoePrice - ((discountPercent / 100) * shoePrice)).toFixed(2);
    // set the Amount to the Shoe final price
    document.getElementById('shoe1-final-price').innerText = finalAmount;
    console.log(finalAmount, shoePrice, discountPercent);

})



