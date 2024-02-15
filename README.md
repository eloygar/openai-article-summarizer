# OpenAI Article Summarizer

![Logo](./assets/logo.svg)

## Description

OpenAI Article Summarizer is a web application developed with React. Its main function is to extract and summarize articles from the web using the RapidAPI. The application is highly interactive and easy to use, with an intuitive and attractive user interface. It uses Vite for rapid development and efficient application building for deployment, and Tailwind CSS and PostCSS for application design and styling.

## Technologies

<div style="display: flex; justify-content: space-between; margin: 0 auto; max-width: 300px;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40">
    <img src="https://vitejs.dev/logo.svg" width="40">
</div>

## Configuration

To set up the development environment, you'll need to create a `.env` file in the root of the project and add the following environment variable:


```
VITE_RAPID_API_ARTICLE_KEY=your_rapidapi_key

```
Replace `your_rapidapi_key` with your RapidAPI API key.

## Installation

To install the project, follow these steps:

1. Install the dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```
You should now be able to view the application at http://localhost:5173.

## Usage

To use the application, simply enter the URL of an article into the input field and click the ✓ button. The application will extract the content of the article and display a summary.

## Contribución

Contributions are welcome. Please open an issue or a pull request for suggestions or improvements.

## License

This project is licensed under the terms of the MIT license.

---

Created by [eloygar](https://github.com/eloygar).