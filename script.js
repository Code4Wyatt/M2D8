//JS Exercises
//EX11) Write a function to add a new link into the navbar







//EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
//EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
// 

const addLink = function (content) {   // declare new function with content as parameter
    const parent = document.querySelector(".nav");  // target the nav section
    const link = `<a class="p-2 text-muted" href="#">${content}</a>`; // create variable with the value of the html i want to add
    parent.innerHTML += link; // add link to parent using innerHTML
    
}

addLink("Cooking"); // call function

//EX12) Write a function to change the color of the main title

const changeColor = function () {
    const getTitle = document.querySelector(".jumbotron h1")
    getTitle.classList.add("newTitle")
   
}

changeColor();

//EX13) Write a function to change the background of the jumbotron

const changeJumbo = function () {
    const getJumbo = document.querySelector(".jumbotron")
    getJumbo.classList.remove("bg-dark")
    getJumbo.classList.add("jumbackground")
    
}

changeJumbo();

//EX14) Write a function to remove all the links under "Elsewhere"

const byeLinks = function () {
    const links = document.querySelector(" .blog-sidebar > div:last-of-type ol ")



links.innerHTML = "";
}

byeLinks();

//EX15) Write a function to change the column size for heading in jumbotron

const colSize = function () {
    const heading = document.querySelector(".jumbotron h1")
    heading.classList.remove("col-md-6")
    heading.classList.add("col-md-412")
}

colSize();

//EX16) Write a function to remove the "Search" magnifying glass icon

const noSearch = function () {
    const search = document.querySelector(".blog-header .row div:last-of-type")
    search.children[0].remove();
}

noSearch();

//EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

const changeP = function () {
    const paragraph = document.querySelector(".blog-main > p")
    paragraph.substring(50);
}

changeP();

//EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

const addNewPost = function () {
    const getDiv = document.querySelector(".blog-main")
    const newPost = document.createElement("div")
    newPost.innerHTML = "New Post"
}

addNewPost()