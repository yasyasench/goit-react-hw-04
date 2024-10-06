import React from 'react'
import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
        className={css.input}
        type="text"
        placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
    </header>

  )
}

export default SearchBar