# 🚀 React Learning Series

This repository documents my daily journey of learning **React**, starting from the basics and moving towards advanced concepts.
Bundling is done with **Parcel** for an efficient developer experience.

---

## 📅 Day 1 - Setting Up React Environment

**What I learned:**
- Installed **Node.js** and **npm**
- Created a project folder and initialized it
- Installed **Parcel** bundler
- Rendered my first React element using `React.createElement`

**Key Code:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

Run Command:
npx parcel index.html


📅 Day 2 - Parcel Features & Multiple Element:

What I learned:

Explored Parcel features:

HMR (Hot Module Replacement)

File watcher (C++)

Bundling & Minification

Code Cleaning (removing console.log)

Development & Production builds

Image Optimization

Caching, Compression

Tree shaking

Transitive dependencies handling

Rendered multiple headings inside a single container

Key Code:

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", { id: "title" }, "heading");
const heading1 = React.createElement("h1", { id: "title" }, "heading1");

const container = React.createElement("div", { id: "container" }, [heading, heading1]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);


📅 Day 3 - JSX & Functional Components

What I learned:

The difference between React Elements and JSX

JSX is syntactic sugar for React.createElement and is transpiled by Babel

How to create nested elements using React.createElement

Creating React Elements using JSX syntax

Understanding functional components (both with return and without)

Embedding expressions, variables, and other components inside JSX

Key Code:

import React from "react";
import ReactDOM from "react-dom/client";

// React Element (without JSX)
const heading = React.createElement(
"h1",
{ id: "heading" },
"Hello Welcome, to world of React"
);

// Nested elements using React.createElement
const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement(
"div",
{ id: "child" },
[
React.createElement("h1", {}, "Im a h1 tag"),
React.createElement("h2", {}, "Im a h2 tag")
]
)
);

// JSX React Element
const jsxHeading = (
<h1 className="jsxheading" tabIndex="5">
React using JSX
</h1>
);

// Functional Component (with return)
const HeadingComponent = () => {
return <h1>React Functional Component using curly brackets</h1>;
};

// Functional Component (without return)
const HeadingComponent2 = () => (
<div>
{500 + 200} {/* Embedded expression */}
{jsxHeading} {/* Using JSX element */}
<HeadingComponent /> {/* Using another component */}
<h1>React Functional Component using ()</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
Key Takeaways:

React.createElement returns a JavaScript object (not an HTML element).

JSX makes code cleaner and more readable but still compiles down to React.createElement.

Functional components are just functions that return JSX or React elements.

You can nest components, embed JavaScript expressions, and reuse code easily.

📂 Project Structure

project-folder/
│
├── Day01/
├── Day02/
├── Day03/
├── index.css
├── package.json
└── node_modules/
🛠 Tech Stack
React 18

ReactDOM

Parcel Bundler

Babel (via Parcel for JSX transpilation)

▶ How to Run
Install dependencies
npm install

Start development server
npx parcel index.html

Production build
npx parcel build index.html

📌 Progress Tracker
Day 1 - Environment Setup, First React Element

Day 2 - Parcel Features, Multiple Elements Rendering

Day 3 - JSX, React.createElement, Functional Components

React Series – Day 04 & Day 05
This repository contains my learning notes and project structure for Days 04 and 05 of my React development series. Below you'll find a detailed breakdown of the folder structure, the functionality implemented on each day, and instructions for getting started.

📁 Folder Structure

REACT/
│
├── Day01/
├── Day02/
├── Day03/
├── Day04/
│ ├── index.css
│ ├── index.html
│ └── index.js
├── Day05/
│ ├── src/
│ ├── components/
│ │ ├── Body.js
│ │ ├── Header.js
│ │ ├── RestaurantCard.js
│ │ └── utils/
│ │ ├── constants.js
│ │ └── mockData.js
│ ├── index.css
│ ├── index.html
│ └── index.js
├── Day06/
├── Day07/
├── dist/
├── node_modules/
└── .parcel-cache/

## 📅 Day 04: Basic Restaurant Listing App

Goal: Build a static food ordering app layout with React components.
Components built:

Header: Logo and navigation bar.

Body: Search bar and a container displaying restaurant cards.

RestaurantCard: Shows restaurant's name, cuisine, rating, price, and delivery time.

Features:
Hardcoded restaurant data (no dynamic state).
Static map to render multiple Restaurant Cards.
Basic CSS for layout and cards.


## 📅 Day 05: State, Filtering & Utilities

Goal: Improve component structure and add interactivity.

Major Improvements:
Project restructured – components moved to src/components/.
Use of utility files:
constants.js: Holds image URLs.
mockData.js: Restaurant list.
State management with React's useState.
Top Rated Filter: Button filters restaurants where avgRating > 4.
Improved component reusability (RestaurantCard), props passing.
Used constants and dynamic image URLs.

Code Examples:
RestaurantCard gets resData as prop and displays values.
Filter button uses setListOfRestaurants to show only top-rated places.

How To Run
Install dependencies:
Navigate to the project folder and run:
npm install

Start local development server:
npm start

or if using Parcel:
parcel index.html


Component folder structure:
![Day05 Component structure]
Rendering Top Rated Restaurants:
![Top Rated Restaurants]

**Key Learnings
How to break UI into logical React components.
Using state and props to control UI dynamically.
Creating modular, maintainable code with utility files.
Basic CSS-in-JS and how to structure project folders for scale.
Implementing filtering logic with React's state.

Next Steps
Add routing (react-router).
Fetch restaurant data from an API.
Add search and more interactivity.
Unit testing for components.
Feel free to fork and clone!
If you have suggestions or questions, open an issue or reach out.

Author:
Priya Saha

