// Write a function that verifies if a coupon is valid and not expired. Coupons are valid up to and including the expiry date, but not afterward.Coupons
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Ex:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let sameCode = enteredCode === correctCode
    let dateOkay = Date.parse(currentDate) <= Date.parse(expirationDate)

    return sameCode && dateOkay
}