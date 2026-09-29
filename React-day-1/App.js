// import React from "react";
// import ReactDom from "react-dom/client";

// const App = () => {
//     return <h1>This heading was made fom React</h1>;
// };

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />);


import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container" >
      <Header />
      <main>
        <p>Welcome to the production-ready React app!</p>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);