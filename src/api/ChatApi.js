import axios from 'axios'


const ChatApi = async (url) => {
  return axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'user',
                content: `Summarize the content from this URL in 3-5 sentences: ${url}`
            },
        ],
        max_tokens: 150,
    },
    {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
    }
    
  );
};

export default ChatApi