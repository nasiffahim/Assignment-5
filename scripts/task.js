// task completed function
const taskDoneElements = document.querySelectorAll(".task-done");

const activityLog = document.getElementById('activity-log');

for (let i = 0; i < taskDoneElements.length; i++) {
    taskDoneElements[i].addEventListener("click", function() {
        alert("You have completed the task!")
        const button = taskDoneElements[i].querySelector("button");
        const taskRemain = document.getElementById("task-remain").innerText;
        const convertRemainTask = parseFloat(taskRemain);
        const remainTask = convertRemainTask - 1;
        document.getElementById("task-remain").innerText = remainTask;

        const totalTask = document.getElementById("total-task").innerText;
        const convertTotalTask = parseFloat(totalTask);
        const allTask = convertTotalTask + 1;
        document.getElementById("total-task").innerText = allTask;

        button.disabled = true;
        taskDoneElements[i].style.backgroundColor = '#A1A1A1';

        const newText = document.createElement('p');
        newText.innerText = `You have completed the task no 1 at this time of the day`;
        newText.classList.add('activity-history');
        newText.style.backgroundColor = '#F4F7FF';
        activityLog.appendChild(newText);
    });
}
