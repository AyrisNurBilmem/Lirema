const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let books = ["kotPYEqx7kMC","FzVjBgAAQBAJ"];
let checkedOutBooks = [];

app.get("/getBooks", function(req,res){
    res.send(books);
});

app.post("/viewBooks", function(req, res){
    const {book} = req.body;
    books.push(book);
    console.log(book);

    
})

app.post("/checkout", function(req, res){
    const {book} = req.body;
    books.pop(book)
    console.log(books);

    checkedOutBooks.push(book);
    console.log(checkedOutBooks);

});

app.post("/history", function(req, res){
    console.log("Checked Out Books");
})

app.listen(3001, function(){
    console.log("Server is now running on port 3001.");
});