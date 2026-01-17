import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import './styles/style.css'

const App = () => {
  // const [url, setUrl] = useState('')
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [summary, setSummary] = useState('')

  // const fetchSummary = async (e) => {
  //   e.preventDefault()

  //   if (!url.trim()) {
  //     setError('Please enter a URL')
  //     return
  //   }

  //   try {
  //     new URL(url)
  //   } catch {
  //     setError('Please enter a valid URL')
  //     return
  //   }

  //   setLoading(true)
  //   setError('')
  //   setSummary('')

  //   try {
  //     const response = await axios.post(
  //       'https://api.openai.com/v1/chat/completions',
  //       {
  //         model: 'gpt-4o-mini',
  //         messages: [
  //           {
  //             role: 'user',
  //             content: `Summarize the content from this URL in 3-5 sentences: ${url}`
  //           }
  //         ],
  //         max_tokens: 150,
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  //         },
  //       }
  //     )

  //     setSummary(response.data.choices[0].message.content);
  //     // console.log(response);
  //   } catch (err) {
  //     setError('Something went wrong')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // return (
  //   <div className='main'>
  //     <form className='main-container' onSubmit={fetchSummary}>
  //       <label>Website URL</label>
  //       <input
  //         type='text'
  //         value={url}
  //         onChange={(e) => setUrl(e.target.value)}
  //         placeholder='Enter website URL'
  //       />

  //       <button type='submit'>
  //         {loading ? 'Loading...' : 'Search'}
  //       </button>

  //       {error && <p style={{ color: 'red' }}>{error}</p>}
  //       {summary && <p style={{fontWeight: 'bold'}}>{summary}</p>}
  //     </form>
  //   </div>
  // )
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
