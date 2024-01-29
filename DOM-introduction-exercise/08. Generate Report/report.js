function generateReport() {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const rows = Array.from(document.querySelectorAll("tbody tr"))

    const result = rows.map((row) => {
        const reportObj = {}
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                reportObj[checkbox.name] = row.children[index].textContent
            }
        })
        return reportObj
    })

    document.getElementById("output").value = JSON.stringify(result)
}
