function addItem() {

    const items = document.getElementById("items")
    const li = document.createElement("li")
    let input = document.getElementById("newItemText")

    if (input.length == 0) {
        return
    }

    li.textContent = input.value
    items.appendChild(li)

    input.value = ""
}