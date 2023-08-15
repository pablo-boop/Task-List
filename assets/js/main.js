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

    deletePost(id) {
        this.tasks = this.tasks.filter(task => task.id != id);
        console.log(this.tasks);
    }

    editPost(index, title) {
        this.tasks.forEach(task => {
            if (task.id == index) {
                task.title = title
            }
        })

        document.getElementById("title").value = post.title;

        postIndex = post
    }

    verified() {
        taskList.tasks.forEach((task, tasks) => {
            if(tasks != true) {
                this[task.status] = true;
            } else {
                this[task.status] = false;
            }
        })
    }
}

let postIndex = -1;

//Instances
const taskList = new TaskList()

//generate id
function randonId() {
    return Math.floor(Math.random() * 9999)
}


function createPost() {
    let title = document.getElementById("title").value;
    document.getElementById("list").classList.remove("hidden");
    const novo = new Task(randonId(), title, false)
    taskList.addPost(novo)
    showPost()
}

function showPost() {
    let showContent = "";
    
    taskList.tasks.forEach((novo, index) => {
        showContent += `
        <div id="task">
        <h2>${novo.title}</h2>
        <div class="buttons">
        <button class="task-btn" id="verified" onclick="verified(${novo.status})"><i class="fa-solid fa-check"></i></button>
        <button class="task-btn" id="pencil" onclick="editPost(${novo.id})"><i class="fa-solid fa-pencil"></i></button>
            <button class="task-btn" id="trash" onclick="deleteTask(${novo.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
        </div>`
    })
    
    title = document.getElementById("title").value = "";
    document.getElementById("list").innerHTML = showContent;
    console.log(taskList.tasks)
}

function deleteTask(param) {
    taskList.deletePost(param);
    showPost()
}

function verified() {
    taskList.verified();
}

function editPost(param) {
    document
}