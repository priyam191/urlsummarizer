import ChatHook from '../hooks/ChatHook'
import SearchBar from '../components/SearchBar'
import TextBox from '../components/TextBox'
import Loader from '../components/Loader'

const Home = () => {
    const {url, setUrl, fetchSummary, loading, error, summary} = ChatHook();
  return (
    <div className='main'>
      <div className='content-wrapper'>
        <SearchBar url={url} setUrl={setUrl} fetchSummary={fetchSummary} loading={loading} error={error}/>
        <TextBox summary={summary} loading={loading} error={error}/>
        <Loader loading={loading}/>
      </div>
    </div>
  )
}

export default Home