let myLibrary = [
// {author : "author 1",
// title: "book1",
// pages: 300,
// read: true},
// {author : "author 2",
// title: "book2",
// pages: 300,
// read: false},
];

const Book = (author,title,pages,read) => {

    return {author,title,pages,read};
}
myLibrary.push(Book("author 1", "book 1", 300, true));
myLibrary.push(Book("author 2", "book 2", 500, true));
function addBookToLibrary(){}
const mainBody = document.getElementById('mainBody');




function addBookForm(mainBody) {
    const addBookBtn = document.createElement('button');
    mainBody.appendChild(addBookBtn);
    addBookBtnText = document.createTextNode("Add Book");
    addBookBtn.appendChild(addBookBtnText);

    addBookBtn.addEventListener('click', ()=>{
        const formWrapper = document.createElement("div");
        mainBody.appendChild(formWrapper);

        const form = document.createElement('form');
        formWrapper.appendChild(form);

        const authorInput = document.createElement('input');
        authorInput.setAttribute('placeholder', "Enter Author name");
        form.appendChild(authorInput);

        const titleInput = document.createElement('input');
        titleInput.setAttribute('placeholder', "Enter the Book Title");
        form.appendChild(titleInput);

        const pagesInput = document.createElement('input');
        pagesInput.setAttribute('placeholder', "Enter number of pages");
        form.appendChild(pagesInput);

        const readInput = document.createElement('input');
        readInput.type = "checkbox";
        form.appendChild(readInput);
        const readLabel = document.createElement('label');
        const readLabelText = document.createTextNode('Read?');
        readLabel.appendChild(readLabelText);
        form.appendChild(readLabel);

        const createBookBtn = document.createElement('button');
        createBookBtnText = document.createTextNode("Add book");
        createBookBtn.appendChild(createBookBtnText);
        form.appendChild(createBookBtn);
        createBookBtn.type = "button";

        createBookBtn.addEventListener('click', createBook);
        

    });
}

function clearDom()
{
    document.body.innerHTML = "";
}
function createBook() {
    const getAuthor = document.getElementsByTagName('input')[0].value;
    const getTitle = document.getElementsByTagName('input')[1].value;
    const getpages = document.getElementsByTagName('input')[2].value;
    const getRead = () => { 
        if (document.getElementsByTagName('input')[3].checked){
            return true;
        }else {
            return false;
        }
    };
    const getReadValue = getRead();

    myLibrary.push(Book(getAuthor, getTitle, getpages, getReadValue));
    clearDom();
    bookDisplay(myLibrary); 
    // bookDisplay(myLibrary); 
    // bookDisplay(myLibrary);
    // bookDisplay(myLibrary);
}

function bookDisplay(arr){
 
    const bookWrapper = document.createElement('div');
    mainBody.appendChild(bookWrapper);
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

        const pages = document.createElement('p');
        pagesText = document.createTextNode(arr[i].pages);
        pages.appendChild(pagesText);
        container.appendChild(pages);

        const read = document.createElement('p');
        readText = document.createTextNode(arr[i].read);
        read.appendChild(readText);
        container.appendChild(read);

    }
    addBookForm(mainBody);
}

bookDisplay(myLibrary);

