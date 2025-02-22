import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [prediction, setPrediction] = useState(null);

  const addExpense = () => {
    if (amount && category) {
      const newExpense = { amount: parseFloat(amount), category, date: new Date().toLocaleDateString() };
      setExpenses([...expenses, newExpense]);
      setAmount("");
      setCategory("");
    }
  };

  const fetchPrediction = async () => {
    const response = await fetch(`/api/predict?amount=${amount}`);
    const data = await response.json();
    setPrediction(data.predicted_expense);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Expense Tracker</h1>
      
      <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "16px" }}>
        <input 
          type="text" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          style={{ width: "100%", padding: "8px", marginBottom: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <button onClick={addExpense} style={{ padding: "8px 12px", marginRight: "8px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Add Expense
        </button>
        <button onClick={fetchPrediction} style={{ padding: "8px 12px", backgroundColor: "#6c757d", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Predict Spending
        </button>
      </div>

      {prediction && <p style={{ marginTop: "16px", fontWeight: "bold" }}>Predicted Expense: ${prediction.toFixed(2)}</p>}
      
      <div style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Expense Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={expenses}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
