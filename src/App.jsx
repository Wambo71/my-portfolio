import './App.css'
import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{color: '#2c3e50', fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center'}}>Wambui Karanja</h1>
            <h2 style={{color: '#34495e', fontSize: '1.8rem', fontWeight: '300', textAlign: 'center'}}>Full-Stack Developer</h2>
            <p>
              I build fast, user-friendly web apps using JavaScript, React, Node.js, and APIs. I am passionate about creating efficient solutions and delivering exceptional user experiences.

I am a dedicated developer who enjoys turning ideas into functional, polished applications. Over time, I have worked on real-world projects ranging from freelance marketplaces to guestbooks. Each project has strengthened my skills in frontend design, backend logic, and API integration.

I love learning new technologies and improving my craft every day. Problem-solving, clean code, and intuitive UI/UX design are at the center of my work. Currently, I am sharpening my skills in full-stack development and building projects that showcase my ability to create complete end-to-end solutions.

When I'm not coding, I am exploring new tools.
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
          Hi, I'm Wambui Karanja, a dedicated Full-Stack Developer based in Nairobi, Kenya.
          I'm passionate about creating digital solutions that make a difference in people's lives.
          As a full-stack developer, I specialize in building end-to-end web applications that are both
          functional and user-friendly.
        </p>
        <p>
          What motivates me is the opportunity to solve complex problems through code and witness the
          immediate impact of my work. I thrive on challenges that push me to learn and grow, and I
          take pride in writing clean, efficient, and maintainable code.
        </p>
        <p>
          I particularly enjoy working on projects that involve creating intuitive user experiences,
          integrating various technologies, and building scalable applications. Whether it's developing
          a marketplace platform, an interactive web app, or an e-commerce solution, I love the process
          of turning ideas into reality.
        </p>
        <p>
          Currently, I'm deepening my knowledge in cloud technologies and exploring advanced React patterns
          to build more sophisticated user interfaces. I'm also interested in learning about AI/ML integration
          in web applications and how to leverage these technologies for better user experiences.
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
          <a href="/wambui-karanja-cv.pdf" download className="download-btn">Download CV (PDF)</a>
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
                <li>Developed full-stack web applications using React, Node.js, and PostgreSQL</li>
                <li>Implemented responsive UI components with modern CSS frameworks (Tailwind, Bootstrap)</li>
                <li>Built RESTful APIs with Express.js and integrated third-party services</li>
                <li>Utilized Git for version control and collaborated on team projects using GitHub</li>
                <li>Participated in code reviews and implemented best practices for clean, maintainable code</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Full stack developer</h4>
              <p className="institution"> Moringa | 2025 - present</p>
              <p>Graduated with First Class Honours. Specialized in Software Engineering and Web Technologies.</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              <li>Full Stack Developer Certification - Moringa School (2025)</li>
              <li>React Developer Certification - Meta (2025)</li>
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
            <h3>Frontend</h3>
            <div className="skill-list">
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3 (Flexbox, Grid)</span>
              <span className="skill-item">JavaScript (ES6+)</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Tailwind / Bootstrap</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-list">
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">JSON Server</span>
              <span className="skill-item">Databases (SQLite / PostgreSQL / MySQL)</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-list">
              <span className="skill-item">Git & GitHub</span>
              <span className="skill-item">VS Code</span>
              <span className="skill-item">Postman</span>
              <span className="skill-item">Render / Netlify / Vercel</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Other</h3>
            <div className="skill-list">
              <span className="skill-item">APIs</span>
              <span className="skill-item">Asynchronous JavaScript (fetch, promises)</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section" style={{display: activeSection === 'projects' ? 'block' : 'none'}}>
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>SkillBridge Freelance Marketplace</h3>
            <p>A platform connecting freelancers with clients for various services.</p>
            <div className="tech-stack">
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Flask</span>
            </div>
            <ul className="features">
              <li>User authentication and profiles</li>
              <li>Job posting and bidding system</li>
              <li>Real-time messaging</li>
              <li>Payment integration</li>
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
              <span className="badge">Node.js</span>
              <span className="badge">Python</span>
              <span className="badge">PostgreSQL</span>
            </div>
            <ul className="features">
              <li>Product listings and categories</li>
              <li>Secure payment processing</li>
              <li>User reviews and ratings</li>
              <li>Admin dashboard</li>
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
            </div>
            <ul className="features">
              <li>Product catalog and search</li>
              <li>Shopping cart and checkout</li>
              <li>User accounts and order history</li>
              <li>Inventory management</li>
            </ul>
            <div className="project-links">
              <a href="https://soft-haven-1.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/Wambo71/Soft-haven-1" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <p><strong>Role:</strong> Full-stack developer - Built the complete shopping platform.</p>
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
            <a href="https://linkedin.com/in/wambuikaranja" target="_blank" rel="noopener noreferrer">linkedin.com/in/wambuikaranja</a>
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
