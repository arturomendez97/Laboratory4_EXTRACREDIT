let add_Btn = document.querySelector("#addButton")
let sub_Btn = document.querySelector("#substractButton")
let equal_Btn = document.querySelector(".equalButton")
let reset_Btn = document.querySelector(".resetButton")
let mult_Btn = document.querySelector("#multiplicationButton")
let div_Btn = document.querySelector("#divisionButton")

let input = document.querySelector(".inputNumber")
let output = document.querySelector("#resultValue")
let log = document.querySelector("#logInformation")
let operation = ""
let result = 0
let last = ""

console.log(add_Btn)
console.log(sub_Btn)
console.log(equal_Btn)
console.log(reset_Btn)
console.log(mult_Btn)
console.log(div_Btn)
console.log(input)

function addAction(event){
    console.log("add")
    operation = operation.concat(input.value + " + ")
    input.value = ""
    last = "+"
}
add_Btn.addEventListener("click", addAction)

function subAction(event){
    console.log("subtract")
    operation = operation.concat(input.value + " - ")
    input.value = ""
    last = "-"
}
sub_Btn.addEventListener("click", subAction)

function multAction(event){
    console.log("multiply")
    operation = operation.concat(input.value + " * ")
    input.value = ""
    last = "*"
}
mult_Btn.addEventListener("click", multAction)

function divAction(event){
    console.log("divide")
    operation = operation.concat(input.value + " / ")
    input.value = ""
    last = "/"
}
div_Btn.addEventListener("click", divAction)

function resultAction(event){
    console.log("equal")
    
    operation = operation.concat(input.value)
    output.value = eval(operation)
    log.value = log.value.concat("\n" + operation + " = ")
    log.value = log.value.concat(output.value)
    operation = ""
    last = ""
    result = 0
}
equal_Btn.addEventListener("click", resultAction)

function resetAction(event){
    console.log("reset")
    operation = ""
    input.value = ""
    output.value = ""
    last = ""
    result = 0
}
reset_Btn.addEventListener("click", resetAction)