import React from 'react'

const TextBox = ({summary, loading, error}) => {
  if (!error && !summary) return null;
  
  return (
    <div className='text-box-container'>
      {error && <p className='error-message'>{error}</p>}
      {summary && <div className='summary-container'><p className='summary-text'>{summary}</p></div>}
    </div>
  )
}

export default TextBox