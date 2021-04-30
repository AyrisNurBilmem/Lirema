import React from "react";

function Popup({selected, closePopup}){

    return (
        <div>
          <img 
                alt={`${selected.volumeInfo.title}`}
                src={`http://books.google.com/books/content?id=${selected.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
            <h3 >{selected.volumeInfo.title}</h3>
            <p > {selected.volumeInfo.authors}</p>
            <p>{selected.volumeInfo.categories}</p>
            <p>{selected.volumeInfo.description}</p>
            <button onClick ={closePopup}>Close</button>
        </div>
    )
}


export default Popup;