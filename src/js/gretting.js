const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
       greeting = document.querySelector(".js-greetings");



const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text)
}

function refresh(){
    location.reload(true);
    location.href = location.href;
    history.go(0);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    refresh();
}


function askForname(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText= `Hello ${text} ,\n Welcome to Your Own Platform`;
    
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null || currentUser === ""){
        askForname();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
 loadName();
}

init();