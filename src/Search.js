import React, { useState } from "react";

const Search = (props) => {
    console.log("Props in search data:", props);
      
      const [ text, setText] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        props.searchData(text)
        console.log(props)
        // It will call the component searchData
        setText("")

        
      }
      return (
        <>
          <div className="search-form">
           <form  onSubmit={handleSubmit}>
              <input type="text" placeholder="Search here" value={text} onChange={(e) => setText(e.target.value)}/>
              <br></br>
              <button type="submit"  className="button-search">Search</button>              
           </form>
           {props.showClear && <button type="submit" className="button-search" style={{width: "66vh"}} onClick={props.clearUser}>Clear</button>}
          </div>
        </>
      )
}

export default Search;
