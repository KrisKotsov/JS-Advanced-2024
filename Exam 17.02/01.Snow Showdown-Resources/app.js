window.addEventListener("load", solve);

function solve() {
  let snowmanName = document.getElementById("snowman-name")
  let snowmanHeight = document.getElementById("snowman-height")
  let location = document.getElementById("location")
  let creator = document.getElementById("creator-name")
  let sumbitBtn = document.querySelector(".add-btn")
  let specialAttribute = document.getElementById("special-attribute")
  let ulList = document.querySelector(".snowman-preview")
  let ulListPreview = document.querySelector(".snow-list")

  sumbitBtn.addEventListener("click", (event) => {
    event.preventDefault()

    if (snowmanName.value == "" || snowmanHeight.value == "" || location.value == "" || creator.value == "" || specialAttribute.value == "") {
      return
    }

    let snowmanNameValue = snowmanName.value
    let snowmanHeightValue = Number(snowmanHeight.value)
    let locationValue = location.value
    let creatorValue = creator.value
    let specialAttributeValue = specialAttribute.value

    let element = document.createElement("li")
    let article = document.createElement("article")

    let pElName = document.createElement("p")
    pElName.textContent = `Name: ${snowmanNameValue}`

    let pElHeight = document.createElement("p")
    pElHeight.textContent = `Height: ${snowmanHeightValue}`

    let pElLocation = document.createElement("p")
    pElLocation.textContent = `Location: ${locationValue}`

    let pElCreator = document.createElement("p")
    pElCreator.textContent = `Creator: ${creatorValue}`

    let pElSpecialAtt = document.createElement("p")
    pElSpecialAtt.textContent = `Attribute: ${specialAttributeValue}`

    article.appendChild(pElName)
    article.appendChild(pElHeight)
    article.appendChild(pElLocation)
    article.appendChild(pElCreator)
    article.appendChild(pElSpecialAtt)

    element.appendChild(article)
    ulList.appendChild(element)

    let createDivElement = document.createElement("div")
    createDivElement.className = "btn-container"

    let editBtn = document.createElement("button")
    editBtn.className = "edit-btn"
    editBtn.textContent = "Edit"

    let nextBtn = document.createElement("button")
    nextBtn.className = "next-btn"
    nextBtn.textContent = "Next"

    createDivElement.appendChild(editBtn)
    createDivElement.appendChild(nextBtn)

    element.appendChild(createDivElement)

    sumbitBtn.parentElement.reset()

    sumbitBtn.disabled = true

    editBtn.addEventListener("click", () => {
      snowmanName.value = snowmanNameValue;
      snowmanHeight.value = snowmanHeightValue;
      location.value = locationValue;
      creator.value = creatorValue;
      specialAttribute.value = specialAttributeValue;

      sumbitBtn.disabled = false
      ulList.removeChild(element)
    })

    nextBtn.addEventListener("click", () => {
      let liElement = document.createElement("li")
      liElement.className = "snowman-content"

      let sendBtn = document.createElement("button")
      sendBtn.className = "send-btn"
      sendBtn.textContent = "Send"

      let articleRef = element.firstChild
      articleRef.appendChild(sendBtn)

      liElement.appendChild(articleRef)
      ulListPreview.appendChild(liElement)

      ulList.textContent = ""
    })

  })

}
