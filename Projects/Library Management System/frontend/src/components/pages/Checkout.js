import React, {useState, useEffect} from "react"
import Sidebar from '../sidebar/Sidebar'
import axios from "axios"
import "./pages.css"
import CheckoutBooks from "./CheckoutBooks"
import SearchID from "./SearchID"

function Checkout() {
    const [booklist, setBooklist] = useState([]);
    const [input, setInput] = useState("");
   

    const handleInput = (event) =>{
        setInput(event.target.value);
    }


   const getBooksFromLocalBackend =  async () =>{
       const result = await axios.get("http://localhost:3001/getBooks");
       console.log(result.data);
       setBooklist(result.data);
   }

   const deleteBook = async () =>{
    await axios.post("http://localhost:3001/checkout", {book:input,});

       }
    

   const submitHandler =(event)=>{
    window.location.reload();
    deleteBook();
}

   useEffect(() =>{
       getBooksFromLocalBackend();
      
   }, []);
    return (
        
        <div>
        <Sidebar />
        <h1 className="home-h1">Checkout Books</h1>
        <SearchID submitHandler = {submitHandler} handleInput={handleInput} input={input}/>
       {booklist.map((item,index) =>{
           return (
              <CheckoutBooks key = {index} id ={item}/>
               )
       })}
   </div>
    )
}

export default Checkout
