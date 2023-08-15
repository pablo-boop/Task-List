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

    editPost(index) {
        const post = taskList.tasks[index]

        document.getElementById("title").value = post.title;
    }
    

}

function randonId() {
    return Math.floor(Math.random() * 9999)
}

const taskList = new TaskList()

function showPost() {
    let title = document.getElementById("title").value;
    document.getElementById("list").classList.remove("hidden");
    const novo = new Task(randonId(), title, false)
    taskList.addPost(novo)

    let showContent = "";

    taskList.tasks.forEach((novo) => {
        showContent += `
        <div id="task">
        <h2>${novo.title}</h2>
        <div class="buttons">
            <button class="task-btn" id="verified"><i class="fa-solid fa-check"></i></button>
            <button class="task-btn" id="pencil" onclick="editPost()"><i class="fa-solid fa-pencil"></i></button>
            <button class="task-btn" id="trash" onclick="deletePost()"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`
    })

    title = document.getElementById("title").value = "";
    document.getElementById("list").innerHTML = showContent;
}
