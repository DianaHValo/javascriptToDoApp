const form= document.getElementById('form');
const input=document.getElementById('input');
let todosUL=document.getElementById('todos');
const DayLabel=document.getElementById('SelectedDay');

let SelectedDay='Monday';
let todos= JSON.parse(localStorage.getItem(SelectedDay));

DayLabel.textContent = SelectedDay;

function LoadData(){

    let todos= JSON.parse(localStorage.getItem(SelectedDay));

    if(todos){
        todos.forEach(todo=>{
    
            addToDo(todo)
    
        });
    }
}

function MonBtnClick(){
    SelectedDay='Monday';

    while( todosUL.firstChild ){
        todosUL.removeChild( todosUL.firstChild );
    } 

    LoadData();

    DayLabel.textContent = SelectedDay;
}


function TueBtnClick(){
    SelectedDay='Tuesday';
    while( todosUL.firstChild ){
        todosUL.removeChild( todosUL.firstChild );
    } 

    LoadData();

    DayLabel.textContent = SelectedDay;
}

function WedBtnClick(){
    SelectedDay='Wednesday';
    while( todosUL.firstChild ){
        todosUL.removeChild( todosUL.firstChild );
    } 

    LoadData();

    DayLabel.textContent = SelectedDay;
}

function ThuBtnClick(){
    SelectedDay='Thursday';
    while( todosUL.firstChild ){
        todosUL.removeChild( todosUL.firstChild );
    } 

    LoadData();

    DayLabel.textContent = SelectedDay;
}

function FriBtnClick(){
    SelectedDay='Friday';
    while( todosUL.firstChild ){
        todosUL.removeChild( todosUL.firstChild );
    } 

    LoadData();

    DayLabel.textContent = SelectedDay;
}

function SatBtnClick(){
    SelectedDay='Saturday';
    while( todosUL.firstChild ){
        todosUL.removeChild( todosUL.firstChild );
    } 

    LoadData();

    DayLabel.textContent = SelectedDay;
}

function SunBtnClick(){
    SelectedDay='Sunday';
    while( todosUL.firstChild ){
        todosUL.removeChild( todosUL.firstChild );
    } 

    LoadData();

    DayLabel.textContent = SelectedDay;
}


form.addEventListener('submit',(e)=>{

    e.preventDefault();

    addToDo();

});

 
function addToDo(todo){
        
    let todoText=input.value;

    if(todo){
        todoText=todo.text;
    }

    if(todoText){
        const todoEl = document.createElement('li');

        if(todo && todo.completed){
            todoEl.classList.add("completed");
        }

        todoEl.innerText=todoText;

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed');

            updateLocalSt();
        });

        todoEl.addEventListener("contextmenu",(e)=>{

            e.preventDefault();

            todoEl.remove();

            updateLocalSt();

        })

        todosUL.appendChild(todoEl);

        input.value='';

        updateLocalSt();
    }
}

function updateLocalSt(){
    const todosEl= document.querySelectorAll("li");
    const todos=[];

    todosEl.forEach((todoEl)=>{
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains ("completed"),
        });
    });

    localStorage.setItem(SelectedDay, JSON.stringify(todos));
}