// Selecting elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => taskItem.remove());

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    newTaskInput.value = ''; // Clear the input field
}

// Add event listener to the button
addTaskBtn.addEventListener('click', addTask);

// Optional: Add task on pressing Enter key
newTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
