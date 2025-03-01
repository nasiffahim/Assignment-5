// current date time 

function updateDateTime() {
    const now = new Date();

    const currentDateTime = now.toLocaleString();

    document.getElementById('dateTime').innerText = currentDateTime;
}

setInterval(updateDateTime, 1000);