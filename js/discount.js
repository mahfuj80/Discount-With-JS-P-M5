// First Shoe ProtoType Discount
document.getElementById('btn-discount').addEventListener('click', function () {
    giveMeAmountPercentAmountSetAreaId('shoe-amount', 'percent-amount', 'shoe1-final-price')
})

// Discount of Second ProtoType
document.getElementById('btn-coupon').addEventListener('click', function () {
    // get the Coupon
    const discountCouponElement = document.getElementById('discount-coupon');
    const discountCoupon = discountCouponElement.value;
    discountCouponElement.value = "";
    if (discountCoupon === '') {
        return alert('Please Provide Discount Coupon');
    } else if (discountCoupon === 'DISC40') {
        // get the shoe amount form webpage
        const couponShoeAmountElement = document.getElementById('coupon-shoe-amount');
        const couponShoeAmountString = couponShoeAmountElement.innerText;
        const couponShoeAmount = parseFloat(couponShoeAmountString);
        // calculate the  Discount 
        const finalAmount = (couponShoeAmount - ((40 / 100) * couponShoeAmount)).toFixed(2);
        // Set the final Amount
        document.getElementById('coupon-final-price').innerText = finalAmount;
    } else {
        return alert('Invalid!!!')
    }



})