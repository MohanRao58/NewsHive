# NewsHive 📰

**NewsHive** is a React-based web application that provides users with the latest news across various categories like Business, Entertainment, Sports, Technology, and more. It uses the News API to fetch and display top headlines with an infinite scrolling feature.

---

## Features

- **Infinite Scroll:** Load news articles as you scroll without refreshing the page.
- **Category Filtering:** Navigate through various news categories using a responsive navigation bar.
- **Dynamic Titles:** Page titles dynamically update based on the selected category.
- **User-Friendly Design:** Simple and elegant UI with Bootstrap integration.
- **Real-Time Updates:** Fetch news dynamically using the News API.

---

## Components Overview

### 1. **NavBar.js**
- Renders the navigation bar with links to various news categories.
- Uses `react-router-dom` for seamless navigation.

### 2. **News.js**
- Fetches and displays news articles from the News API.
- Implements infinite scrolling using `react-infinite-scroll-component`.
- Dynamically updates the page title based on the category.
- Supports props for country, category, and page size.

### 3. **NewsItem.js**
- Renders individual news articles with the following details:
  - Title
  - Description
  - Source badge
  - Author
  - Published date
  - Link to the full article

### 4. **Spinner.js**
- Displays a loading spinner while news articles are being fetched.

---

## Tech Stack

- **Frontend:**
  - React
  - React Router DOM
  - Bootstrap
- **API:**
  - [News API](https://newsapi.org/)
- **Additional Libraries:**
  - PropTypes for type checking.
  - `react-infinite-scroll-component` for infinite scrolling functionality.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohanrao58/newshive.git
   cd newshive

2. Install dependencies:
npm install

3. Obtain an API key from News API and add it to your environment.

4. Run the development server:
npm start

5. Open the app in your browser:
http://localhost:3000

## Configuration
To configure the app, pass the following props to the News component:
![image alt](https://github.com/MohanRao58/NewsHive/blob/806cd09f6d0b347fbfb67230847219cbb41ec611/Configure.PNG)

## Folder Structure
src
├── components
│   ├── NavBar.js
│   ├── News.js
│   ├── NewsItem.js
│   ├── Spinner.js
├── App.js
├── index.js
├── App.css
└── index.css

## Screenshots
![image alt](https://github.com/MohanRao58/NewsHive/blob/806cd09f6d0b347fbfb67230847219cbb41ec611/screenshot.PNG)

## How to Use
1. Navigate through the categories using the navigation bar.
2. Scroll down to load more news articles.
3. Click on "Read More" to view the full article in a new tab.
