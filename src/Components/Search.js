import React, { useState, useEffect } from 'react'

const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const handleChange = (e) => {
        setSearchText(e.target.value);
        
    }

    useEffect(() => {
       props.onSearch(searchText);
    }, [searchText]);

  return (
      <div>
          <input type="text" name="" placeholder='Search Country' value={searchText} onChange={handleChange} />
    </div>
  )
}

export default Search