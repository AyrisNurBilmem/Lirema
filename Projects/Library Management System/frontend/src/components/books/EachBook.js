import React, {useEffect, useState} from "react"
import axios from "axios"
import Sidebar from "../sidebar/Sidebar"
import "./eachbook.css"
import * as BsIcons from "react-icons/bs"
import * as FiIcons from "react-icons/fi"
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import * as VscIcons from "react-icons/vsc"
import {IconContext} from "react-icons"


function EachBook({match}){
    const [books, setBook]=useState({});
    const [img, setImage] = useState({});
    const [textSnippet, setTextsnippet] = useState({});
    const fetchBooks = async ()=>{
        const result = await axios.get(
         `${"https://www.googleapis.com/books/v1/volumes"}?q=${match.params.id}`
        );
    
        setBook(result.data.items[0].volumeInfo);
        setImage(result.data.items[0].volumeInfo.imageLinks)
        setTextsnippet(result.data.items[0].searchInfo);
        console.log(result.data.items[0].volumeInfo);
        console.log(result.data)
    }

    useEffect(() => {
        fetchBooks();
        console.log(match);
    }, [])
    
    

    return(
        <div>
           <Sidebar />
           
           <img className = "eachbook-img" src = {(img.thumbnail != null) ? img.thumbnail : "No Img Found for this Book"}/>
           <div className ="main-div">
                <h1 className = "main-title">{(books.title != null) ? books.title : "No Title for This Book" }</h1> 
                <hr className ="line"/>
                <h2 className = "main-author">{(books.authors != null) ? books.authors : "No Author for This Book"}</h2>
           </div>
           <div className = "sub-div">
           <div className ="left-eachbook">
                <p className = "left-eachbook-p-top">Description</p>
                <p className ="left-eachbook-p-bottom">{(books.description != null) ? books.description : "No description for this book"}</p>
            </div>
            <div className ="right-eachbook">
                <div className ="right-small">
                    <p className ="right-eachbook-tp">Published Date</p>
                    <BsIcons.BsCalendar size ={30}/>
                    <p className ="right-eachbook-tp">{(books.pubishedDate != null) ?  books.pubishedDate : "Not Mentioned"} </p>
                </div>
                <div className ="right-small">
                    <p className ="right-eachbook-tp">Publisher</p>
                    <FaIcons.FaBuilding size ={30}/>
                    <p className ="right-eachbook-tp">{(books.publisher != null) ?  books.publisher : "Not Mentioned"}</p>
                </div>
                <div className ="right-small">
                    <p className ="right-eachbook-tp">Language</p>
                    <MdIcons.MdTranslate size ={30}/>
                    <p className ="right-eachbook-tp">{(books.language === "en") ? "English" : books.language}</p>
                </div>
                <div className ="right-small" >
                    <p className ="right-eachbook-tp">Page Count</p>
                    <FiIcons.FiBookOpen size ={30}/>
                    <p className ="right-eachbook-tp" >{(books.pageCount != null) ? books.pageCount : "Not Metioned"}</p>
                </div>
                <div className ="right-small">
                    <p className ="right-eachbook-tp">Category</p>
                   <VscIcons.VscLibrary size ={30}/>
                    <p className ="right-eachbook-tp"> {(books.categories != null) ? books.categories : "Not Mentioned"}</p>
                </div>
                <div className ="right-small">
                    <p className ="right-eachbook-tp">Rating</p>
                    <FiIcons.FiStar size ={30}/>
                    <p className ="right-eachbook-tp"> {(books.averageRating != null) ? books.averageRating : "Not Mentioned"}</p>
                </div>
                </div>
              </div>
            
        </div>
    )
}

export default EachBook;