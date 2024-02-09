function create(words) {
   const content = document.getElementById("content")

   for (let word of words) {
      let divEl = document.createElement("div")
      content.appendChild(divEl)
      let text = document.createElement("p")
      text.textContent = word
      text.style.display = "none"
      divEl.appendChild(text)

      divEl.addEventListener("click", (e) => {
         e.currentTarget = text.style.display = ""
      })
   }
}