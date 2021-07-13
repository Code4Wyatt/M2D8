//JS Exercises
//EX11) Write a function to add a new link into the navbar


//EX14) Write a function to remove all the links under "Elsewhere"
//EX15) Write a function to change the column size for heading in jumbotron
//EX16) Write a function to remove the "Search" magnifying glass icon
//EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
//EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
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
    getJumbo.classList.add("jumbackground");
    
}

changeJumbo();