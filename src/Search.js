import React, { useState } from "react";

const Search = (props) => {
      
      const [ text, setText] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length > 0) {
          props.searchData(text)
          // It will call the component searchData
          setText("") 
        }
        else {
          alert("Please enter something.");
        }
      }
      return (
        <>
          <div className="search-form">
           <form  onSubmit={handleSubmit}>
              <input type="search" placeholder="Enter github username" value={text} onChange={(e) => setText(e.target.value)} />
              <br></br>
              <button type="submit"  className="button-search"> <i className="fa fa-search"></i></button>              
           </form>
          </div>
        </>
      )
}

export default Search;
