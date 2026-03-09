import React, { useState, useEffect } from "react";
import "./App.css";
import { FaDev, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  


  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#roadmap", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "AthletiQX",
      description: "Mobile Application for Athlete Monitoring",
      screenshots: [
        "/projects/athletiqx/1.jpg",
        "/projects/athletiqx/2.jpg",
        "/projects/athletiqx/3.jpg",
        "/projects/athletiqx/4.jpg",
        "/projects/athletiqx/5.jpg",
        "/projects/athletiqx/6.jpg",
        "/projects/athletiqx/7.jpg",
        "/projects/athletiqx/8.jpg",
        "/projects/athletiqx/9.jpg",
      ],
    },
    {
      title: "WashYard Laundry Shop System",
      description: "Landing Page and Laundry Management System for Laundry Shop",
      screenshots: [
        "/projects/washyard/1.png",
        "/projects/washyard/2.png",
        "/projects/washyard/3.png",
        "/projects/washyard/4.png",
        "/projects/washyard/5.png",
        "/projects/washyard/6.png",
        "/projects/washyard/7.png",
        "/projects/washyard/8.png",
        "/projects/washyard/9.png",
        "/projects/washyard/10.png",
        "/projects/washyard/11.png",
        "/projects/washyard/12.png",
        "/projects/washyard/13.png",
        "/projects/washyard/14.png",
        "/projects/washyard/15.png",

      ],
    },
    {
      title: "Mechani-Aid",
      description: "Web and Mobile Application for Mechanic Booking",
      screenshots: [
        "/projects/mechaniaid/11.png",
        "/projects/mechaniaid/1.jpg",
        "/projects/mechaniaid/2.png",
        "/projects/mechaniaid/3.png",
        "/projects/mechaniaid/4.png",
        "/projects/mechaniaid/5.png",
        "/projects/mechaniaid/6.png",
        "/projects/mechaniaid/7.png",
        "/projects/mechaniaid/8.png",
        "/projects/mechaniaid/9.png",
        "/projects/mechaniaid/10.png",
        "/projects/mechaniaid/11.png",
        "/projects/mechaniaid/13.png",
        "/projects/mechaniaid/14.png",
        "/projects/mechaniaid/15.png",
      ],
    },
    {
      title: "PawFinder",
      description: "Web Based Lost and Found Pet Posting",
      screenshots: [
        "/projects/pawfinder/1.png",
        "/projects/pawfinder/2.png",
        "/projects/pawfinder/3.png",
        "/projects/pawfinder/4.png",
        "/projects/pawfinder/6.png",
        "/projects/pawfinder/7.png",
        "/projects/pawfinder/8.png",
        "/projects/pawfinder/9.png",
        "/projects/pawfinder/10.png",
        "/projects/pawfinder/11.png",
        "/projects/pawfinder/12.png",
        "/projects/pawfinder/13.png",
        "/projects/pawfinder/14.png",
        "/projects/pawfinder/15.png",
        "/projects/pawfinder/16.png",

      ],
    },
    {
      title: "Palaba PH (College Thesis)",
      description: "Web and Mobile Multitenancy Laundry Shop Platform for Laundry Shop with Delivery and Reservation",
      screenshots: [
        "/projects/palabaph/3.png",
        "/projects/palabaph/4.png",
        "/projects/palabaph/5.png",
        "/projects/palabaph/6.png",
        "/projects/palabaph/7.png",
        "/projects/palabaph/8.png",
        "/projects/palabaph/9.png",
        "/projects/palabaph/10.png",
        "/projects/palabaph/11.png",
        "/projects/palabaph/12.png",
        "/projects/palabaph/13.png",
        "/projects/palabaph/14.png",
        "/projects/palabaph/15.png",
        "/projects/palabaph/16.png",
      ],
    },
  ];

  const openLightbox = (projectIndex) => {
    setCurrentProject(projectIndex);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    if (currentProject !== null) {
      setCurrentImageIndex(
        (prev) =>
          (prev + 1) % projects[currentProject].screenshots.length
      );
    }
  };

  const prevImage = () => {
    if (currentProject !== null) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + projects[currentProject].screenshots.length) %
          projects[currentProject].screenshots.length
      );
    }
  };


  return (
    <div className="App">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="logo">
          <a href="#hero" className="main">
            <h1 className="typing">
              <span className="typing-text"> JCS.<FaDev style={{ fontSize: "2rem" }} /></span>
            </h1>
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="close-button" onClick={closeMenu}>
            <span>&#10005;</span>
          </div>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="hero">
        <div className="hero-left">
          <img
            src="/logo.jpg"
            alt="John Christian Santos"
            className="hero-image"
          />
        </div>

        <div className="hero-right">
          <p className="hero-subtitle">Hey there! I'm</p>
          <h2 className="hero-title">
            John Christian Santos
          </h2>
          <p className="hero-subtitle">Web & Mobile Developer</p>

          {/* Contact Info */}
          <div className="hero-contact">
            <div className="contact-item">
              <FaEnvelope />
              <span>johnchristiansantos51920@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <span>+63 956 726 4391</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/john-christian-santos-2b5b9125b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              LinkedIn Profile
            </a>
            <a href="/JOHN CHRISTIAN SANTOS - CV.pdf" download className="btn secondary">
              Download Resume
            </a>
          </div>
        </div>
      </section>



      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="about">
        <h2 className="section-title slide-in">About Me</h2>

        <p className="section-text slide-in delay">
          👋 Hi, you can call me JC or Choy, a full-stack web and mobile developer and a graduate of <strong>Bachelor of Science in Information Technology (BSIT) specializing in Web and Mobile Application</strong> from <strong>FEU Institute of Technology 🟩🟨🟩🐃</strong>.

          <br/> <br/>For me, building software isn’t just about writing code—it’s about crafting solutions that solve real problems and make people’s lives easier. My goal is to keep creating meaningful platforms that blend technical expertise with user-focused design, while growing as a developer who thrives on challenges. ✨🌠
        </p>
      </section>




      {/* ===== TIMELINE SECTION ===== */}
      <section id="roadmap" className="timeline">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline-container">
          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="timeline-image">
              <img src="/hsi.png" alt="Highly Succeed Inc" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-role">Highly Succeed Inc. – System Administration Intern</h3>
              <span className="timeline-date">January 2023 – April 2023</span>
              <p className="timeline-description">
                System Administration Intern responsible for ticket monitoring
                and user management.
              </p>
            </div>
          </div>

          {/* Another Item */}
          <div className="timeline-item">
            <div className="timeline-image">
              <img src="/csi.png" alt="Circuit Solutions Inc" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-role">Circuit Solutions Inc. – Full Stack Developer Intern</h3>
              <span className="timeline-date">April 2023 – July 2023</span>
              <p className="timeline-description">
                Worked as a Full Stack Web Developer Intern, continuing
                development of their HRIS (Human Resource Information System).
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-image">
              <img src="/gdslink.png" alt="GDSLink LLC" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-role">GDS Link LLC – Solutions Analyst</h3>
              <span className="timeline-date">August 2023 – January 2026</span>
              <p className="timeline-description">
                Worked as a Front-End Developer at GDS Link, where my role
                primarily focused on handling change order requests and
                resolving production issues related to the front end using their
                proprietary front-end tool.
              </p>
            </div>
          </div>
        </div>

        <h2 className="section-title">Freelancing</h2>
        <div className="timeline-container">
          {/* Another Item */}
          <div className="timeline-item">
            <div className="timeline-image">
              <img src="/self-employed.png" alt="Commission" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-role">Project-Based - Full Stack Web and Mobile Developer</h3>
              <span className="timeline-date">April 2024 – August 2024</span>
              <p className="timeline-description">
                Developed a web and mobile mechanic booking app for a group of students as part of their college capstone project, with real-time notifications using Pusher JS, PayMongo for online payments, and Google Maps.
              </p>
            </div>
          </div>

          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="timeline-image">
              <img src="/washyard.png" alt="Washyard Self Service Laundromat" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-role">Washyard Self Service Laundromat - Full Stack Web Developer</h3>
              <span className="timeline-date">July 2025 – August 2025</span>
              <p className="timeline-description">
                Designed and developed a landing page and a laundry management system to streamline daily laundry operations.
              </p>
            </div>
          </div>

          {/* Another Item */}
          <div className="timeline-item">
            <div className="timeline-image">
              <img src="/self-employed.png" alt="Commission" />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-role">Project-Based - Full Stack Mobile Developer</h3>
              <span className="timeline-date">August 2025 – December 2025</span>
              <p className="timeline-description">
                Designed and developed a full-stack athlete monitoring mobile application for a group of students as part of their college capstone project using React Native and Expo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills & Certifications</h2>

        <div className="skills-container">
          {/* Tech Stack */}
          <div className="skills-category">
            <h3 className="skills-heading">Tech Stacks</h3>
            <div className="skills-grid">

              <div className="skill-item">
                <img src="/logos/html.png" alt="HTML" />
                <span>HTML</span>
              </div>

              <div className="skill-item">
                <img src="/logos/css.png" alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="skill-item">
                <img src="/logos/javascript.png" alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <img src="/logos/react.png" alt="React" />
                <span>React</span>
              </div>

              <div className="skill-item">
                <img src="/logos/reactnative.png" alt="React Native" />
                <span>React Native</span>
              </div>

              <div className="skill-item">
                <img src="/logos/jquery.png" alt="jQuery" />
                <span>jQuery</span>
              </div>

              <div className="skill-item">
                <img src="/logos/vue.png" alt="Vue" />
                <span>Vue</span>
              </div>

              <div className="skill-item">
                <img src="/logos/ruby.png" alt="Ruby" />
                <span>Ruby</span>
              </div>

              <div className="skill-item">
                <img src="/logos/php.png" alt="PHP" />
                <span>PHP</span>
              </div>

              <div className="skill-item">
                <img src="/logos/laravel.png" alt="Laravel" />
                <span>Laravel</span>
              </div>

              <div className="skill-item">
                <img src="/logos/mysql.png" alt="MySQL" />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <img src="/logos/mongodb.png" alt="MongoDB" />
                <span>MongoDB</span>
              </div>

              <div className="skill-item">
                <img src="/logos/json.png" alt="JSON" />
                <span>JSON</span>
              </div>

              <div className="skill-item">
                <img src="/logos/xml.png" alt="XML" />
                <span>XML</span>
              </div>

              <div className="skill-item">
                <img src="/logos/xslt.png" alt="XSLT" />
                <span>XSLT</span>
              </div>

              <div className="skill-item">
                <img src="/logos/retool.png" alt="Retool" />
                <span>Retool</span>
              </div>

              <div className="skill-item">
                <img src="/logos/github.png" alt="Git" />
                <span>GitHub</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="skills-category">
            <h3 className="skills-heading">Certifications</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <a
                  href="https://www.credly.com/badges/049ee612-451f-42cd-bed3-4d872b602380"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certifications/its.png"
                    alt="IT Specialist - HTML and CSS"
                    className="cert-image"
                  />
                </a>
                <span>IT Specialist - HTML and CSS</span>
              </div>

              <div className="skill-item">
                <a
                  href="https://www.credly.com/badges/3929b62f-7a8e-4e04-bcb6-2df8a6720357"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certifications/mta.png"
                    alt="MTA: Database Fundamentals - Certified 2019"
                    className="cert-image"
                  />
                </a>
                <span>MTA: Database Fundamentals - Certified 2019</span>
              </div>

              <div className="skill-item">
                <a
                  href="https://www.credly.com/badges/0b734cc7-d017-4862-a898-8074a84d9077"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certifications/ccnaensa.png"
                    alt="CCNA: Enterprise Networking, Security, and Automation"
                    className="cert-image"
                  />
                </a>
                <span>CCNA: Enterprise Networking, Security, and Automation</span>
              </div>

              <div className="skill-item">
                <a
                  href="https://www.credly.com/badges/7ba3fda1-ee75-4110-8f2e-6005aa9a0070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certifications/cyberops.png"
                    alt="CyberOps Associate"
                    className="cert-image"
                  />
                </a>
                <span>CyberOps Associate</span>
              </div>

              <div className="skill-item">
                <a
                  href="https://www.credly.com/badges/303291c9-ec06-43e4-b944-4a01e803a80d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certifications/ccnasrwe.png"
                    alt="CCNA: Switching, Routing, and Wireless Essentials"
                    className="cert-image"
                  />
                </a>
                <span>CCNA: Switching, Routing, and Wireless Essentials</span>
              </div>

              <div className="skill-item">
                <a
                  href="https://www.credly.com/badges/fb1f762a-273e-4572-8fce-b7fb0cf79961"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certifications/devnet.png"
                    alt="DevNet Associate"
                    className="cert-image"
                  />
                </a>
                <span>DevNet Associate</span>
              </div>

              <div className="skill-item">
                <a
                  href="https://www.credly.com/badges/96d516f0-1d01-4f95-acad-98b03155c33a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/certifications/ccnaitn.png"
                    alt="CCNA: Introduction to Networks"
                    className="cert-image"
                  />
                </a>
                <span>CCNA: Introduction to Networks</span>
              </div>

              {/* Add more certifications here */}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item"
              onClick={() => openLightbox(index)}
            >
              {/* Thumbnail wrapper ensures uniform card height */}
              <div className="project-thumb">
                <img
                  src={project.screenshots[0]} // show first screenshot as thumbnail
                  alt={project.title}
                />
              </div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && currentProject !== null && (
          <div className="lightbox">
            <span className="close" onClick={closeLightbox}>
              &times;
            </span>
            <div className="lightbox-content">
              <button className="prev" onClick={prevImage}>
                &#10094;
              </button>
              <div className="lightbox-image">
                <img
                  src={projects[currentProject].screenshots[currentImageIndex]}
                  alt={projects[currentProject].title}
                />
                <h3>{projects[currentProject].title}</h3>
                <p>{projects[currentProject].description}</p>
                <p>
                  Screenshot {currentImageIndex + 1} of{" "}
                  {projects[currentProject].screenshots.length}
                </p>
              </div>
              <button className="next" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>
        )}
      </section>



      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>&copy; 2026 John Christian Santos. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;