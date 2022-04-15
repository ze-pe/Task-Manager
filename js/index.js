// new instance of taskManager class
const newTask = new taskManager();

// load tasks from local storage and render them
newTask.load();
newTask.render();

// form elements
const taskForm = document.getElementById('taskForm'); 
const title = document.getElementById('task-title');
const assigned = document.getElementById('assignee');
const dueDate = document.getElementById('task-date');
const description = document.getElementById('description');
const btn = document.getElementById('submit');

// alert elements
const titleAlert = document.getElementById('titleAlert');
const assigneeAlert = document.getElementById('assigneeAlert');
const dateAlert = document.getElementById('dateAlert');
const descriptionAlert = document.getElementById('descriptionAlert');

// validation function
function validFormFieldInput() { 
    if (title.value === '') {
        titleAlert.style.display = 'block';
    } else {
        titleAlert.style.display = 'none';
    }

    if (assigned.value === '') {
        assigneeAlert.style.display = 'block';
    } else {
        assigneeAlert.style.display = 'none';
    } 

    if (dueDate.value === '') {
        dateAlert.style.display = 'block';
    } else {
        dateAlert.style.display = 'none';
    }

    if (description.value === '') {
        descriptionAlert.style.display = 'block';
    } else {
        descriptionAlert.style.display = 'none';
    }

    if (title.value !== '' && assigned.value !== '' && dueDate.value !== '' && description.value !== '') {
        return true;
    }
}

// form actions
taskForm.addEventListener('submit', (event) => {

    if (validFormFieldInput() === true) {
        event.preventDefault();
        newTask.addTask(title.value,description.value,assigned.value,dueDate.value);
        //console.log(newTask.tasks);
        newTask.render();
        newTask.save();
        taskForm.reset();
    } else {
        event.preventDefault();
    }
});

const taskListElement = document.querySelector('#taskList');

taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        //console.log('parentTask variable:', parentTask);
        const taskId = Number(parentTask.dataset.taskId);
        //console.log('taskId variable:', taskId);
        const task = newTask.getTaskById(taskId);
        //console.log('task variable:', task);
        task.status = 'DONE';
        //console.log('task variable:', task);
        newTask.save();
        newTask.render();
        event.preventDefault();
    }
})

taskListElement.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        newTask.deleteTask(taskId);
        newTask.save();
        newTask.render();
        event.preventDefault();
    }
})
