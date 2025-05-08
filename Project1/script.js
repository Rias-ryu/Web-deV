document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById("todo-input");
    let button = document.getElementById("add-task-button");
    let list = document.getElementById("todo-list");

    // Changed variable name to tasks (plural) for clarity
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Load existing tasks
    tasks.forEach(taskItem => {
        renderTask(taskItem);
    });

    button.addEventListener("click", () => {
        let taskText = input.value.trim();
        if (taskText === "") {
            return;
        } else {
            let newTask = {
                id: Date.now(),
                text: taskText,
                complete: false,
            };
            tasks.push(newTask);
            renderTask(newTask); // Added this line to render new tasks immediately
            saveTasks();
            input.value = "";
        }
    });

    function displayTask(taskItem) {
        console.log(taskItem.text);
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTask(taskItem) {
        let li = document.createElement('li');
        li.setAttribute('data-id', taskItem.id);
        if (taskItem.complete) {
            li.classList.add("completed");
        }
        li.innerHTML = `
        <span>${taskItem.text}</span>
        <button>delete</button>`;
        
        // Toggle completion status
        li.addEventListener("click", (event) => {
            if (event.target.tagName === 'BUTTON') return;
            
            // Find the task in the array and toggle its complete status
            const taskId = parseInt(li.getAttribute('data-id'));
            const taskIndex = tasks.findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
                tasks[taskIndex].complete = !tasks[taskIndex].complete;
                li.classList.toggle("completed");
                
                saveTasks();
            }
        });

        // Delete task
        li.querySelector("button").addEventListener("click", (event) => {
            event.stopPropagation();
            
            // Get the task ID from the list item
            const taskId = parseInt(li.getAttribute('data-id'));
            
            // Filter out the task with this ID
            tasks = tasks.filter(t => t.id !== taskId);
            
            li.remove();
            saveTasks();
        });

        list.appendChild(li);
    }
});