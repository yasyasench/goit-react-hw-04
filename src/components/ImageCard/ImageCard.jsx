import React from 'react'

const ImageCard = ({ data: { urls, alt_description } }) => {
  return (
    <div>
		  <img src={urls.small} alt={alt_description} />
		</div>
  )
}

export default ImageCard