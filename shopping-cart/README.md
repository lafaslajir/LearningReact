<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Shopping Cart App using Fake Store API</title>
</head>
<body>

  <h1>React Shopping Cart App</h1>

  <p>This project is a React-based shopping cart application that utilizes Redux for state management and interacts with the FakeStoreAPI to fetch product data.</p>

  <h2>File Structure</h2>
  <pre>
  shopping-cart/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   ├── Header.js         <!-- Header component -->
  │   │   ├── Footer.js         <!-- Footer component -->
  │   ├── pages/
  │   │   ├── HomePage.js       <!-- Home page component -->
  │   │   ├── CartPage.js       <!-- Cart page component -->
  │   │   ├── ProductPage.js    <!-- Product page component -->
  │   ├── actions/
  │   │   ├── productActions.js <!-- Redux actions for products -->
  │   │   └── cartActions.js    <!-- Redux actions for cart -->
  │   ├── reducers/
  │   │   ├── index.js          <!-- Root reducer combining all reducers -->
  │   │   ├── productReducer.js <!-- Reducer for products -->
  │   │   └── cartReducer.js    <!-- Reducer for cart -->
  │   ├── store/
  │   │   └── store.js          <!-- Redux store configuration -->
  │   ├── App.css               <!-- Global CSS styles -->
  │   ├── App.js                <!-- Root component with routing -->
  │   └── index.js              <!-- Entry point of the application -->
  └── package.json
  </pre>

  <h2>Libraries and Tools Used</h2>
  <ul>
    <li><a href="https://reactjs.org/">React</a> - JavaScript library for building user interfaces</li>
    <li><a href="https://redux.js.org/">Redux</a> - State management library for JavaScript applications</li>
    <li><a href="https://reactrouter.com/">React Router</a> - Declarative routing for React applications</li>
    <li><a href="https://github.com/reduxjs/redux-thunk">Redux Thunk</a> - Middleware for Redux to handle asynchronous logic</li>
    <li><a href="https://github.com/reduxjs/redux-devtools-extension">Redux DevTools Extension</a> - Chrome extension for debugging Redux applications</li>
    <li><a href="https://fakestoreapi.com/">FakeStoreAPI</a> - REST API for mock e-commerce data</li>
  </ul>

  <h2>Getting Started</h2>
  <p>To get started with the project, follow these steps:</p>

  <ol>
    <li>Clone this repository.</li>
    <li>Install dependencies with <code>npm install</code>.</li>
    <li>Run the development server with <code>npm start</code>.</li>
    <li>Open <a href="http://localhost:3000">http://localhost:3000</a> to view the app in your browser.</li>
  </ol>

  <h2>Available Scripts</h2>
  <p>In the project directory, you can run:</p>

  <h3><code>npm start</code></h3>
  <p>Runs the app in the development mode.</p>

  <h3><code>npm test</code></h3>
  <p>Launches the test runner in the interactive watch mode.</p>

  <h3><code>npm run build</code></h3>
  <p>Builds the app for production to the <code>build</code> folder.</p>

  <h2>Learn More</h2>
  <p>You can learn more about:</p>
  <ul>
    <li>Creating React App - <a href="https://facebook.github.io/create-react-app/docs/getting-started">Create React App Documentation</a></li>
    <li>React - <a href="https://reactjs.org/docs/getting-started.html">React Documentation</a></li>
    <li>Redux - <a href="https://redux.js.org/introduction/getting-started">Redux Documentation</a></li>
  </ul>

  <h2>Deployment</h2>
  <p>To deploy this project, follow the deployment section in the <a href="https://facebook.github.io/create-react-app/docs/deployment">Create React App documentation</a>.</p>

</body>
</html>
