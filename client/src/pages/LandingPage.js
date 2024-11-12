import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import './LandingPage.css';
import healthImage from '../assets/yoga.jpg';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <header className="landing-header">
        <Logo />
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main className="landing-main">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Form Your Healthier Future</h1>
              <p>Personalized, science-based weight loss plans.</p>
              <button onClick={() => navigate('/health-check')}>Get Started</button>
            </div>
            <div className="hero-image">
              <img src={healthImage} alt="Health and Wellness" />
            </div>
          </div>
        </section>
        <section className="features">
          <h2>Our Approach</h2>
          <p>Learn about our personalized plans and virtual care.</p>
        </section>
      </main>
      <footer className="landing-footer">
      </footer>
    </div>
  );
}

export default LandingPage;
