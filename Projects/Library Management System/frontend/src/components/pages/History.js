import React, {useState, useEffect} from "react"
import axios from "axios"
import Sidebar from "../sidebar/Sidebar"
import ViewHistory from "./ViewHistory"
import "./pages.css"


function History(){
    const [booklist, setBooklist] = useState([]);


    const getBooksFromLocalBackend =  async () =>{
        const result = await axios.get("http://localhost:3001/history");
        console.log(result.data);
        setBooklist(result.data);
    }
 
 
    useEffect(() =>{
        getBooksFromLocalBackend();
       
    }, []);
    return(
        <div>
        <Sidebar />
        <h1 className="home-h1">History</h1>
       {booklist.map((item,index) =>{
           return (
              <ViewHistory key = {index} id ={item}/>
               )
       })}
   </div>
    )
}

export default History;