# URL Summary Generator

A modern React web application that uses AI to generate concise summaries of website content. Simply enter a URL, and the application will provide you with a 3-5 sentence summary powered by OpenAI's GPT-4o-mini model.

## Features

-  **URL Summarization**: Generate quick summaries of any website URL
-  **AI-Powered**: Uses OpenAI's GPT-4o-mini for intelligent content summarization
-  **Real-time Processing**: Instant feedback with loading states
-  **Modern UI**: Clean, responsive design with smooth animations
-  **Error Handling**: Comprehensive error handling for invalid URLs and API errors
-  **Loading States**: Visual feedback during API requests

## How AI is Used

This project leverages **OpenAI's GPT-4o-mini model** through the OpenAI Chat Completions API to generate summaries:

1. **API Integration**: The application makes POST requests to `https://api.openai.com/v1/chat/completions`
2. **AI Model**: Uses `gpt-4o-mini` - a cost-effective and efficient model perfect for summarization tasks
3. **Prompt Engineering**: The AI receives a structured prompt asking it to "Summarize the content from this URL in 3-5 sentences"
4. **Response Processing**: The AI-generated summary is extracted from the API response and displayed to the user
5. **Token Limit**: Configured with a `max_tokens` of 150 to ensure concise, focused summaries

### AI Flow
```
User Input (URL) → Validation → OpenAI API Request → GPT-4o-mini Processing → Summary Display
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** (v6 or higher) or **yarn**
- **OpenAI API Key** ([Get one here](https://platform.openai.com/api-keys))

## Setup Steps

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd urlsummary
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 19.2.3
- React Router DOM 7.12.0
- Axios 1.13.2
- React Scripts 5.0.1

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project:

```bash
# Windows
type nul > .env

# macOS/Linux
touch .env
```

Add your OpenAI API key to the `.env` file:

```env
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

**Important Notes:**
- Replace `your_openai_api_key_here` with your actual OpenAI API key
- The `.env` file should be in the root directory (same level as `package.json`)
- Never commit the `.env` file to version control (it should already be in `.gitignore`)
- The `REACT_APP_` prefix is required for Create React App to expose the variable

### 4. Start the Development Server

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

The page will automatically reload when you make changes to the code.

### 5. Build for Production (Optional)

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Project Structure

```
urlsummary/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src/
│   ├── api/
│   │   └── ChatApi.js          # OpenAI API integration
│   ├── components/
│   │   ├── SearchBar.js        # URL input form component
│   │   ├── TextBox.js          # Summary display component
│   │   └── Loader.js           # Loading spinner component
│   ├── hooks/
│   │   └── ChatHook.js         # Custom hook for API logic and state management
│   ├── pages/
│   │   └── Home.js             # Main page component
│   ├── styles/
│   │   └── style.css           # Application styles
│   ├── App.js                  # Root component with routing
│   └── index.js                # Application entry point
├── .env                        # Environment variables (create this)
├── package.json
└── README.md
```

## Usage

1. **Start the Application**: Run `npm start` and navigate to `http://localhost:3000`

2. **Enter a URL**: In the search bar, enter any valid website URL (e.g., `https://example.com`)

3. **Get Summary**: Click the "Search" button to generate a summary

4. **View Results**: The AI-generated summary will appear below the search form in a styled container

5. **Error Handling**: If an invalid URL is entered or an error occurs, an error message will be displayed

## Technologies Used

- **React 19.2.3**: Frontend library for building user interfaces
- **React Router DOM 7.12.0**: Client-side routing
- **Axios 1.13.2**: HTTP client for API requests
- **OpenAI GPT-4o-mini**: AI model for content summarization
- **CSS3**: Modern styling with flexbox and animations

## API Configuration

The application uses OpenAI's Chat Completions API with the following configuration:

- **Endpoint**: `https://api.openai.com/v1/chat/completions`
- **Model**: `gpt-4o-mini`
- **Max Tokens**: 150
- **Authentication**: Bearer token via `REACT_APP_OPENAI_API_KEY`

## Troubleshooting

### Common Issues

1. **"Please enter a valid URL" Error**
   - Ensure the URL includes the protocol (http:// or https://)
   - Check that the URL is properly formatted

2. **"Something went wrong" Error**
   - Verify your OpenAI API key is correctly set in the `.env` file
   - Ensure you have available API credits
   - Check your internet connection

3. **Environment Variable Not Working**
   - Restart the development server after creating/modifying `.env`
   - Ensure the variable name starts with `REACT_APP_`
   - Check that `.env` is in the root directory

4. **Port Already in Use**
   - The default port is 3000. If occupied, React will prompt to use another port
   - Alternatively, set `PORT=3001` in your `.env` file

## Security Notes

- **API Key Security**: Never commit your `.env` file or expose your API key in client-side code
- **CORS**: This application makes direct API calls from the browser. For production, consider using a backend proxy
- **Rate Limiting**: Be aware of OpenAI's rate limits to avoid excessive API usage

## Future Enhancements

Potential improvements for the project:

- Backend proxy for API calls (enhanced security)
- URL content fetching and parsing before AI summarization
- Multiple summary length options
- History of previous summaries
- Export summaries as text files
- Support for multiple languages

## License

This project is private and not licensed for distribution.

## Contributing

This is a private project. Contributions are not currently accepted.

---

**Note**: Make sure you have a valid OpenAI API key with available credits to use this application. API usage will incur costs based on OpenAI's pricing structure.
