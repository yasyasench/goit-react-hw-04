import React from 'react'
import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({handleChangePage}) => {
  return (
   <button className={css.loadMoreButton} onClick={handleChangePage}>Load more</button>
  )
}

export default LoadMoreBtn