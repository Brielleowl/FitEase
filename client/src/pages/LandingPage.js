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
              <p>Supportive AI companion for women, making weight loss joyful and stress-free. With personalized motivation and encouragement, Fitease helps you reach your goals with ease and confidence</p>
              <button onClick={() => navigate('/health-check')}>Get Started</button>
            </div>
            <div className="hero-image">
              <img src={healthImage} alt="Health and Wellness" />
            </div>
          </div>
        </section>
        <section className="features">
          <h2>Our Approach</h2>
          <p>We leverages the power of the Gemini model to deliver a uniquely personalized experience. </p>
        <p> By integrating advanced AI, we tailor each user’s journey with custom guidance and emotional companionship, ensuring they feel supported every step of the way. </p>
        <p>
        The Gemini model enables us to adapt to each individual’s needs, making weight loss a compassionate, personalized, and uplifting experience
        </p>
        </section>
      </main>
      <footer className="landing-footer">
      </footer>
    </div>
  );
}

export default LandingPage;
