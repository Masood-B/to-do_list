// sort
const sortName = document.querySelector("#press1")
// add
const addName = document.querySelector("#press2")
// display input
const nameDisplay = document.querySelector("#display1")
// list
const output = document.querySelector("#list")
// info
let nameList = []

addName.addEventListener("click", (e)=>{
    e.preventDefault()

    if(nameDisplay.value){
        nameList.push(nameDisplay.value);
        nameDisplay.value = ""

    }else {
     alert("you need to add something")
    }
    nameDisplay.value = ""

      // Update
      localStorage.setItem("names", JSON.stringify(nameList))
})

addName.addEventListener("click", (event)=>{
    event.preventDefault()
    nameList = JSON.parse(localStorage.getItem("names"))
    nameList.forEach( (data)=> {
        output.innerHTML += `
            <li><input type="checkbox">${data}<button class="end-x"> x </button></li>
        `
    })
})