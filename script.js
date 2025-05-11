//atributes
let seconSave;
let firstSave;
let op;

function fn0(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 0;
}
function fn1(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 1;
}
function fn2(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 2;
}
function fn3(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 3;
}
function fn4(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 4;
}
function fn5(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 5;
}
function fn6(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 6;
}
function fn7(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 7;
}
function fn8(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 8;
}
function fn9(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 9;
}
//anser 
function clear(){
   document.getElementById("ans").innerHTML = "";
   
}

//for add buton
function add(){
   firstSave = parseInt( document.getElementById("ans").innerHTML);
   document.getElementById("ans").innerHTML ="";
   op = "add";
}
function sub(){
   firstSave = parseInt( document.getElementById("ans").innerHTML);
   document.getElementById("ans").innerHTML ="";
   op = "sub";
}
function mul(){
   firstSave = parseInt( document.getElementById("ans").innerHTML);
   document.getElementById("ans").innerHTML ="";
   op = "mul";
}
function div(){
   firstSave = parseInt( document.getElementById("ans").innerHTML);
   document.getElementById("ans").innerHTML ="";
   op = "div";
}

//final out put
function eql(){
    seconSave = parseInt( document.getElementById("ans").innerHTML);
    if(op == "add"){
        document.getElementById("ans").innerHTML = firstSave + seconSave;
    }else if (op == "sub"){
        document.getElementById("ans").innerHTML = firstSave - seconSave;
    }else if (op == "mul"){
        document.getElementById("ans").innerHTML = firstSave * seconSave;
    }else if (op == "div"){
        document.getElementById("ans").innerHTML = firstSave / seconSave;
    }
}