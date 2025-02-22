import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const styles = {
  container: {
    padding: "30px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif"
  },
  header: {
    color: "#2c3e50",
    marginBottom: "25px"
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px"
  },
  select: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: "#fff"
  },
  button: {
    padding: "12px 20px",
    margin: "0 10px 10px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s"
  },
  primaryButton: {
    backgroundColor: "#3498db",
    color: "#fff"
  },
  secondaryButton: {
    backgroundColor: "#95a5a6",
    color: "#fff"
  },
  error: {
    color: "#e74c3c",
    marginBottom: "10px"
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px"
  },
  statCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  chartContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }
};

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");

  const categories = [
    "Food & Dining",
    "Transportation",
    "Shopping",
    "Entertainment",
    "Bills & Utilities",
    "Other"
  ];

  const validateAmount = (value) => {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue > 0;
  };

  const addExpense = () => {
    setError("");

    if (!amount || !category) {
      setError("Please fill in both amount and category");
      return;
    }

    if (!validateAmount(amount)) {
      setError("Please enter a valid amount");
      return;
    }

    const newExpense = {
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
      id: Date.now()
    };

    setExpenses(prev => [...prev, newExpense]);
    setAmount("");
    setCategory("");
  };

  const fetchPrediction = async () => {
    try {
      const response = await fetch(`/api/predict?amount=${amount}`);
      const data = await response.json();
      setPrediction(data.predicted_expense);
    } catch (err) {
      setError("Failed to fetch prediction");
    }
  };

  const getTotalExpenses = () => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2);
  };

  const getCategoryTotal = (categoryName) => {
    return expenses
      .filter(expense => expense.category === categoryName)
      .reduce((sum, expense) => sum + expense.amount, 0)
      .toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Expense Tracker</h1>

      <div style={styles.inputContainer}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <button 
          onClick={addExpense}
          style={{...styles.button, ...styles.primaryButton}}
        >
          Add Expense
        </button>
        <button 
          onClick={fetchPrediction}
          style={{...styles.button, ...styles.secondaryButton}}
        >
          Predict Spending
        </button>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h3>Total Expenses</h3>
          <p>${getTotalExpenses()}</p>
        </div>
        {prediction && (
          <div style={styles.statCard}>
            <h3>Predicted Expense</h3>
            <p>${prediction.toFixed(2)}</p>
          </div>
        )}
      </div>

      <div style={styles.chartContainer}>
        <h2>Expense Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={expenses}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`$${value}`, "Amount"]}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#3498db" 
              strokeWidth={2}
              dot={{ fill: "#3498db" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartContainer}>
        <h2>Category Breakdown</h2>
        <div style={{ marginTop: "20px" }}>
          {categories.map(cat => (
            <div key={cat} style={{ marginBottom: "10px" }}>
              <strong>{cat}:</strong> ${getCategoryTotal(cat)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;