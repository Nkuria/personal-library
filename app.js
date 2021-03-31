let myLibrary = [
{author : "author 1",
title: "book1",
pages: 300,
read: true},
{author : "author 2",
title: "book2",
pages: 300,
read: false},
];

const Book = (author,title,pages,read) => {

    return {author,title,pages,read};
}
function addBookToLibrary(){}

function bookDisplay(arr){
    const body = document.getElementById('body');
    const bookWrapper = document.createElement('div');
    body.appendChild(bookWrapper);
    for(let i = 0; i< arr.length; i++) {
        

        
        const container = document.createElement('div');
        container.classList.add('container');
        bookWrapper.appendChild(container);
        


        const author = document.createElement('h3');
        container.appendChild(author);
        authorText = document.createTextNode(arr[i].author);
        author.appendChild(authorText);

        const title = document.createElement('p');
        titleText = document.createTextNode(arr[i].title);
        title.appendChild(titleText);
        container.appendChild(title);

    }

}
bookDisplay(myLibrary);