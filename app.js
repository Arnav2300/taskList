const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');
const submitBtn=document.getElementById('sub');

submitBtn.addEventListener('click',addTask);
function addTask(e){
    if(taskInput.value==='')
    {
        alert('Add a task first!');
        return 0;
    }
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link=document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value='';
    e.preventDefault();
}

taskList.addEventListener('click',removeTask);
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }   
    
}

clearBtn.addEventListener('click',function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
});

filter.addEventListener('keyup',filterTasks);
function filterTasks(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){    
            console.log(task);                        //task is just the iterator
            const item=task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text)!=-1){
                task.style.display='block';
            }
            else{
                task.style.display='none';
            }
        }
    );
    //console.log(text);
}