let input = document.querySelector(".pswd");
let lengthInput = document.querySelector("#pswdLength");
let pswdLength = lengthInput.value;
let numbersAllowed = false;
let sumbolsAllowed = false;

window.addEventListener("load",generatePswd);

// state to generate the password
function generatePswd(){
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pswd = "";

    if(numbersAllowed) str =  str+"0123456789";
    if(sumbolsAllowed) str =  str+"`~!@#$%^&*()_+{}[]|\:;'<>?,./";   
    for (let index = 1; index <= pswdLength; index++) {
        let tempPswd = Math.floor(Math.random()*str.length);
        pswd += str[tempPswd];
    }
    input.value = pswd;
    document.querySelector(".pswd-range-length").textContent = lengthInput.value;
}

// Change the length of password
lengthInput.addEventListener("input",()=>{
    pswdLength = lengthInput.value;
    
    generatePswd();
});

// generate new password
let refresh = document.querySelector(".generateNewPswd")
.addEventListener("click",generatePswd);

// add numbers in password
let number = document.querySelector("#numbers");
number.addEventListener("change",()=>{
    if(numbersAllowed){
        numbersAllowed = false;
    }else{
        numbersAllowed = true;
    }
    generatePswd();
});

// add symbols in password
let symbol = document.querySelector("#symbols");
symbol.addEventListener("change",()=>{
    if(sumbolsAllowed){
        sumbolsAllowed = false;
    }else{
        sumbolsAllowed = true;
    }
    generatePswd();
});

// copy password
let copy = document.querySelector(".copy-btn")
.addEventListener("click",()=>{
    navigator.clipboard.writeText(input.value);

    // copy toast notification
    let copyToast = document.querySelector(".copied");
    copyToast.style.display = "block";
    setInterval(()=>{    
        copyToast.style.display = "none";
    },2000);
});

