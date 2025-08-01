const tela = document.querySelector(".tela");
let clear = document.querySelector(".clear");
let total = "";
let operatorPrincipal = "";
let n1 = ""
let n2 = ""



function addOperator(operator) {
    operatorPrincipal = operator
    tela.value += operator

}
function addNumber(sum) {
    if (operatorPrincipal == "") {
        if (tela.value == "0")
            n1 = sum;
        else
            n1 += sum;
        tela.value = n1
    }
    else if (operatorPrincipal != "" ) {
        n2 += sum;
        tela.value += sum
    }
    console.log("n1 é igual a " + n1);
    console.log("n2 é igual a " + n2);
}

function calcular(calc1, operator, calc2) {
    operator = operatorPrincipal;
    calc1 = parseFloat(n1);
    calc2 = parseFloat(n2);
    if (operator == "+") {
        total = calc1 + calc2;
        n1 = total
        tela.value = total;
        operator = ""
    }
    else if (operator == "-") {
        total = calc1 - calc2;
        n1 = total
        tela.value = total;
        operator = ""
    }
    else if (operator == "/") {
        total = calc1 / calc2;
        n1 = total
        tela.value = total;
        operator = ""
    }
       else if (operator == "*") {
        total = calc1 * calc2;
        n1 = total
        tela.value = total;
        operator = ""
        operatorPrincipal = ""
    }
    n2 = ""
    console.log("esta rodando")
    console.log(total)

}

clear.onclick = () => {
    operatorPrincipal = ""
    n1 = ""
    n2 = ""
    total = ""
   tela.value = "0";
}