function subtract() {
    let firstNum = document.getElementById("firstNumber").value
    let secondNum = document.getElementById("secondNumber").value

    let result = document.getElementById("result")

    result.textContent = Number(firstNum) - Number(secondNum)
}