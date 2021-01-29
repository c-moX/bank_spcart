// Module: 20/1-11
//Phone and Case Count, Increase and Decrease Button function (Step: 01 + 02 + 03)
// ===================================================================================

/*
// Case Count, Increase and Decrease Button function (Step: 01)
// ---------------------------------------------------------------
// //Count Increase
document.getElementById("case-increase").addEventListener("click", function(){
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;

    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' + caseTotal;
})

// Count Decrease
document.getElementById("case-decrease").addEventListener("click", function(){
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;

    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerHTML = '$' + caseTotal;
})
*/

//===================================================================================

/*
// Case, Increase and Decrease Button function (Step: 02)
// -----------------------------------------------------------
function handleCaseChange(isIncrease){
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    // const caseNewCount = caseCount - 1;
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }

    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerHTML = '$' + caseTotal;
}

// Phone, Increase and Decrease Button function (Step: 02)
// ------------------------------------------------------------
function handlePhoneChange(isIncrease){
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount - 1;
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }

    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerHTML = '$' + phoneTotal;
}
*/

//===================================================================================

// Phone and Case, IncreaseButton and DecreaseButton Handler Function (Step: 03)
// -----------------------------------------------------------------------------------
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    // const productNewCount = productCount - 1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    // const productTotal = productNewCount * product;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerHTML = '$' + productTotal;

    calculateTotal();
}

//=================================================================================
//=====================================================================================

//Phone and Case total price fixed (Step: 01)
//----------------------------------------------
function calculateTotal() {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;
}

//Phone and Case total price fixed (Step: 02)
//------------------------------------------------
function calculateTotal() {
    //Product Total Input Value function
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    //Subtotal Value
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    //Tax Value
    const tax = Math.round(totalPrice / 10); // (totalPrice / 10) // const tax = (totalPrice * 0.1).toFixed(0);
    document.getElementById('tax-amount').innerText = '$' + tax;

    //Total Value
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

//Product Total Input Value function
function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}




