// background color change

const colors = ["#F4F7FF", "#FFDFEF", "#A1E3F9", "#FFFAEC", "#F5EFFF"];

let colorIndex = 0;

const themeChangeBtn = document.getElementById("theme-btn").addEventListener("click", function() {
    colorIndex++;
    if(colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];
})