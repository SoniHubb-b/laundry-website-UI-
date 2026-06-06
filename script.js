let book=document.querySelector(".Bookingwash");
let bt=document.querySelector("#bt1");
let sum= document.querySelector("#bt2");
let hirer=document.querySelector(".AfterBook");
let refresh=document.querySelector("#bt3");

const display1=()=>{
    book.classList.remove("hide");
}
const display2=()=>{
    book.classList.add("hide");
    hirer.classList.remove("hide2");
}
const display3=()=>{
    hirer.classList.add("hide2");
}


bt.addEventListener("click",display1);
sum.addEventListener("click",display2);
refresh.addEventListener("click",display3);
