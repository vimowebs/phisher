const loader = document.querySelector(".loader");
const safe = document.querySelector(".safe");
const unsafe = document.querySelector(".unsafe");
const urlInput = document.querySelector(".url-input");
const checkBtn = document.querySelector(".check-btn");
const otxt = document.querySelector(".otxt");
const opTxtv = document.querySelector(".op-txtv");
const checkNew = document.querySelector(".check-new");
var output = "safe";

checkBtn.addEventListener("click", function(){
    loader.style.visibility = 'hidden';
    opTxtv.style.visibility = 'hidden';
    checkNew.style.visibility = 'hidden';
    safe.style.visibility = 'hidden';
    unsafe.style.visibility = 'hidden';
    otxt.style.visibility = 'hidden';
    if(urlInput.value == ""){
        alert("Please Enter The URL");
    }
    else{
        otxt.style.visibility = 'visible';
        otxt.innerHTML = "Processing...";
        loader.style.visibility = 'visible';
        setTimeout(function(){
            loader.style.visibility = 'hidden';
            if(output == "safe"){
                safe.style.visibility = 'visible';
                otxt.innerHTML = "Result";
                opTxtv.style.visibility = 'visible';
                opTxtv.innerHTML = "The Provided URL Is Not A Phishing Link";
                checkNew.style.visibility = 'visible';
            }
            else{
                unsafe.style.visibility = 'visible';
                otxt.innerHTML = "Result";
                opTxtv.style.visibility = 'visible';
                opTxtv.innerHTML = "The Provided URL Is A Phishing Link";
                checkNew.style.visibility = 'visible';
            }
        },5000)
    }
});
checkNew.addEventListener("click",function(){
    window.location.reload();
});