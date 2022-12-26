// getting the input element from the HTML document
let inputEl = document.getElementById("inner_input");
//input function
function input_el(num) {
    inputEl.value += num
}

//equals button function

function equal() {
    let result = eval(inputEl.value)
    inputEl.value = result
}

//clear button function

function clr() {
    inputEl.value = "";
}

//delete button function

function deleteBtn() {
    let del = inputEl.value;
    let delResult = del.substring(0, del.length-1)
    inputEl.value = delResult
}