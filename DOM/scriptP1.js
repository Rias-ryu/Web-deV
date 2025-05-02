// alert("Connected");

// Example - 1

document
.getElementById("ChangeTextButton")
.addEventListener('click',function () {
   let paragraph = document.getElementById("MyParagraph");
    paragraph.textContent = "This Paragraph is Changed"
})

// Example - 2

document.getElementById("HighlightCity")
.addEventListener("click",function () {
   let CityList = document.getElementById("citiesList")
    CityList.firstElementChild.classList.add("highlight")
      
})

// Example - 3

document.getElementById("ChangeOrder")
.addEventListener("click",function () {
   let Coffee = document.getElementById("CoffeeType")
   Coffee.textContent = "Espresso"
   Coffee.style.backgroundColor = "grey";
    Coffee.style.padding = "20px"
    Coffee.style.display = "flex"
})

// Example - 4
document.getElementById("AddItem")
.addEventListener("click",function () {

   let Item = document.createElement("li")
   Item.textContent = "eggs"
    document.getElementById("ShoppingList").appendChild(Item)
    
})

// Example - 5

document.getElementById("RemoveTask")
.addEventListener("click",function (){
   let list = document.getElementById("TaskList")
   list.lastElementChild.remove()
})

// Example - 6
document.getElementById("ClickMe")
.addEventListener("click" , function () {
   alert(`Button Activated`)
})

// Example - 7
document.getElementById("ItemList")
.addEventListener("click",function (event) {
   if (event.target && event.target.matches('.Item')) {
      alert(`you selected ${event.target.textContent}`)
   }
})

// Example - 8
document.getElementById("FeedbackForm")
.addEventListener("submit",function (event) {
   event.preventDefault()
   // let label = document.getElementById("FeedbackForm").firstChild
   let Feedback = document.getElementById("FeedbackInput").value
   // console.log(Feedback.textContent);
   document.getElementById("FeedbackDisplay").textContent = `feedback is ${Feedback}`
   // alert("Submitted")
})

// Example - 9

document.addEventListener("DOMContentLoaded" , function () {
   document.getElementById("domStatus").textContent = `Dom Loaded Sucessfully`
   
})

// Example - 10

document.getElementById("toggleHighlight")
.addEventListener("click",function () {
  let description = document.getElementById("descriptionText")
  description.classList.toggle("highlight")
})