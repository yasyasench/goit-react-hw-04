import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div>
      <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#000dff96"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
      />
    </div>
  )
}

export default Loader