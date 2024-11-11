import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import './LandingPage.css';
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <header className="landing-header">
        <Logo />
        <nav>
          <ul>
            <li><a href="#patients">Patients</a></li>
            <li><a href="#organizations">Organizations</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="landing-main">
        <section className="hero">
          <h1>Form Your Healthier Future</h1>
          <p>Personalized, science-based weight loss plans.</p>
          <button onClick={() => navigate('/health-check')}>Get Started</button>
        </section>
        <section className="features">
          <h2>Our Approach</h2>
          <p>Learn about our personalized plans and virtual care.</p>
          {/* Add more content as needed */}
        </section>
      </main>
      <footer className="landing-footer">
      </footer>
    </div>
  );
}

export default LandingPage;
