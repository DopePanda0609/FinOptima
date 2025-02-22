import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import ExpenseTracker from "./components/ExpenseTracker";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracker" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
