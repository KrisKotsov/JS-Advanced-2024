function extractText() {

    let list = document.getElementById("items")
    let textarea = document.getElementById("result")
    let result = Array.from(list.children)

    for (let el of result) {
        textarea.value += el.textContent + "\n"
    }
}