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

    savePost() {
        const title = document.getElementById("title").value;
        const alert = document.getElementById("p-alert").value;

        if(title == " ") {
            alert = document.getElementById("p-alert").classList.remove("hidden");
        } else {

        }
    }

    mathMethods() {
        return Math.floor(Math.random() * 9999)
    }

    cleanFields() {
        title = document.getElementById("title").value = "";
    }

    storePosts(id, title, status) {
        const post = new Task(
            id,
            title,
            status
        )
        this.tasks.push(post)
    }

    
}

function showPosts() {
    document.getElementById("list").classList.remove("hidden");

    let showContent = "";

    this.tasks.forEach((post, index) => {
        showContent += `
    <div id="task">
        <h2>${post.title}</h2>
        <div class="buttons">
            <button class="task-btn" id="verified"><i class="fa-solid fa-check"></i></button>
            <button class="task-btn" id="pencil" onclick="editPost(${index})"><i class="fa-solid fa-pencil"></i></button>
            <button class="task-btn" id="trash" onclick="deletePost(${index})"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`
    })

    document.getElementById("list").innerHTML = showContent
}
