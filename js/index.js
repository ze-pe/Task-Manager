// new instance of taskManager class
const newTask = new taskManager();

// form elements
const taskForm = document.getElementById('taskForm'); 
const title = document.getElementById('task-title');
const assigned = document.getElementById('assignee');
const dueDate = document.getElementById('task-date');
const description = document.getElementById('description');
//const taskStatus = document.getElementById('dropdownMenu2'); // need to reference the options
const taskStatus = document.getElementsByClassName('dropdown-item');
const btn = document.getElementById('submit');

// alert elements
const titleAlert = document.getElementById('titleAlert');
const assigneeAlert = document.getElementById('assigneeAlert');
const dateAlert = document.getElementById('dateAlert');
const descriptionAlert = document.getElementById('descriptionAlert');

// validation function
function validFormFieldInput() { // would a switch also work here?
    // would like to show all blank fields, not just one at a time
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
taskForm.addEventListener('submit',(event) => {

    if (validFormFieldInput() === true) {
        event.preventDefault();
        newTask.addTask(title.value,description.value,assigned.value,dueDate.value,taskStatus);
        console.log(newTask.tasks);
        newTask.render();
        taskForm.reset();
    } else {
        event.preventDefault();
    }
});