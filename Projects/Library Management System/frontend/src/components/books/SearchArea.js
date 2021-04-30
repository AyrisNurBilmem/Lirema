import React from "react"
import "./books.css"
import * as FiIcons from "react-icons/fi"
import { IconContext } from "react-icons/lib";

function SearchArea(props){
    return(
        
        <div className = "search-div">
          <form onSubmit = {props.submitHandler}>
              <input className= "search-box" type= "search" placeholder ="book title, author, etc.." onChange={props.handleInput} value= {props.input}></input>
              <button className = "search-button" type="submit"><FiIcons.FiSearch size="21px" /></button>
          </form>

        </div>
    )
}

export default SearchArea;