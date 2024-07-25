<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .task-list {
            list-style: none;
            padding: 0;
        }
        .task {
            display: flex;
            justify-content: space-between;
            background-color: #f3f3f3;
            margin: 10px 0;
            padding: 10px;
            border-radius: 4px;
        }
        .completed {
            text-decoration: line-through;
        }
    </style>
</head>
<body>
    <h1>Task Manager</h1>
    <input type="text" id="taskInput" placeholder="Enter a new task">
    <button id="addTaskButton">Add Task</button>
    <ul class="task-list" id="taskList"></ul>

    <script>
        class Task {
            constructor(name) {
                this.name = name;
                this.completed = false;
            }

            toggleComplete() {
                this.completed = !this.completed;
            }
        }

        class TaskManager {
            constructor() {
                this.tasks = [];
                this.taskListElement = document.getElementById('taskList');
            }

            addTask(taskName) {
                const task = new Task(taskName);
                this.tasks.push(task);
                this.render();
            }

            removeTask(taskIndex) {
                this.tasks.splice(taskIndex, 1);
                this.render();
            }

            toggleTaskCompletion(taskIndex) {
                const task = this.tasks[taskIndex];
                task.toggleComplete();
                this.render();
            }

            render() {
                this.taskListElement.innerHTML = '';
                this.tasks.forEach((task, index) => {
                    const taskElement = document.createElement('li');
                    taskElement.className = 'task';
                    if (task.completed) {
                        taskElement.classList.add('completed');
                    }

                    const taskNameElement = document.createElement('span');
                    taskNameElement.textContent = task.name;
                    taskElement.appendChild(taskNameElement);

                    const toggleButton = document.createElement('button');
                    toggleButton.textContent = 'Toggle Complete';
                    toggleButton.addEventListener('click', () => this.toggleTaskCompletion(index));
                    taskElement.appendChild(toggleButton);

                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'Remove';
                    removeButton.addEventListener('click', () => this.removeTask(index));
                    taskElement.appendChild(removeButton);

                    this.taskListElement.appendChild(taskElement);
                });
            }
        }

        const taskManager = new TaskManager();

        document.getElementById('addTaskButton').addEventListener('click', () => {
            const taskInput = document.getElementById('taskInput');
            const taskName = taskInput.value;
            if (taskName) {
                taskManager.addTask(taskName);
                taskInput.value = '';
            }
        });
    </script>
</body>
</html>
