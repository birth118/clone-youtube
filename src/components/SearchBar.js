import React, { useState } from 'react'


const SearchBar = ({ onSearchSubmit }) => {

  const [term, setTerm] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()  // To prevent page refresh  
    onSearchSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit} >
        <div className="field">
          <label>Search for a Youtube</label>
          <input type="text" name="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div >
  )

}

export default SearchBar
