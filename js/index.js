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

// validation function
function checkFields() { // would a switch also work here?
    // would like to show all blank fields, not just one at a time
    if(title.value === '') {
        alert('TITLE field cannot be left blank.');
        return false;
    } 

    if(assigned.value === '') {
        alert('ASSIGNED cannot be left blank.');
        return false;
    } 

    if(dueDate.value === '') {
        alert('DATE field cannot be left blank.');
        return false;
    } 

    if(description.value === '') {
        alert('DESCRIPTION field cannot be left blank.');
        return false;
    } 
}

// form actions
taskForm.addEventListener('submit',(event) => {
    // perform validation
    checkFields();

    // Make sure to prevent the default action of the form!
    event.preventDefault();
    
    // if validation successful, call taskManager.addTask() method
    newTask.addTask(title.value,description.value,assigned.value,dueDate.value,taskStatus);
    console.log(newTask.tasks);
    
    // restore form element's default values
    taskForm.reset();

});



