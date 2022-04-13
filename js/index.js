// new instance of taskManager class
const newTask = new taskManager();

// form elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList'); // taskList id 
const title = document.getElementById('task-title');
const assigned = document.getElementById('assignee');
const dueDate = document.getElementById('task-date');
const description = document.getElementById('description');
//const taskStatus = document.getElementById('dropdownMenu2'); // need to reference the options
const taskStatus = document.getElementsByClassName('dropdown-item');
const btn = document.getElementById('submit');

// validation function
function checkFields() { // would a switch also work here?
    // would like to show all blank fields, not just one at a time
    if(title.value === '') {
        alert('TASK TITLE field cannot be left blank.');
        return false;
    } 

    if(assigned.value === '') {
        alert('ASSIGNED TO field cannot be left blank.');
        return false;
    } 

    if(dueDate.value === '') {
        alert('DUE DATE field cannot be left blank.');
        return false;
    } 

    if(description.value === '') {
        alert('DESCRIPTION field cannot be left blank.');
        return false;
    }
    return true;
}

// form actions
taskForm.addEventListener('submit',(event) => {
    // perform validation; need to break if condition not met; still creating blank objects for array
    // checkFields(); 

    // // Make sure to prevent the default action of the form!
    // event.preventDefault();
    
    // // if validation successful, call taskManager.addTask() method
    // newTask.addTask(title.value,description.value,assigned.value,dueDate.value,taskStatus);
    // console.log(newTask.tasks);
    
    // // restore form element's default values
    // taskForm.reset();

    if (checkFields() === true) {
        event.preventDefault();
        newTask.addTask(title.value,description.value,assigned.value,dueDate.value,taskStatus);
        console.log(newTask.tasks);
        newTask.render();
        const taskHtml = createTaskHtml(title.value,description.value,assigned.value,dueDate.value,taskStatus);
        console.log(taskHtml);
        taskList.innerHTML = taskHtml;
        taskForm.reset();
    } else {
        event.preventDefault();
    }
});

// html variable referencing createTaskHtml function in taskManager.js
// const taskHtml = createTaskHtml(title.value,description.value,assigned.value,dueDate.value,taskStatus);
// console.log(taskHtml);



// taskList.innerHTML = taskHtml;
