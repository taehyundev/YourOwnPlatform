const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const GetDiv = document.querySelector("div");
    const Istitle = GetDiv.querySelector(".title");
    const IsBox = GetDiv.querySelector(".checkbox");

    const lists = document.querySelector(".look");
    
    var sw =1;

var TODOS_LS = 'toDos';

    let toDos = [];
    let ccheck= [];

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

function spanSet(event){
    const chec = event.target;
    const li = chec.parentNode;
    const cleanToDos = toDos.filter(function (toDo){
        if(toDo.id ===parseInt(li.id)){
            if(toDo.text.includes('[clear]') === false){
            toDo.text = `[clear]  ${toDo.text}`;
            }
        }
        return toDo.id
    })
    toDos = cleanToDos;

    saveToDos();
    location.reload();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
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
    span.addEventListener("click",spanSet);
    span.innerText ="  "+ text+ "   ";
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    
    var toDoObj = {
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
    
function listget(){
    lists.style.display = 'table';
}

function titleClick(){
    if(sw===1){
    IsBox.classList.add("checkbox_look");
    sw = 0;
    }
    else if(sw===0){
        
    IsBox.classList.remove("checkbox_look");
    sw=1;
    }
}


function init(){
    
    const currentUser = localStorage.getItem("currentUser");
    if(currentUser !== null &&currentUser !== ""){
    listget();
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
    }
    Istitle.addEventListener("click", titleClick);

}
init ();