// html block with template literals
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) =>
    `
    <li data-task-id="${id}" class="list-group-item">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Task Description: ${description}</p>
                <p class="card-text">Assigned To: ${assignedTo}</p>
                <p class="card-text">Due Date: ${dueDate}</p>
                <button class="btn btn-danger delete-button">Delete</button>
                <span class="badge badge-success">${status}</span>
                <button class="btn btn-warning done-button">Mark As Done</button>
            </div>
        </div>
    </li>
`;

// create taskManager class
class taskManager {
    constructor(currentId = 0) {
        this.tasks = []; // task array
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status) {
        // create task object
        const task = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };

        //console.log(newTask);

        // push new task object to task array
        this.tasks.push(task); 

        // increment the id by 1
        this.currentId ++; 
    }

    render() {
        let tasksHtmlList = [];
        // loop through each task in task list and store in a variable
        for (let i = 0; i < this.tasks.length; i ++) {
            let task = this.tasks[i];
            // pass task due date to date constructor
            let date = new Date(task.dueDate);
            // create variable with readable string representing the date
            let formattedDate = date.toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
            // use regex to match date format MM/DD/YYYY and remove timestamp
            let regEx = /^\d{1,2}\/\d{1,2}\/\d{4}/;
            let reformattedDate = formattedDate.match(regEx);
            // create variable to store the HTML of the current task
            let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, reformattedDate, task.status, task.id);
            // push taskHtml to tasksHtmlList
            tasksHtmlList.push(taskHtml);
        }
        // after looping through each task, set a variable to string of html for all the tasks in tasksHtmlList
        let tasksHtml = tasksHtmlList.join("\n"); // try single quotes if double doesn't work

        const taskList = document.getElementById('taskList');
        taskList.innerHTML = tasksHtml;
        
    }

    getTaskById(taskId) {
        let foundTask;
        // loop through each task in task list and store in a variable
        for (let i = 0; i < this.tasks.length; i ++) {
            let task = this.tasks[i]; 
            if (task.id === taskId) {
                foundTask = task; // should be task not task.id? I think you need to store the ENTIRE task
            }
        }
        return foundTask;
    }

    save() {
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        let currentId = this.currentId.toString();
        localStorage.setItem('currentId', currentId);
    }

    load() {
        if (localStorage.getItem('tasks')) {
            let tasksJson = localStorage.getItem('tasks')
            this.tasks = JSON.parse(tasksJson);
        }

        if (localStorage.getItem('currentId')) {
            let currentId = localStorage.getItem('currentId');
            this.currentId = Number(JSON.parse(currentId));
        }
    }

    deleteTask(taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i ++) {
            const task = this.tasks[i]; 
        
            if (task.id !== taskId) {
                newTasks.push(task);
                
            }
        }
        this.tasks = newTasks;
    } 
        
}