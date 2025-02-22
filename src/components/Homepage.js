import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    color: '#333'
  },
  hero: {
    backgroundColor: '#f8fafc',
    padding: '80px 20px',
    textAlign: 'center',
    borderBottom: '1px solid #eaeaea'
  },
  heroTitle: {
    fontSize: '48px',
    color: '#2c3e50',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '24px',
    color: '#64748b',
    marginBottom: '40px'
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '0 10px'
  },
  secondaryButton: {
    backgroundColor: '#fff',
    color: '#3498db',
    border: '2px solid #3498db'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3498db',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    gap: '30px'
  },
  navLink: {
    textDecoration: 'none',
    color: '#64748b',
    fontSize: '16px'
  },
  section: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  aboutContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px',
    alignItems: 'center'
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  aboutSection: {
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    padding: '50px 20px',
    marginTop: '50px'
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center'
  }
};

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <a href="/" style={styles.logo}>FinOptima</a>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>FinOptima</h1>
        <p style={styles.subtitle}>Your Personalized Financial Companion</p>
        <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
          Managing finances can be overwhelming, but FinOptima makes it easy. Track your expenses, 
          analyze spending habits, and get smart financial insights—all in one place. 
          Start your journey towards financial freedom today!
        </p>
        <div style={{ marginTop: '30px' }}>
          <button 
            style={styles.button} 
            onClick={() => navigate('/tracker')}
          >
            Go to Expense Tracker
          </button>
          <button style={{...styles.button, ...styles.secondaryButton}}>Learn More</button>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.aboutContainer}>
          <div>
            <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Why Use FinOptima?</h2>
            <p style={{fontSize: '18px', lineHeight: '1.6', color: '#64748b'}}>
              FinOptima helps you take control of your finances by offering real-time expense tracking, 
              smart budgeting tools, and AI-driven spending insights. Whether you're saving for a goal, 
              reducing unnecessary spending, or simply trying to understand where your money goes, 
              FinOptima provides you with the tools you need to make informed financial decisions.
            </p>
          </div>
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{color: '#3498db', marginBottom: '20px'}}>Features We Offer</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '15px'}}>📊 Real-time expense tracking</li>
              <li style={{marginBottom: '15px'}}>💡 Smart financial insights</li>
              <li style={{marginBottom: '15px'}}>🎯 Custom budget planning</li>
              <li style={{marginBottom: '15px'}}>📈 AI-powered recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" style={{...styles.section, backgroundColor: '#f8fafc'}}>
        <h2 style={{textAlign: 'center', fontSize: '36px', marginBottom: '40px'}}>Our Features</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <h3 style={{color: '#3498db'}}>Expense Analysis</h3>
            <p>Understand where your money is going with detailed reports and insights.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={{color: '#3498db'}}>Smart Budgeting</h3>
            <p>Set financial goals and track your progress with AI-driven budgeting.</p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={{color: '#3498db'}}>Financial Planning</h3>
            <p>Plan your expenses wisely with intelligent recommendations based on your habits.</p>
          </div>
        </div>
      </section>

      <section style={styles.aboutSection}>
        <h2 style={{ fontSize: '28px', color: '#2c3e50', marginBottom: '15px' }}>Developed By</h2>
        <p style={{ fontSize: '18px', color: '#64748b' }}>
          Jayant Chatterji, Utkrisht Parmar, Kevin Joshua
        </p>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 FinOptima. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
