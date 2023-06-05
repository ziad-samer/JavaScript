// const taskName = document.getElementById("taskName").value;
// const taskPriority = document.getElementById("taskPriority").value;
// let onAdd = document.getElementById("onAdd");

// onAdd.addEventListener('click',
//     function table(taskName, taskPriority) {
//         `<table>
// <tr><th>Task Name</th>
// <th>Task Priority</th></tr>
// <tr><td>${taskName}</td>
// <td>${taskPriority}</td></tr>
// </table>`}
// )
const tasks = [];
const addTask = function () {
    const taskName = document.getElementById("taskName").value;
    const taskPriority = document.getElementById("taskPriority").value;
    //Validation
    const task = { name: taskName, priority: taskPriority }
    const isValid = validate(task);
    if (!isValid) {
        alert("Your data is not valid")
        return;
    }
    addTaskToList(task);
    renderTaskTable();
};

const validate = function (task) {
    return true;
}
const addTaskToList = function (task) {
    tasks.push(task);
}

const renderTaskTable = function () {
    let tbody = "";
    for (let i = 0; i < tasks.length; i++) {
        tbody += getTableRow(i, tasks[i]);
    }
    document.getElementById("task-list").innerHTML = tbody;
}

const getTableRow = function (i,task) {
    let tr =
        `<tr><td>${i + 1}</td><td>${task.name}</td><td>${task.priority}</td>
    <td><button onClick="deleteTask(${i})">Delete</button></td></tr>`
    return tr;
}

const deleteTask = function (i) {
    tasks.splice(i, 1);
    renderTaskTable();
}