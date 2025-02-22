import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ExpenseTracker from "./components/ExpenseTracker";
import LearnMore from "./components/LearnMore";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tracker" element={<ExpenseTracker />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </Router>
  );
};

export default App;

