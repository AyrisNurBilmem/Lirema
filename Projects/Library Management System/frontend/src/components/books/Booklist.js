import React from "react"
import {Link} from "react-router-dom";

function Booklist({books}){
    return(
        <div>
            {
                books.map((item,index) =>{
                   return(
                       
                 <div key={index} className = "grid-container">
                   <div >
                   <Link to ={`/home/${item.id}`}>
                    <img 
                    className="img-class"
                    alt={`${item.volumeInfo.title}`}
                    src={`http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                    />
                   </Link>
                   <div className = "text-div">
                  <h3 className= "book-text" >{item.volumeInfo.title}</h3>
                  <p className= "book-text author"> {item.volumeInfo.authors}</p>
                </div>
              </div>
              
            </div> )
            })
            }
        </div>
    )
}


export default Booklist;