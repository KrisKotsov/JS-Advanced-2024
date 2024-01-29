function solve() {
  let textField = document.getElementById("text").value
  let namingConvention = document.getElementById("naming-convention").value
  let resultRef = document.getElementById("result")
  textField = textField.toLowerCase()

  let result = ""

  if (namingConvention == "Camel Case") {
    let textArr = textField.split(" ")
    result = textArr.shift()

    textArr.forEach((word) => {
      result += word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
  } else if (namingConvention == "Pascal Case") {
    textField.split(" ").forEach((word) => {
      result += word[0].toUpperCase() + word.substring(1)
    })
  } else {
    result = "Error!"
  }

  resultRef.textContent = result
}