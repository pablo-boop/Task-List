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

    
}

function savePost() {
    const title = document.getElementById("title").value;
    const alert = document.getElementById("p-alert").value;
    if(title == "") {
        alert = document.getElementById("p-alert").classList.remove("hidden");
    }

}