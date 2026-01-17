import { useState } from 'react'
import  ChatApi  from '../api/ChatApi'


const ChatHook = () => {
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [summary, setSummary] = useState('')
  
    const fetchSummary = async (e) => {
      e.preventDefault()
      
      if (!url.trim()) {
        setError('Please enter a URL')
        return
      }
  
      try{
        new URL(url)
      } catch {
        setError('Please enter a valid URL')
        return
      }
  
      setLoading(true)
      setError('')
      setSummary('')

      try{
        const response = await ChatApi(url)
        setSummary(response.data.choices[0].message.content);
        // console.log(response);

      }catch{
        setError('Something went wrong')
      }finally{
        setLoading(false)
      }
    }

  return {
    url,
    setUrl,
    error,
    loading,
    summary,
    fetchSummary
  };
};

export default ChatHook