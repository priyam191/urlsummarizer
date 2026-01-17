# Webpage Summarizer

A small React application that allows a user to enter a public website URL, fetches the page content, sends it to an AI model, and displays a short summary.

## Features

- Input any public website URL
- Basic URL validation using the browser `URL` API
- Send extracted text to OpenAI API
- Display a short AI-generated summary
- Loading state and basic error handling

---

## Tech Stack

- **React** (Create React App)
- **Axios** for HTTP requests
- **OpenAI API**

---

## How It Works

1. User enters a website URL
2. URL is validated using `new URL()`
3. The webpage is fetched via a public CORS proxy
5. Visible text is extracted and trimmed
6. Text is sent to OpenAI for summarization
7. Summary is displayed in the UI

---
