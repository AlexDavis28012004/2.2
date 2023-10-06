// Sample data for task lists (you can replace this with your data)
const taskLists = [
    { name: "Work" },
    { name: "Personal" },
    { name: "Shopping" },
];

// Function to display tasks for a task list (you can customize this)
function showTasks(taskList) {
    alert(`Showing tasks for "${taskList.name}"`);
}

// Function to edit a task list (you can customize this)
function editTaskList(index) {
    const newName = prompt("Enter the new name for the task list:");
    if (newName) {
        taskLists[index].name = newName;
    }
}

// Function to remove a task list (you can customize this)
function removeTaskList(index) {
    if (confirm("Are you sure you want to remove this task list?")) {
        taskLists.splice(index, 1);
    }
}

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
    const taskListItems = document.querySelectorAll("#task_lists li");
    taskListItems.forEach((item, index) => {
        const showButton = item.querySelector("a");
        const editButton = item.querySelector("button:nth-of-type(1)");
        const removeButton = item.querySelector("button:nth-of-type(2)");

        showButton.addEventListener("click", () => showTasks(taskLists[index]));
        editButton.addEventListener("click", () => editTaskList(index));
        removeButton.addEventListener("click", () => removeTaskList(index));
    });
});
