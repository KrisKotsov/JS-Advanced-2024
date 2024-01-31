function addItem() {
    const items = document.getElementById("items")
    const li = document.createElement("li")
    let input = document.getElementById("newItemText")
    const anchor = document.createElement("a")

    anchor.textContent = "[Delete]"
    anchor.setAttribute("href", "#")
    anchor.addEventListener("click", deleteItem)

    if (input.length == 0) {
        return
    }

    li.textContent = input.value
    items.appendChild(li)
    li.appendChild(anchor)

    input.value = ""

    function deleteItem(e) {
        li.remove()
    }
}