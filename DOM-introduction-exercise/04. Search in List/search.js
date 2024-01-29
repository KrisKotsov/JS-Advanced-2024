function search() {
   let list = document.getElementById("towns")
   let inputField = document.getElementById("searchText").value
   let result = document.getElementById("result")

   let counter = 0

   let arrList = Array.from(list.children)

   for (let el of arrList) {
      let town = el.textContent

      if (town.includes(inputField)) {
         el.style.fontWeight = "bold"
         el.style.textDecoration = "underline"
         counter++
      }
   }
   result.textContent = `${counter} matches found`
}
