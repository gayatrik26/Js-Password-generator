//declaring variables
const passbox = document.getElementById("passbox");
const inputslider = document.getElementById("inputslider");
const slidervalue = document.getElementById("slidervalue");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const btn = document.getElementById("btn");
const copyicon = document.getElementById("copyicon");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;
});

btn.addEventListener('click',()=>{
    passbox.value = generatepass();
});


let Lowerchar = "abcdefghijklmnopqrstuvwxyz";
let upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let Numbers = "0123456789";
let Symbols = "~!@#$%^&*"


function generatepass(){
    let genpass ="";
    let allchar ="";

    allchar += lowercase.checked ? Lowerchar :"";
    allchar += uppercase.checked ? upperchar :"";
    allchar += numbers.checked ? Numbers :"";
    allchar += symbols.checked ? Symbols :"";

    if(allchar == "" || allchar.length == 0){
        return genpass;
    }


    let i =1;
    while(i<=inputslider.value){
        genpass += allchar.charAt(Math.floor(Math.random () * allchar.length));
        i++;
    }
    return genpass;
}

copyicon.addEventListener('click', ()=>{
    if(passbox.value !="" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.title = "password copied";
    }
});