const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deletetoDo(event){
    const chec = event.target;
    const li = chec.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo){
        
        return toDo.id !==parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos))
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span  = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.addEventListener("click", deletetoDo);
    delBtn.innerHTML = "clear";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos()
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
  
}



function loadToDos(){
    
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }

}
    
function init(){
    
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
  
}
init ();