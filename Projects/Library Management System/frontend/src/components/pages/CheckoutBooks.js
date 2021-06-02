import React, {useState, useEffect} from "react"
import axios from "axios"
import "../books/books.css"

const CheckoutBooks = ({id}) => {
    const [books, setBooks] = useState({});
    const [bookID, setBookID] = useState({});

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async ()=>{
        const result = await axios.get(
         `${"https://www.googleapis.com/books/v1/volumes"}?q=${id}}`
        );
        setBooks(result.data.items[0].volumeInfo);
        setBookID(result.data.items[0]);
        console.log(result.data.items[0]);
        
    }
    return (
        <div className = "grid-container">
             <img 
                    className="img-class"
                    alt="book-img"
                    src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                    />
            <div className ="text-div">
            <p className ="book-text"><strong>{books && books.title}</strong></p>
            <p className = "book-text author"><strong>{(books.authors != null) ? books.authors : "No Author for This Book"}</strong></p>
            <p className = "overdue">Overdue Fine: None</p>
            <p className = "bookID"><strong>Book ID:</strong> {bookID && bookID.id}</p>
            </div>
        </div>
    )
}

export default CheckoutBooks;
