function validate() {
    const input = document.getElementById("email")

    function handleChange() {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/

        let isValid = pattern.test(input.value)

        if (!isValid) {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    }

    input.addEventListener("change", handleChange)
}