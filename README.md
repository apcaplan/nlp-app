## A Natural Language Processing (NLP) Tool!
This application will give you some useful information about texts, articles, and blog posts. Simply enter the text or a url where the article or blog post is located, and the application will tell you the author's tone and give you some possible hashtags for the text.

The analysis is done through a third party API called Aylien, which interacts with the company's text analysis NLP system. The system applies a variety of complex algorithms to determine various attributes of the text.


## Technologies Used
- HTML
- CSS
- Sass
- vanilla JavaScript
- Webpack
- Service Worker
- Express.js
- Node.js
- Jest

## Setup and Installation - Instructions for Developers:
To use this app locally, clone this repo. Then install dependencies with `npm install` terminal command.

**NB in order to run this app, you will need an Aylien API key. You can get one easily by signing up at https://aylien.com/product/news-api - it's completely free.

Once you have a key, create an .env file in the root directory and add your Aylien API key there. A model (without key) is included in .sample-env for easy reference. Simply add your id and key after the respective equals signs.

## About
I built this app to practice working with Web APIs, asynchronous code, and build tools. The app uses Aylien API to analyze a text or blog post and dynamically updates UI with various attributes of that text, based on user input.
