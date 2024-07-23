//.checked is a property that determines that the checked state of an HTML
// checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox")

const visaBtn = document.getElementById("visaBtn")
const masterBtn = document.getElementById("masterBtn")
const payPalBtn = document.getElementById("payPalBtn")

const submitBtn = document.getElementById("submitBtn")

const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

submitBtn.onclick = function(){
    
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed! :)"
    }
    else{
        subResult.textContent = "You're NOT subscribed!! :("
    }


    if(visaBtn.checked){
        paymentResult.textContent = "You've selected VISA"
    }
    else if(masterBtn.checked){
        paymentResult.textContent = "You've selected MASTER"
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You've selected PAYPAL"
    }
    else{
        paymentResult.textContent = "You must select a method for payment"
    }
}