import React from "react";

const projects = [
  {
    number: "01",
    name: "Northstar",
    type: "SaaS platform · Product development",
    description:
      "A clearer way for growing teams to understand their numbers and make confident decisions.",
    className: "project-card--northstar",
    mark: "N",
    visualLabel: "A better view of your business",
    visualDetail: "Revenue overview",
    metric: "$48,290",
    change: "+12.8%",
    tags: ["React", "TypeScript", "Product UI"],
  },
  {
    number: "02",
    name: "Forma Studio",
    type: "Creative studio · Website",
    description:
      "A confident, editorial web presence built to let a small design studio's work speak for itself.",
    className: "project-card--forma",
    mark: "F",
    visualLabel: "Good work, thoughtfully made.",
    visualDetail: "Independent creative studio",
    metric: "Selected work",
    change: "2025 — 2026",
    tags: ["React", "CSS", "Art direction"],
  },
  {
    number: "03",
    name: "Fieldnotes",
    type: "Travel journal · Web application",
    description:
      "A calm, personal space to collect the places, photographs, and small details worth remembering.",
    className: "project-card--fieldnotes",
    mark: "✳",
    visualLabel: "Take the scenic route.",
    visualDetail: "Your map of meaningful places",
    metric: "12 places",
    change: "3 countries",
    tags: ["JavaScript", "Maps", "Responsive UI"],
  },
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Accessible UI",
  "Responsive design",
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Your Name, home">
        <span className="wordmark-mark">y.</span>
        <span>Your Name</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Selected work</a>
        <a className="nav-contact" href="#contact">
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.className}`}>
      <div className="project-preview" aria-label={`${project.name} preview`}>
        <div className="preview-topbar">
          <span className="preview-brand">
            <span className="preview-brand-mark">{project.mark}</span>
            {project.name}
          </span>
          <span className="preview-menu" aria-hidden="true">
            <i />
            <i />
          </span>
        </div>
        <div className="preview-content">
          <span className="preview-eyebrow">{project.visualDetail}</span>
          <p className="preview-heading">{project.visualLabel}</p>
          <div className="preview-stat">
            <span>{project.metric}</span>
            <span>{project.change}</span>
          </div>
          <div className="preview-bars" aria-hidden="true">
            {[38, 56, 44, 71, 61, 88, 75, 96, 81, 100].map((height, index) => (
              <i key={index} style={{ "--bar-height": `${height}%` }} />
            ))}
          </div>
        </div>
        <span className="preview-orbit preview-orbit--one" aria-hidden="true" />
        <span className="preview-orbit preview-orbit--two" aria-hidden="true" />
      </div>
      <div className="project-info">
        <div className="project-heading-row">
          <div>
            <span className="project-number">{project.number}</span>
            <h3>{project.name}</h3>
          </div>
          <a
            className="project-link"
            href="#contact"
            aria-label={`Ask me about ${project.name}`}
          >
            <ArrowIcon diagonal />
          </a>
        </div>
        <p className="project-type">{project.type}</p>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Available for select projects
            </div>
            <p className="eyebrow">Independent web developer</p>
            <h1>
              I make the web
              <br />
              feel a little more
              <br />
              <span>human.</span>
            </h1>
            <p className="hero-description">
              Thoughtful design and dependable code, brought together to make
              digital experiences people love to use.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link" href="#about">
                A little about me
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract illustration of a web page">
            <div className="hero-art-glow" />
            <div className="hero-art-caption">
              <span>Thoughtful by design</span>
              <span className="caption-star" aria-hidden="true">
                ✳
              </span>
            </div>
            <div className="art-window">
              <div className="art-window-bar">
                <span className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="window-url">your-next-great-idea.com</span>
                <span className="window-menu" aria-hidden="true">···</span>
              </div>
              <div className="art-window-body">
                <span className="art-kicker">A fresh perspective</span>
                <span className="art-title">
                  Make room
                  <br />
                  for <em>better.</em>
                </span>
                <span className="art-rule" />
                <span className="art-subtitle">
                  Good things happen when
                  <br />
                  everything just works.
                </span>
                <span className="art-button">See what&apos;s possible ↗</span>
              </div>
              <div className="art-sticker" aria-hidden="true">
                <span>made with</span>
                <span>care <b>♥</b></span>
              </div>
            </div>
            <div className="floating-note">
              <span className="floating-note-icon">✳</span>
              <span>
                Design-minded.
                <br />
                Detail-driven.
              </span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" />
            Scroll to explore
          </a>
        </section>

        <section className="intro-band" aria-label="Introduction">
          <p>
            A good website should feel <span>simple, useful, and unmistakably
            yours.</span> That&apos;s what I&apos;m here to build.
          </p>
          <span className="intro-decoration" aria-hidden="true">✳</span>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-label">
            <span>01</span> A little about me
          </div>
          <div className="about-content">
            <div className="about-heading">
              <p className="eyebrow">The person behind the pixels</p>
              <h2>
                Hey, I&apos;m <span>Your Name.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a web developer who cares about the details: the
                considered type, the intuitive interaction, and the fast,
                accessible code that makes it all feel effortless.
              </p>
              <p>
                I work with thoughtful people and teams to turn ambitious ideas
                into clear, useful digital experiences. From the first sketch
                to the final line of code, I bring curiosity, care, and a
                collaborative spirit to the work.
              </p>
              <ul className="skill-list" aria-label="Skills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-footer">
            <span>Good work is a team effort.</span>
            <span className="about-footer-mark" aria-hidden="true">✳</span>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="work-intro">
            <div>
              <div className="section-label">
                <span>02</span> Selected work
              </div>
              <h2>Made with purpose.</h2>
            </div>
            <p>
              A few ideas brought to life with good people. Each one starts
              with a problem worth solving.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-card">
            <span className="contact-spark" aria-hidden="true">✳</span>
            <div className="section-label">
              <span>03</span> Your next project
            </div>
            <h2>
              Have a good
              <br />
              feeling about <span>this?</span>
            </h2>
            <p>
              Tell me what you&apos;re working on. I&apos;d love to hear about
              it.
            </p>
            <a className="button button--light" href="mailto:hello@example.com">
              Start a conversation <ArrowIcon diagonal />
            </a>
            <span className="contact-note">Usually replies within 2 days</span>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#home" aria-label="Back to top">
          <span className="wordmark-mark">y.</span>
          <span>Your Name</span>
        </a>
        <span className="copyright">
          © {new Date().getFullYear()} Your Name. Made with care.
        </span>
        <a className="back-to-top" href="#home">
          Back to top <ArrowIcon diagonal />
        </a>
      </footer>
    </>
  );
}

export default App;
