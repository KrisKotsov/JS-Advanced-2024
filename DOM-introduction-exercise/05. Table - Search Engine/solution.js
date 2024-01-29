function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchInputRef = document.getElementById("searchField")
   let tableRows = Array.from(document.querySelectorAll("tbody tr"))

   function onClick() {
      let searchText = searchInputRef.value

      for (let el of tableRows) {
         let tableData = Array.from(el.querySelectorAll("td"))
         for (let data of tableData) {
            if (data.textContent.includes(searchText)) {
               el.classList.add("select")
               break
            } else {
               el.classList.remove("select")
            }
         }
      }
      searchInputRef.value = ""
   }
}