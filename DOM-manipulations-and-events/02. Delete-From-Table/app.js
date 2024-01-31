function deleteByEmail() {
    let input = document.querySelector('[name = "email"]')
    let result = document.getElementById("result")
    let rows = Array.from(document.querySelectorAll('tbody tr'))

    let value = input.value
    let flag = false

    for (let el of rows) {
        if (el.children[1].textContent == value) {
            el.remove()
            flag = true
        }
    }

    if (flag) {
        result.textContent = "Deleted."
    } else {
        result.textContent = "Not found.    "
    }
}