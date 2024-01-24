function editElement(reference, match, replace) {
    let content = reference.textContent
    reference.textContent = content.split(match).join(replace)
}

