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
let addArray = [{
    id:1,
    name:"",
    dateCreated: new Date(),
    completed: ""
}]

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
            <li class="line"><input type="checkbox">${data}<button id="clear"> x </button></li>
        `
    })
})

document.querySelector("#clear").
addEventListener("click", ()=>{
    let remove = output.innerHTML;
    output.innerHTML = "";
})

// document.querySelector(".line").
// addEventListener("click", ()=>{
//     output.
// })