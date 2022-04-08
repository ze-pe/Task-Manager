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
}
