const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'
    ,CHECK_LS = 'checked';

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
    const checkBtn = document.createElement("input");
    const delBtn = document.createElement("img");
    checkBtn.setAttribute("type", "checkbox");
    delBtn.setAttribute("src", "image/Btn/delBtn.png");
    delBtn.setAttribute("width", 15);
    delBtn.setAttribute("height", 15);
    checkBtn.value =1;
    const span  = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.classList = "delBtn";
    delBtn.addEventListener("click", deletetoDo);
    checkBtn.addEventListener("change", e =>{
        if(checkBtn.checked){  
            alert("test");
        }
        
    });
    
    span.classList.add("strikethrough");
    span.innerText ="  "+ text+ "   ";
    li.id = newId;
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId,
        checked : null
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