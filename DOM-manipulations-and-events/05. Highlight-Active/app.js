function focused() {

    function handleFocus(event) {
        const divSections = document.querySelectorAll("div div")

        for (let el of divSections) {
            el.classList.remove('focused')
        }

        const focusedInput = event.target
        const parentDiv = focusedInput.parentElement
        parentDiv.classList.add('focused')
    }

    function handleBlur(event) {
        const parentDiv = event.target.parentElement;
        parentDiv.classList.remove('focused');
    }

    const inputs = document.querySelectorAll('input[type="text"]');

    for (let input of inputs) {
        input.addEventListener('focus', handleFocus)
        input.addEventListener('blur', handleBlur)
    }
}