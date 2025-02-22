import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '40px',
    maxWidth: '900px',
    color: '#333'
  },
  header: {
    fontSize: '36px',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px'
  },
  section: {
    marginBottom: '40px'
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f8fafc'
  }
};

const LearnMore = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Learn More About FinOptima</h1>
      
      <section style={styles.section}>
        <h2>What is FinOptima?</h2>
        <p style={styles.paragraph}>
          FinOptima is a smart financial tracking and optimization tool designed to help users manage their expenses effectively. With intuitive tracking, AI-powered insights, and budget planning features, FinOptima provides a seamless experience for individuals seeking financial stability.
        </p>
      </section>

      <section style={styles.section}>
        <h2>How It Helps You</h2>
        <p style={styles.paragraph}>
          FinOptima provides real-time tracking of expenses, categorizes spending habits, and offers personalized insights based on AI analysis. It assists users in creating budgets, setting financial goals, and optimizing their savings strategies.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Advanced AI Features</h2>
        <p style={styles.paragraph}>
          Our AI-driven chatbot acts as a virtual financial advisor, answering your queries related to budgeting, savings, and investment planning. It leverages machine learning to predict spending trends and offer proactive financial suggestions.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2>About the Developers</h2>
        <p style={styles.paragraph}>
          FinOptima is developed by passionate students from SRM University: 
          <strong>Jayant Chatterji, Utkrisht Parmar, and Kevin Joshua.</strong>
        </p>
        <p style={styles.paragraph}>
          - Kevin is an expert in MERN stack development, specializing in building dynamic full-stack web applications.
        </p>
        <p style={styles.paragraph}>
          - Jayant and Utkrisht excel in Django development and React, creating scalable and efficient backend solutions with seamless frontend integration.
        </p>
      </section>
      
      <footer style={styles.footer}>
        <p>© 2025 FinOptima. Developed by Jayant Chatterji, Utkrisht Parmar, and Kevin Joshua.</p>
      </footer>
    </div>
  );
};

export default LearnMore;
