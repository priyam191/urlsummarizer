import React from 'react'

const SearchBar = ({ url, setUrl, fetchSummary, loading , error}) => {
  return (
    <form className='main-container' onSubmit={fetchSummary}>
      <label>Website URL</label>
      <input
        type='text'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter website URL'
        disabled={loading}
      />

      <button type='submit' disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchBar