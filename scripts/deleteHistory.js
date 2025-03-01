// clear history container

const deleteHistory = document.getElementById('btn-clear-history');

deleteHistory?.addEventListener('click', function() {
    const activityLog = document.getElementById('activity-log');
    activityLog.innerHTML = '';
});