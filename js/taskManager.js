// html block with template literals
const createTaskHtml = (name, description, assignedTo, dueDate, status = 'TODO') =>
    `
    <li class="list-group-item">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${assignedTo}</p>
                <p class="card-text">${dueDate}</p>
                <a href="#" class="btn btn-danger">Delete</a>
                <span class="badge badge-success">${status}</span>
                <!-- <a href="#" class="btn btn-success">Update</a> -->
            </div>
        </div>
    </li>
`;

// create taskManager class
class taskManager {
    constructor(currentId = 0) {
        this.tasks = []; // task array
        this.currentId = currentId; // should we prepend with underscore?
    }

    addTask(name, description, assignedTo, dueDate, status = 'TODO') {
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
            let formattedDate = date.toString();
            // create variable to store the HTML of the current task
            let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
            // push taskHtml to tasksHtmlList
            tasksHtmlList.push(taskHtml);
        }
        // after looping through each task, set a variable to string of html for all the tasks in tasksHtmlList
        let tasksHtml = tasksHtmlList.join("\n"); // try single quotes if double doesn't work

        const taskList = document.getElementById('taskList');
        taskList.innerHTML = tasksHtml;
        
    }
}

/*
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
*/