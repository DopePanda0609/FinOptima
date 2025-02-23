import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '36px',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px'
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#64748b',
    marginBottom: '20px'
  },
  link: {
    display: 'block',
    color: '#3498db',
    textDecoration: 'none',
    fontSize: '18px',
    marginBottom: '10px'
  }
};

const LearnMore = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Learn More About FinOptima</h1>
      <p style={styles.text}>
        FinOptima is a comprehensive financial management platform designed to help users take control of their expenses,
        budget effectively, and gain valuable financial insights through AI-powered analysis. 
        Our mission is to empower users with the tools they need to achieve financial stability and freedom.
      </p>
      <p style={styles.text}>
        Future advancements in AI will further enhance our platform, bringing features like predictive budgeting,
        personalized investment advice, and automated financial tracking. Our AI chatbot will assist users in making
        informed financial decisions, providing real-time recommendations based on spending patterns.
      </p>
      <h2 style={styles.title}>Meet the Developers</h2>
      <p style={styles.text}>
        FinOptima is developed by students from SRM University: 
      </p>
      <ul>
        <li style={styles.text}><strong>Kevin Joshua</strong> - MERN Stack Developer</li>
        <li style={styles.text}><strong>Utkrisht Parmar</strong> - Django & React Developer</li>
        <li style={styles.text}><strong>Jayant Chatterji</strong> - Django & React Developer</li>
      </ul>
      <h2 style={styles.title}>Connect With Us</h2>
      <a style={styles.link} href="https://www.linkedin.com/in/kevin-joshua-main/" target="_blank" rel="noopener noreferrer">Kevin Joshua LinkedIn</a>
      <a style={styles.link} href="https://github.com/kevin-joshua/" target="_blank" rel="noopener noreferrer">Kevin Joshua GitHub</a>
      <a style={styles.link} href="https://www.linkedin.com/in/utkrisht-parmar-59977928a" target="_blank" rel="noopener noreferrer">Utkrisht Parmar LinkedIn</a>
      <a style={styles.link} href="http://www.github.com/utkrisht2004" target="_blank" rel="noopener noreferrer">Utkrisht Parmar GitHub</a>
      <a style={styles.link} href="https://github.com/DopePanda0609" target="_blank" rel="noopener noreferrer">Jayant Chatterji GitHub</a>
      <a style={styles.link} href="https://www.linkedin.com/in/jayant-chatterji-360798287/" target="_blank" rel="noopener noreferrer">Jayant Chatterji LinkedIn</a>
    </div>
  );
};

export default LearnMore;
