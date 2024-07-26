// const codding= ["js", "ruby", "python", "cpp", "jaba"]


// const values = codding.forEach((elem)=>{
//     console.log(elem);
//     return elem
// })

// console.log(values);


const myNums = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)// without scope
// console.log(newNums);

// const newNums = myNums.filter((num) =>{
//     // num > 4 //return in necesaayry in filter after using scope
//     return  num > 4
// })
// console.log(newNums);

const newNums = []

myNums.forEach((num) =>{
    if(num > 4){
        newNums.push(num)
    }
})


// console.log(myNums);
// console.log(newNums);

const books = [
    {title: "Mushaf", genre: "Religion", publish: "2004", edition: "2015", writer: "Nemrah Ahmad"},
    {title: "1984", genre: "Dystopian", publish: "1949", edition: "2003", writer: "George Orwell"},
    {title: "To Kill a Mockingbird", genre: "Fiction", publish: "1960", edition: "2015", writer: "Harper Lee"},
    {title: "The Great Gatsby", genre: "Classic", publish: "1925", edition: "2014", writer: "F. Scott Fitzgerald"},
    {title: "The Catcher in the Rye", genre: "Fiction", publish: "1951", edition: "2019", writer: "J.D. Salinger"},
    {title: "Pride and Prejudice", genre: "Classic", publish: "1813", edition: "2018", writer: "Jane Austen"},
    {title: "The Hobbit", genre: "Fantasy", publish: "1937", edition: "2012", writer: "J.R.R. Tolkien"},
    {title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: "1997", edition: "2015", writer: "J.K. Rowling"},
    {title: "The Da Vinci Code", genre: "Thriller", publish: "2003", edition: "2009", writer: "Dan Brown"},
    {title: "The Alchemist", genre: "Adventure", publish: "1988", edition: "2015", writer: "Paulo Coelho"},
    {title: "Brave New World", genre: "Dystopian", publish: "1932", edition: "2020", writer: "Aldous Huxley"},
    {title: "The Road", genre: "Post-Apocalyptic", publish: "2006", edition: "2015", writer: "Cormac McCarthy"},
    {title: "Sapiens: A Brief History of Humankind", genre: "Non-Fiction", publish: "2011", edition: "2018", writer: "Yuval Noah Harari"},
    {title: "Educated", genre: "Memoir", publish: "2018", edition: "2021", writer: "Tara Westover"},
    {title: "Becoming", genre: "Memoir", publish: "2018", edition: "2020", writer: "Michelle Obama"},
    {title: "Where the Crawdads Sing", genre: "Mystery", publish: "2018", edition: "2020", writer: "Delia Owens"},
    {title: "Little Fires Everywhere", genre: "Drama", publish: "2017", edition: "2018", writer: "Celeste Ng"},
    {title: "Normal People", genre: "Romance", publish: "2018", edition: "2020", writer: "Sally Rooney"},
    {title: "The Silent Patient", genre: "Thriller", publish: "2019", edition: "2020", writer: "Alex Michaelides"},
    {title: "The Girl on the Train", genre: "Thriller", publish: "2015", edition: "2016", writer: "Paula Hawkins"},
    {title: "The Hunger Games", genre: "Dystopian", publish: "2008", edition: "2014", writer: "Suzanne Collins"},
    {title: "The Shining", genre: "Horror", publish: "1977", edition: "2012", writer: "Stephen King"},
    {title: "Dune", genre: "Science Fiction", publish: "1965", edition: "2020", writer: "Frank Herbert"},
    {title: "Ender's Game", genre: "Science Fiction", publish: "1985", edition: "2016", writer: "Orson Scott Card"},
    {title: "The Book Thief", genre: "Historical Fiction", publish: "2005", edition: "2014", writer: "Markus Zusak"},
    {title: "The Martian", genre: "Science Fiction", publish: "2011", edition: "2014", writer: "Andy Weir"}
  ];

  
//  console.log(books.length); 


 const userBooks = books.filter((item) => item.genre== "Fiction" )
//  console.log(userBooks);

 const userBooksEdition = books.filter((item) => item.edition== "2014" )
//  console.log(userBooksEdition);

 const userBookPub = books.filter((el) => el.publish <= "2005")
//  console.log(userBookPub);
//  console.log(userBookPub.length);


 const userBookG = books.filter((el) => {
    return el.genre == "romance"
 })
//  console.log(userBookG);
//  console.log(userBookG.length);


const BookEandG  = books.filter((bk) => bk.genere =="history" && bk.edition >= "2000")  

console.log(BookEandG)
