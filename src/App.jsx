import './App.css'
import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{color: '#f9fafb', fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center'}}>Wambui Karanja</h1>
            <h2 style={{color: '#e5e7eb', fontSize: '1.8rem', fontWeight: '300', textAlign: 'center'}}>Full-Stack Developer</h2>
            <p>
              Software Engineer specializing in full-stack applications, data quality assurance, and AI model evaluation. Experienced in structuring relational databases, validating complex inputs, and debugging programmatic logic across React, Flask, and PostgreSQL systems.
            </p>
          </div>
          <div className="hero-photo">
            <img src="/wambui.jpg" alt="Wambui Karanja" />
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}>About</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('resume'); }}>Resume</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('skills'); }}>Skills</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('projects'); }}>Projects</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section" style={{display: activeSection === 'about' ? 'block' : 'none'}}>
        <h2>About Me</h2>
        <p>
          Hi, I'm Wambui Karanja, a Full-Stack Developer and AI-focused engineer based in Nairobi, Kenya.
          I specialize in building end-to-end web applications and applying data quality assurance principles
          to ensure clean, structured, and reliable outputs — whether in software systems or AI model evaluation.
        </p>
        <p>
          I have hands-on experience designing relational database schemas (PostgreSQL, SQLite), validating
          complex user inputs across REST API endpoints, and debugging programmatic logic — skills that
          translate directly into AI training workflows such as reviewing model responses, flagging errors,
          and categorizing data for quality control.
        </p>
        <p>
          I enjoy working at the intersection of software engineering and AI — building tools that handle
          structured data, integrating APIs that exchange JSON payloads, and writing Python scripts that
          automate data processing pipelines.
        </p>
        <p>
          Outside of coding, I'm an avid reader and enjoy hiking in Kenya's beautiful landscapes.
          I believe in continuous learning and regularly contribute to open-source projects to give back
          to the developer community that has helped me grow.
        </p>
      </section>

      <section id="resume" className="section" style={{display: activeSection === 'resume' ? 'block' : 'none'}}>
        <h2>Resume</h2>
        <div className="resume-download">
          <a href="/wambui-karanja-resume.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">View CV (PDF)</a>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <h3>Professional Summary</h3>
            <p>
              Experienced Full-Stack Developer with  experience in building scalable web applications.
              Proficient in modern JavaScript frameworks, backend technologies, and database management.
              Passionate about creating user-centric solutions and continuously learning new technologies.
            </p>
          </div>

          <div className="resume-section">
            <h3>Work Experience</h3>
            <div className="experience-item">
              <h4>Full-Stack Software Engineer</h4>
              <p className="company">Freelance Developer | Nairobi, Kenya | 2025 - Present</p>
              <ul>
                <li>Architected and developed scalable MERN stack applications with RESTful API design</li>
                <li>Implemented authentication systems using JWT and OAuth2 protocols</li>
                <li>Optimized database queries and implemented caching strategies for improved performance</li>
                <li>Deployed applications on cloud platforms (Render, Vercel, Netlify) </li>
                <li>Collaborated with clients using Agile methodologies to deliver production-ready solutions</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4>Junior Software Developer</h4>
              <p className="company">Moringa School | Nairobi, Kenya | 2025 - </p>
              <ul>
                <li>Designed and implemented 5+ full-stack web applications using React and Flask </li>
                <li>Developed RESTful APIs with secure JWT authentication and optimized SQLAlchemy queries </li>
                <li>Led Agile ceremonies as Scrum Master for a team of 6 developers </li>
                <li>Utilized Git for version control and collaborated on team projects using GitHub</li>
                <li>Deployed applications to Render and Vercel with CI/CD pipelines - Debugged and resolved 50+ cross-stack issues</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Software engineering</h4>
              <p className="institution"> Moringa | 2025 - present</p>
              <p>Graduated with First Class Honours. Specialized in Software Engineering and Web Technologies.</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              <li>AI Automation(2026)-Moringa(2026)</li>
              <li>Full Stack Developer Certification - Moringa School (2025)</li>
              <li>JavaScript Algorithms and Data Structures - freeCodeCamp (2025)</li>
              <li>Responsive Web Design - freeCodeCamp (2025)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section" style={{display: activeSection === 'skills' ? 'block' : 'none'}}>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming and development</h3>
            <div className="skill-list">
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3 (Flexbox, Grid)</span>
              <span className="skill-item">JavaScript (ES6+)</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Tailwind / Bootstrap</span>
              <span className="skill-item">Flask</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">AI Automation</span>
              <span className="skill-item">SQLITE</span>
              <span className="skill-item">Version control(Git&Github)</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Software and Web Development</h3>
            <div className="skill-list">
              <span className="skill-item">Front-End Development</span>
              <span className="skill-item">Back-End Intergration</span>
              <span className="skill-item">Web Perfomance Optimization</span>
              <span className="skill-item">Databases Design</span>
               <span className="skill-item">SEO and Search Engine Optimization</span>
              
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-list">
              <span className="skill-item">Figma(UI/UX Code)</span>
              <span className="skill-item">VS Code</span>
              <span className="skill-item">Postman</span>
              <span className="skill-item">Render / Netlify / Vercel</span>
              <span className="skill-item">WordPress</span>
              
            </div>
          </div>
          <div className="skill-category">
            <h3>Other</h3>
            <div className="skill-list">
              <span className="skill-item">APIs</span>
              <span className="skill-item">Asynchronous JavaScript (fetch, promises)</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-list">
              <span className="skill-item">Team Collaboration</span>
              <span className="skill-item">Time Management</span>
              <span className="skill-item">Problem Solving</span>
              <span className="skill-item">Communication</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section" style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Personal Portfolio</h3>
            <p>Built responsive personal portfolio using React to showcase projects, Skills and experience.</p>
            <div className="tech-stack">
              <span className="badge">React</span>
              <span className="badge">CSS3</span>
              <span className="badge">Vite</span>
            </div>
            <ul className="features">
              <li>Implemented reusable components</li>
              <li>Responsive design for all devices</li>
              <li>Interactive navigation with React state</li>
              <li>Clean and modern UI with smooth transitions</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/Wambo71/my-portfolio" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <p><strong>Role:</strong> Full-stack developer - Built and designed the entire portfolio from scratch.</p>
          </div>

          <div className="project-card">
            <h3>SkillBridge Freelance Marketplace</h3>
            <p>A platform connecting freelancers with clients for various services.</p>
            <div className="tech-stack">
              <span className="badge">React</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Flask</span>
              <span className="badge data-badge">Data Validation</span>
            </div>
            <ul className="features">
              <li>Designed normalized PostgreSQL schema for users, jobs, bids, and messages</li>
              <li>Built REST API endpoints with server-side input validation for job postings and bids</li>
              <li>Integrated third-party payment API handling structured JSON request/response payloads</li>
              <li>Real-time messaging with validated message data before persistence</li>
            </ul>
            <div className="project-links">
              <a href="https://skillbridge-project-1.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/cjkakai/SkillBridge_project" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <p><strong>Role:</strong> Full-stack developer - Collaborated with a team to build the entire application from scratch.</p>
          </div>

          <div className="project-card">
            <h3>Digital Marketplace</h3>
            <p>An e-commerce platform for buying and selling digital products.</p>
            <div className="tech-stack">
              <span className="badge">React</span>
              <span className="badge">Python</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge data-badge">Python Scripting</span>
              <span className="badge data-badge">Data Validation</span>
            </div>
            <ul className="features">
              <li>Designed PostgreSQL schema with product categories, user roles, and order relationships</li>
              <li>Wrote Python scripts to validate and sanitize product listing inputs before database writes</li>
              <li>Consumed and structured REST API JSON payloads for payment processing and order tracking</li>
              <li>Admin dashboard with data integrity checks on user reviews and ratings</li>
            </ul>
            <div className="project-links">
              <a href="https://frontend-beta-ashy-63.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/Wambo71/Digital-flask-project/tree/wambui" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <p><strong>Role:</strong> Full-stack developer - Developed both frontend and backend systems.</p>
          </div>

          <div className="project-card">
            <h3>Online Shopping App</h3>
            <p>A comprehensive e-commerce application with modern shopping features.</p>
            <div className="tech-stack">
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge data-badge">Data Validation</span>
            </div>
            <ul className="features">
              <li>Modeled PostgreSQL schema for products, inventory, orders, and user accounts</li>
              <li>Validated checkout form inputs and cart data on both client and server side</li>
              <li>Integrated REST APIs for product catalog with structured JSON data handling</li>
              <li>Inventory management with data consistency checks on stock updates</li>
            </ul>
            <div className="project-links">
              <a href="https://soft-haven-1.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/Wambo71/Soft-haven-1" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <p><strong>Role:</strong> Full-stack developer - Built the complete shopping platform.</p>
          </div>

          <div className="project-card">
            <h3>School Connect - Institution Management System</h3>
            <p>A full-stack school management system handling students, staff, courses, and departments with role-based access control.</p>
            <div className="tech-stack">
              <span className="badge">React</span>
              <span className="badge">Flask</span>
              <span className="badge">SQLite</span>
              <span className="badge">JWT Auth</span>
              <span className="badge data-badge">Data Validation</span>
            </div>
            <ul className="features">
              <li>Designed relational SQLite schema linking students, courses, departments, and staff entities</li>
              <li>Validated all enrollment and registration inputs via Flask API before database writes</li>
              <li>Structured JSON API responses for role-based data access (Admin, Staff, Student)</li>
              <li>Debugged cross-role data access logic to ensure data integrity and correct permissions</li>
            </ul>
            <div className="project-links">
              <a href="https://school-connect-4.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/Wambo71/School-connect" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <p><strong>Role:</strong> Full-stack developer - Designed and built the entire system including auth, backend APIs, and frontend.</p>
          </div>

          <div className="project-card">
            <h3>ScamShield - Fake URL Detector</h3>
            <p>A security tool for detecting and flagging potentially malicious or fake URLs to protect users from online scams.</p>
            <div className="tech-stack">
              <span className="badge">React</span>
              <span className="badge">Flask</span>
              <span className="badge">Python</span>
              <span className="badge data-badge">Python Scripting</span>
              <span className="badge data-badge">Data Validation</span>
            </div>
            <ul className="features">
              <li>Python detection engine that parses, categorizes, and scores URL patterns for risk</li>
              <li>Input validation layer that sanitizes and normalizes submitted URLs before analysis</li>
              <li>Flask API returns structured JSON verdicts (safe/suspicious/malicious) consumed by React frontend</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/Wambo71/Scam-shield" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <p><strong>Role:</strong> Full-stack developer - Building the detection engine and frontend interface. <em>(In Progress)</em></p>
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{display: activeSection === 'contact' ? 'block' : 'none'}}>
        <h2>Contact</h2>
        <p>I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:wambuikaranja78@gmail.com">wambuikaranja78@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/Ruthkaranja" target="_blank" rel="noopener noreferrer">linkedin.com/in/ruthkaranja</a>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <a href="https://github.com/Wambo71" target="_blank" rel="noopener noreferrer">github.com/Wambo71</a>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
