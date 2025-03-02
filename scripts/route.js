// navigate to blog page

const blogPageRoute = document.getElementById("blog-page");

if(blogPageRoute) {
    blogPageRoute.addEventListener("click", function (){
        window.location.href= './blog.html';
    })
}



// navigate to home page

const homePageRoute = document.getElementById("home-page");

if(homePageRoute) {
    homePageRoute.addEventListener("click", function (){
        window.location.href= '/Assignment-5';
    })
}