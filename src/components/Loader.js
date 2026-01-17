import React from 'react'

const Loader = ({ loading }) => {
  if (!loading) return null

  return (
    <div className="loader">
      <div className="loader-signal"></div>
    </div>
  )
}

export default Loader
