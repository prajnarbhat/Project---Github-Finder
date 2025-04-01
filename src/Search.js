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
              <input type="text" placeholder="Enter github username" value={text} onChange={(e) => setText(e.target.value)}/>
              <br></br>
              <button type="submit"  className="button-search">Search</button>              
           </form>
           {props.showClear && <button type="submit" className="button-search" style={{width: "66vh"}} onClick={props.clearUser}>Clear</button>}
          </div>
        </>
      )
}

export default Search;
