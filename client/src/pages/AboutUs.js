import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import './AboutUs.css';

// Import profile images (you'll need to add these to your assets folder)
import profile1 from '../assets/Shirley.jpg';  // Add your profile images
import profile2 from '../assets/Yunhong.jpg';
import profile3 from '../assets/Jiefang.png';

function AboutUs() {
  const navigate = useNavigate();
  
  const team = [
    {
      name: "Shirley Luo",
      title: "Software Engineer",
      image: profile1,
    },
    {
      name: "Yunhong Yang",
      title: "Data Engineer",
      image: profile2,
    },
    {
      name: "Jiefang Zhang",
      title: "Product Manager",
      image: profile3,
      
    }
  ];

  return (
    <div className="landing-page">
      <header className="landing-header">
        <Logo />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>
      <main className="about-main">
        <section className="about-hero">
          <h1>Meet Our Team</h1>
          <p>We're passionate about making health and wellness accessible to everyone</p>
        </section>
        <section className="team-members">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.title}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="landing-footer">
      </footer>
    </div>
  );
}

export default AboutUs; 