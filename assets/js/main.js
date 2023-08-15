class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }

}
class TaskList {
    constructor() {
        this.tasks = []
    }
    
    addPost(task) {
        this.tasks.push(task)
    }

    deletePost(index) {
        this.tasks.splice(index, 1);
    }
    

}

function randonId() {
    return Math.floor(Math.random() * 9999)
}

const taskList = new TaskList()

function showPost() {
    let title = document.getElementById("title").value;

    const novo = new Task(randonId(), title, false)
    taskList.addPost(novo)

    title = document.getElementById("title").value = "";
    console.log(taskList.tasks)
    console.log(novo)
}