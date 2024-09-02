
class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
        
    }
    getBookList(){
       this.bookList.forEach(element => {
             console.log(element);
       });
    }

    issueBook(bookName,user){
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName] = user;
        }
        else{
            console.log('This book is alreday issued.');
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}

