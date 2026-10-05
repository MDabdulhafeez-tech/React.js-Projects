// PRACTICE 3

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const newElement = React.createElement("h1", null, "New content");

// root.render(newElement);

// PRACTICE 4

// By React.createElement:

// import React from "react";
// import ReactDOM from "react-dom/client";

// const card = React.createElement(
//   "div",
//   { className: "card" },
//   React.createElement("h2", null, "Product Title"),
//   React.createElement("p", null, "Product description here"),
//   React.createElement("button", null, "Buy Now")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(card);

// By JSX

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const card = (
//   <div className="card">
//     <h2>Product Title</h2>
//     <p>Product description here</p>
//     <button>Buy Now</button>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(card);

// PRACTICE 5

// 1. Go to https://babeljs.io/repl
// 2. In the left panel, paste:
// const element = (
// <div className="container">
// <h1>Title</h1>
// <p>Description</p>
// </div>
// );
// 3. Watch the right panel show the React.createElement version
// 4. Try more complex JSX and observe the transformation

// PRACTICE 6

// import React from "react";
// import ReactDOM from "react-dom/client";

// const header = <div className="header">My App</div>

// const input = <input type="text" onClick={handleClick} />

// const card = (
//     <div>
//         <h2>Title</h2>
//         <p>Description</p>
//     </div>
// );

// const button = <button tabIndex={1}>Click</button>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(button);

// PRACTICE 7

// import './modern.js';

// COMPLETE PRACTICE PROJECT 

import React from 'react';
import ReactDOM from 'react-dom/client';

const profileCard = (
  <div className="profile-card">
    <img
      src="https://via.placeholder.com/150"
      alt="Profile"
      className="profile-image"
    />
    <h2 className="profile-name">John Doe</h2>
    <p className="profile-title">Software Developer</p>
    
    <div className="profile-stats">
      <div className="stat">
        <span className="stat-number">1.2K</span>
        <span className="stat-label">Followers</span>
      </div>
      <div className="stat">
        <span className="stat-number">340</span>
        <span className="stat-label">Following</span>
      </div>
      <div className="stat">
        <span className="stat-number">89</span>
        <span className="stat-label">Posts</span>
      </div>
    </div>
    
    <button className="profile-button">Follow</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(profileCard);