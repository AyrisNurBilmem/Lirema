import React from "react"
import "../books/books.css"
import * as FiIcons from "react-icons/fi"
import { IconContext } from "react-icons/lib";

function SearchID(props){
    return(
        
        <div className = "search-div">
          <form onSubmit= {props.submitHandler}>
              <input className= "search-box" type= "search" placeholder ="Enter book id" onChange={props.handleInput} value= {props.input}></input>
              <button className = "search-button" type="submit"><FiIcons.FiLogOut size="21px" /></button>
          </form>

        </div>
    )
}

export default SearchID;