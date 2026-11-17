import React, { useState } from 'react';
import './App.css';
import hero from './assets/55.jpeg';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';


function App() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Lemozine Service Landing Page",
      desc: "صفحة هبوط تم تصميمها وتطويرها وتنسيقها بأحدث تقنيات الويب وضبطها لجميع الشاشات.",
      tags: ["React", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      id: 2,
      title: "Interactive Web Components",
      desc: "مجموعة من العناصر التفاعلية والـ Modals المصممة بأعلى دقة لتجربة المستخدم.",
      tags: ["React", "Vite", "UI/UX"],
      link: "#"
    },
{
        id: 3,
      title: "Interactive Web Components",
      desc: "مجموعة من العناصر التفاعلية والـ Modals المصممة بأعلى دقة لتجربة المستخدم.",
      tags: ["React", "Vite", "UI/UX"],
      link: "#"
},
{
      id: 4,
      title: "Interactive Web Components",
      desc: "مجموعة من العناصر التفاعلية والـ Modals المصممة بأعلى دقة لتجربة المستخدم.",
      tags: ["React", "Vite", "UI/UX"],
      link: "#"
}
  ];

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Mohamed Khaled<span></span></div>
        <ul className="nav-links">
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="01006839652" className="contact-btn">CONTACT ME</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero">
  <div className="hero-content">
   
   <div className="hero-img-wrapper">
      <img src={hero} alt="mohamed" className="hero-img" />
    </div>

    <div className="hero-text">
      <span className="badge">REAL CREATOR</span>
      <h1><span className="highlight"> MOHAMED KHALED</span></h1>
      <p>
I’m a Photographer, Videographer, and Video Editor passionate about creativity and visual storytelling. I love capturing moments and turning ideas into reality.
      </p>
      <div className="hero-btns">
        <a href="#projects" className="btn btn-primary">MY PROJECTS</a>
        <button className="btn btn-outline" onClick={() => setActiveModal('contact')}>
          CONTACT WITH ME
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>المهارات التقنية</h2>
        <div className="skills-grid">
          <div className="skill-card">React.js</div>
          <div className="skill-card">Vite & Node.js</div>
          <div className="skill-card">Responsive Design</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>معرض المشاريع</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tags">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <button className="btn-card" onClick={() => setActiveModal(proj.title)}>
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      </section>

{/* Contact Section */}
<section id="contact" className="social-section">
  <h2>CONTACT WITH ME</h2>
  <div className="social-links">
    <a href="https://www.instagram.com/mohamed_khaleedx?vrfl=d3lneWwzbmRwbWVy" target="_blank" rel="noreferrer" className="social-icon instagram"><FaInstagram /></a>
    <a href="https://wa.me/201154122835" target="_blank" rel="noreferrer" className="social-icon whatsapp"><FaWhatsapp /></a>
    <a href="https://www.facebook.com/share/1CRj5dVitR/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-icon facebook"><FaFacebookF /></a>
    <a href="https://linkedin.com/in/USERNAME" target="_blank" rel="noreferrer" className="social-icon linkedin"><FaLinkedinIn /></a>
    <a href="https://github.com/USERNAME" target="_blank" rel="noreferrer" className="social-icon github"><FaGithub /></a>
  </div>
</section>
  </div>
  );
}
export default App;