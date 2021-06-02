import React, {useState, useEffect} from "react"
import axios from "axios"
import Sidebar from "../sidebar/Sidebar"
import ViewEachDeadline from "./ViewEachDeadline"
import "./pages.css"

function Deadlines(){
    const [booklist, setBooklist] = useState([]);


   const getBooksFromLocalBackend =  async () =>{
       const result = await axios.get("http://localhost:3001/getBooks");
       console.log(result.data);
       setBooklist(result.data);
   }


   useEffect(() =>{
       getBooksFromLocalBackend();
      
   }, []);
    return(
        <div>
        <Sidebar />
        <h1 className="home-h1">Deadlines</h1>
       {booklist.map((item,index) =>{
           return (
              <ViewEachDeadline key = {index} id ={item}/>
               )
       })}
   </div>
    )
}

export default Deadlines;