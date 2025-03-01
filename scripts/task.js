// task completed function

const taskCompleted = document.querySelectorAll(".task-info");

const activityLog = document.getElementById('activity-log');

let count = 0;

for (let i = 0; i < taskCompleted.length; i++) {
    const taskComplete = taskCompleted[i].querySelector('button')
    taskComplete.addEventListener("click", function() {
        alert("Board Updated Successfully!"); 
        count++;
        if(count === taskCompleted.length){
            alert("Congrats!!! You have completed all the current tasks!");
        }        

        const button = taskCompleted[i].querySelector(".task-done");
        const taskTitle = taskCompleted[i].querySelector(".task-title").innerText;
        const taskRemain = document.getElementById("task-remain").innerText;
        const convertRemainTask = parseFloat(taskRemain);
        const remainTask = convertRemainTask - 1;
        document.getElementById("task-remain").innerText = remainTask;

        const totalTask = document.getElementById("total-task").innerText;
        const convertTotalTask = parseFloat(totalTask);
        const allTask = convertTotalTask + 1;
        document.getElementById("total-task").innerText = allTask;

        button.disabled = true;
        button.style.backgroundColor = '#A1A1A1';

        const newText = document.createElement('p');
        newText.innerText = `You have completed the task ${taskTitle} at ${new Date().toLocaleString()}`;
        newText.classList.add('activity-history');
        newText.style.backgroundColor = '#F4F7FF';
        activityLog.appendChild(newText);
    });
}
