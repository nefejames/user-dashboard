import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import "./Styles/Base.scss";
import "./Styles/Layout.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Sidebar />
        </main>
      </div>
    </Router>
  );
}
