const form = document.querySelector("form")

const taskInput = document.querySelector("#task")

const taskList = document.querySelector("ul")

form.addEventListener("submit", addTask)

taskList.addEventListener("click, deleteTask")

function addTask(event){
    // create list item
    console.log(taskInput.value)
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"
    const a = document.createElement("a")
    a.appendChild(document.createTextNode("x"))
    a.className ="blue-text text-darken-2 secondary-content"
    a.setAttribute("href", "#")
    li.appendChild(a)
    // add to list
    const ul = document.querySelector("ul")
    ul.appendChild(li)
    taskInput.value = ""
    event.preventDefault()


}

function deleteTask(event){
    if(event.target.textContent == "x"){
        if(confirm("are you sure to delete this task")){
            event.target.parentElement.remove()
        }
    }
}
