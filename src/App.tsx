import React from "react";
import Router from "./Router";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";

const App: React.FC = () => {
  return (
    <main className="c-main">
      <Router />
    </main>
  );
};

export default App;
