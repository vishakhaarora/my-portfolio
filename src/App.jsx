import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, Briefcase, BookOpen, Award, FileText, Download, ChevronRight, MapPin, ArrowRight, Building2, Lightbulb, Users, BarChart3, Globe, Star, TrendingUp, MessageSquare, CheckCircle2, GraduationCap, FlaskConical, Phone } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'research', label: 'Research' },
    { id: 'about', label: 'About' },
  ];

  const services = [
    {
      icon: <Users size={28} />,
      title: 'HR Consulting',
      color: '#b5936b',
      desc: 'End-to-end human resource strategy — talent acquisition frameworks, performance management systems, compensation design, organizational development, and HR policy architecture tailored to your business context.',
      tags: ['Talent Strategy', 'HR Policy', 'Org Design', 'Performance Systems'],
    },
    {
      icon: <Briefcase size={28} />,
      title: 'General Management Advisory',
      color: '#6b7eb5',
      desc: 'Strategic advisory for leadership teams navigating growth, restructuring, or operational complexity. Blending analytical rigour with people-first thinking to drive sustainable organizational performance.',
      tags: ['Strategic Planning', 'Operations', 'Leadership Development', 'Change Management'],
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'HR & People Analytics',
      color: '#6bb59e',
      desc: 'Data-driven workforce insights using SPSS, Power BI, Tableau, and advanced Excel modeling. From attrition prediction to compensation benchmarking — turning people data into boardroom-ready decisions.',
      tags: ['Workforce Analytics', 'SPSS', 'Power BI', 'Predictive Modeling'],
    },
    {
      icon: <Globe size={28} />,
      title: 'Digital Marketing Consulting',
      color: '#b56b8a',
      desc: 'Strategic digital presence for construction, real estate, and service-sector clients. From brand positioning to campaign execution — bringing a structured, analytical lens to digital growth.',
      tags: ['Brand Strategy', 'Campaign Management', 'Content Strategy', 'Growth Analytics'],
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'EdTech & Growth Strategy',
      color: '#8ab56b',
      desc: 'Strategic growth partnership for education technology ventures. Currently serving as Strategic Growth Partner at Learning Panda — driving learner acquisition, partnership development, and market expansion.',
      tags: ['Go-to-Market', 'Partnerships', 'Growth Loops', 'EdTech Strategy'],
    },
    {
      icon: <FlaskConical size={28} />,
      title: 'Research & Data Analysis',
      color: '#b5a36b',
      desc: 'Ongoing academic and applied research in organizational behavior, HR analytics, and human capital strategy. Open to collaborative research, white papers, and consulting engagements requiring statistical depth.',
      tags: ['Org Behavior', 'Data Analytics', 'White Papers', 'Statistical Research'],
    },
  ];

  const ventures = [
    {
      name: 'VM Management Consulting & Advisory',
      url: 'https://vijaymahnot.com/',
      role: 'HR & General Management Consultant',
      desc: 'Consulting practice offering strategic HR advisory and general management solutions to businesses across sectors. Work spans talent architecture, operational strategy, leadership coaching, and organizational effectiveness.',
      color: '#b5936b',
      tag: 'Consulting Practice',
    },
    {
      name: 'Construction & Real Estate Clients',
      url: null,
      role: 'Business Development & Digital Strategy',
      desc: 'Managing digital marketing and business development for select construction and real estate clients — building brand visibility, client pipelines, and structured marketing operations for the built-environment sector.',
      color: '#6b7eb5',
      tag: 'Industry Vertical',
    },
    {
      name: 'Learning Panda',
      url: 'https://www.learningpanda.ai/',
      role: 'Strategic Growth Partner',
      desc: 'Partnering with this AI-driven EdTech startup to shape its market expansion, learner engagement strategy, and institutional partnerships. Bringing a blend of educational insight, data thinking, and growth strategy to the mission.',
      color: '#6bb59e',
      tag: 'EdTech Startup',
    },
  ];

  const research = [
    {
      title: 'Strategic Human Capital in Indian Sports',
      venue: 'Unstop National Conference, 2025',
      status: 'Published',
      desc: 'Examined how sports organizations in India can leverage structured HR practices to build sustainable competitive advantage through human capital investment.',
      tags: ['HR Strategy', 'Sports Management', 'Human Capital'],
    },
    {
      title: 'Predictive Modelling of Employee Job Satisfaction',
      venue: 'IIM Indore — MBA HR Analytics Project',
      status: 'Completed',
      desc: 'Applied SPSS decision trees, Power BI dashboards, and hypothesis testing on demographic and attitudinal workforce data to predict employee satisfaction and attrition risk.',
      tags: ['SPSS', 'Predictive Analytics', 'Attrition Modelling'],
    },
    {
      title: 'Workforce Dynamics & Organizational Behavior',
      venue: 'Ongoing Research — Open for Collaboration',
      status: 'Ongoing',
      desc: 'Investigating linkages between organizational culture, team dynamics, and performance outcomes across knowledge-intensive industries. Synthesis draws on 100+ peer-reviewed journals.',
      tags: ['Org Behavior', 'Culture Analytics', 'Knowledge Work'],
    },
    {
      title: 'Data Analytics Applications in HR Decision-Making',
      venue: 'Applied Research — Open for Publication',
      status: 'Ongoing',
      desc: 'Exploring how contemporary data analytics tools can be embedded into HR workflows — from hiring to performance calibration — to reduce bias and improve organizational outcomes.',
      tags: ['HR Analytics', 'Decision Science', 'Bias Reduction'],
    },
  ];

  const renderHome = () => (
    <div>
      <section className="hero-section">
        <div className="hero-bg-texture" />
        <div className="hero-inner max-container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot" /> Available for Consultancy Engagements
              </div>
              <h1 className="hero-name">Vishakha Arora</h1>
              <p className="hero-tagline">
                A mathematician turned HR — where the precision of numbers meets the depth of human understanding.
              </p>
              <p className="hero-sub">
                HR & General Management Consultant &nbsp;·&nbsp; Strategic Growth Partner &nbsp;·&nbsp; People Analytics Researcher
              </p>
              <div className="hero-location">
                <MapPin size={15} /> Indore, India
              </div>
              <div className="hero-ctas">
                <button onClick={() => setCurrentPage('services')} className="btn-primary">
                  View Services <ArrowRight size={16} />
                </button>
                <a href="mailto:arora.vishakha17@gmail.com" className="btn-outline">
                  <Mail size={16} /> Get in Touch
                </a>
              </div>
            </div>
            <div className="hero-image-wrap">
              <div className="hero-image-ring">
                <img
                  src="/profile-pic.jpeg"
                  alt="Vishakha Arora"
                  className="hero-img"
                  onError={e => { e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'; }}
                />
              </div>
              <div className="hero-float-card card-top">
                <span className="float-icon">🎓</span>
                <div>
                  <div className="float-title">MBA (HRM)</div>
                  <div className="float-sub">IIM Indore</div>
                </div>
              </div>
              <div className="hero-float-card card-bottom">
                <span className="float-icon">∑</span>
                <div>
                  <div className="float-title">M.Sc Mathematics</div>
                  <div className="float-sub">Univ. of Rajasthan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint"><div className="scroll-line" /></div>
      </section>

      <section className="pillars-section max-container">
        <p className="section-eyebrow">What I Bring</p>
        <div className="pillars-grid">
          {[
            { icon: '∑', label: 'Mathematical Rigour', desc: 'M.Sc Mathematics — statistical thinking embedded in every strategy.' },
            { icon: '♟', label: 'Strategic Acuity', desc: 'MBA (HRM) from IIM Indore — frameworks that translate to real outcomes.' },
            { icon: '🤝', label: 'Human Centricity', desc: 'People are not variables. Every solution is designed around them.' },
            { icon: '⚡', label: 'Execution Focus', desc: 'Consulting that goes beyond advice — to implementation and impact.' },
          ].map(p => (
            <div key={p.label} className="pillar-card">
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-label">{p.label}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ventures-snap max-container">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Current Engagements</p>
            <h2 className="section-title">Where I Work</h2>
          </div>
          <button onClick={() => setCurrentPage('ventures')} className="see-all-btn">
            View all <ChevronRight size={14} />
          </button>
        </div>
        <div className="snap-grid">
          {ventures.map(v => (
            <div key={v.name} className="snap-card" style={{ '--accent': v.color }}>
              <div className="snap-tag">{v.tag}</div>
              <h3 className="snap-name">{v.name}</h3>
              <p className="snap-role">{v.role}</p>
              {v.url && (
                <a href={v.url} target="_blank" rel="noreferrer" className="snap-link">
                  Visit <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="max-container cta-inner">
          <div>
            <h2 className="cta-title">Open for Consultancy</h2>
            <p className="cta-sub">HR advisory · Management consulting · Research partnerships · EdTech strategy</p>
          </div>
          <a href="mailto:arora.vishakha17@gmail.com" className="btn-primary-dark">
            <MessageSquare size={16} /> Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="page-section max-container">
      <p className="section-eyebrow">What I Offer</p>
      <h1 className="page-title">Services</h1>
      <p className="page-intro">
        Consulting engagements built around clarity, rigour, and real-world relevance. Whether you need strategic HR architecture, data-driven people insights, or growth strategy for a new venture — each engagement is tailored, not templated.
      </p>
      <div className="services-grid">
        {services.map(s => (
          <div key={s.title} className="service-card" style={{ '--accent': s.color }}>
            <div className="service-icon" style={{ color: s.color }}>{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-tags">
              {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="engage-box">
        <h3 className="engage-title">Ready to engage?</h3>
        <p className="engage-sub">Consultancy is available on project, retainer, and advisory basis. Let's discuss your specific needs.</p>
        <a href="mailto:arora.vishakha17@gmail.com" className="btn-primary" style={{ marginTop: '1.25rem', display: 'inline-flex' }}>
          <Mail size={16} /> Reach Out
        </a>
      </div>
    </div>
  );

  const renderVentures = () => (
    <div className="page-section max-container">
      <p className="section-eyebrow">Engagements & Affiliations</p>
      <h1 className="page-title">Ventures & Partnerships</h1>
      <p className="page-intro">
        Currently engaged across three distinct domains — management consulting, construction and digital marketing, and EdTech growth strategy. Each engagement is an opportunity to apply structured thinking to complex, human-centered challenges.
      </p>
      <div className="ventures-full-grid">
        {ventures.map(v => (
          <div key={v.name} className="venture-card" style={{ '--accent': v.color }}>
            <div className="venture-accent-bar" />
            <div className="venture-body">
              <span className="venture-tag-pill">{v.tag}</span>
              <h3 className="venture-name">{v.name}</h3>
              <p className="venture-role">{v.role}</p>
              <p className="venture-desc">{v.desc}</p>
              {v.url && (
                <a href={v.url} target="_blank" rel="noreferrer" className="venture-link">
                  Visit website <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResearch = () => (
    <div className="page-section max-container">
      <p className="section-eyebrow">Academic & Applied Work</p>
      <h1 className="page-title">Research</h1>
      <p className="page-intro">
        Research sits at the intersection of mathematics, organizational behavior, and human capital strategy. Work spans published conference papers, applied HR analytics projects, and ongoing investigations open to collaboration and co-authorship.
      </p>
      <div className="research-list">
        {research.map(r => (
          <div key={r.title} className="research-card">
            <div className="research-header">
              <span className={`research-status status-${r.status.toLowerCase().replace(' ', '-')}`}>{r.status}</span>
              <span className="research-venue">{r.venue}</span>
            </div>
            <h3 className="research-title">{r.title}</h3>
            <p className="research-desc">{r.desc}</p>
            <div className="research-tags">
              {r.tags.map(t => <span key={t} className="research-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="collab-box">
        <FlaskConical size={24} className="collab-icon" />
        <div>
          <h3 className="collab-title">Open to Research Collaboration</h3>
          <p className="collab-desc">Actively seeking co-authorship and research partnership opportunities in HR analytics, organizational behavior, and data-driven people strategy. Reach out with a brief on your work.</p>
          <a href="mailto:arora.vishakha17@gmail.com" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
            <Mail size={15} /> Propose Collaboration
          </a>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="page-section max-container">
      <p className="section-eyebrow">The Story</p>
      <h1 className="page-title">About</h1>
      <div className="about-grid">
        <div className="about-image-col">
          <div className="about-img-wrap">
            <img
              src="/profile-pic.jpeg"
              alt="Vishakha Arora"
              className="about-img"
              onError={e => { e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'; }}
            />
          </div>
          <div className="about-contact-card">
            <a href="mailto:arora.vishakha17@gmail.com" className="about-contact-link"><Mail size={15} /> arora.vishakha17@gmail.com</a>
            <a href="https://linkedin.com/in/aroravishakha" target="_blank" rel="noreferrer" className="about-contact-link"><ExternalLink size={15} /> LinkedIn Profile</a>
            <a href="/Vishakha_Arora_HR_Resume.pdf" download className="about-contact-link"><Download size={15} /> Download CV</a>
          </div>
        </div>
        <div className="about-text-col">
          <h2 className="about-headline">A mathematician who chose people.</h2>
          <p className="about-para">My journey began with numbers — an M.Sc in Mathematics from the University of Rajasthan, where I developed a deep appreciation for patterns, precision, and proof. But I've always been drawn to something harder to quantify: the way people think, organize, collaborate, and grow.</p>
          <p className="about-para">That tension — between structure and humanity — is what led me to pursue an MBA in Human Resource Management at IIM Indore. And it's what defines how I approach every consulting engagement today.</p>
          <p className="about-para">I bring a rare combination: the analytical backbone of a mathematician and the strategic empathy of an HR practitioner. I believe the best organizations are built at this intersection — where data informs, but people decide.</p>
          <div className="about-edu">
            <h3 className="about-section-label">Education</h3>
            <div className="edu-list">
              {[
                { degree: 'MBA (HRM)', inst: 'IIM Indore', year: 'Class of 2027' },
                { degree: 'M.Sc Mathematics', inst: 'University of Rajasthan', year: '2019' },
                { degree: 'B.Sc', inst: 'University of Rajasthan', year: '2017' },
                { degree: 'B.Ed', inst: 'University of Rajasthan', year: '2021' },
              ].map(e => (
                <div key={e.degree} className="edu-item">
                  <div className="edu-left"><GraduationCap size={14} /><span className="edu-degree">{e.degree}</span><span className="edu-inst">— {e.inst}</span></div>
                  <span className="edu-year">{e.year}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-certs">
            <h3 className="about-section-label">Certifications & Recognition</h3>
            <div className="cert-pills">
              {['Six Sigma Black Belt', 'Lean Accelerator', 'Cultural Intelligence', 'Behavioral Essentials', 'INSPIRE Scholarship (DST)', 'i-STAR Award — Infosys BPM'].map(c => (
                <span key={c} className="cert-pill"><CheckCircle2 size={12} /> {c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const pages = { home: renderHome, services: renderServices, ventures: renderVentures, research: renderResearch, about: renderAbout };

  return (
    <div className="site-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; max-width: 100%; overflow-x: hidden; background: #faf9f6 !important; display: block !important; }
        :root { --gold: #b5936b; --gold-light: #d4b896; --gold-pale: #f5ede2; --ink: #1a1714; --ink-light: #3d3630; --muted: #8a7e74; --border: #e8e0d6; --bg: #faf9f6; --white: #ffffff; --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'DM Sans', system-ui, sans-serif; }
        .site-root { font-family: var(--sans); color: var(--ink); background: var(--bg); min-height: 100vh; }
        .max-container { max-width: 1160px; margin: 0 auto; padding: 0 2rem; }
        .site-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(250,249,246,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid transparent; transition: border-color 0.3s, box-shadow 0.3s; }
        .site-nav.scrolled { border-bottom-color: var(--border); box-shadow: 0 2px 20px rgba(0,0,0,0.05); }
        .nav-inner { max-width: 1160px; margin: 0 auto; padding: 0 2rem; height: 68px; display: flex; align-items: center; justify-content: space-between; }
        .nav-brand { display: flex; flex-direction: column; cursor: pointer; background: none; border: none; text-align: left; }
        .nav-brand-name { font-family: var(--serif); font-size: 1.25rem; font-weight: 500; color: var(--ink); letter-spacing: 0.02em; line-height: 1; }
        .nav-brand-sub { font-size: 0.68rem; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }
        .nav-links { display: flex; gap: 0.25rem; align-items: center; }
        .nav-link { font-size: 0.82rem; font-weight: 500; padding: 0.45rem 0.85rem; border-radius: 6px; background: none; border: none; cursor: pointer; color: var(--muted); transition: color 0.2s, background 0.2s; font-family: var(--sans); letter-spacing: 0.02em; }
        .nav-link:hover { color: var(--ink); background: var(--gold-pale); }
        .nav-link.active { color: var(--ink); background: var(--gold-pale); }
        .nav-actions { display: flex; gap: 0.75rem; align-items: center; }
        .nav-action-link { color: var(--muted); transition: color 0.2s; display: flex; }
        .nav-action-link:hover { color: var(--gold); }
        .hero-section { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; position: relative; padding-top: 68px; overflow: hidden; }
        .hero-bg-texture { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(181,147,107,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 20% 80%, rgba(181,147,107,0.05) 0%, transparent 60%); pointer-events: none; }
        .hero-inner { padding-top: 3rem; padding-bottom: 4rem; }
        .hero-grid { display: grid; grid-template-columns: 1fr 420px; gap: 4rem; align-items: center; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.35rem 0.9rem; background: var(--gold-pale); border: 1px solid var(--gold-light); border-radius: 100px; font-size: 0.75rem; font-weight: 500; color: var(--ink-light); margin-bottom: 1.5rem; letter-spacing: 0.02em; }
        .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #6bb59e; flex-shrink: 0; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .hero-name { font-family: var(--serif); font-size: clamp(3rem, 6vw, 5rem); font-weight: 400; color: var(--ink); line-height: 1.05; letter-spacing: -0.01em; margin-bottom: 1.25rem; }
        .hero-tagline { font-family: var(--serif); font-size: clamp(1.05rem, 2vw, 1.3rem); font-style: italic; color: var(--gold); line-height: 1.5; margin-bottom: 1rem; font-weight: 300; }
        .hero-sub { font-size: 0.88rem; color: var(--muted); line-height: 1.6; margin-bottom: 1.25rem; letter-spacing: 0.01em; }
        .hero-location { display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; color: var(--muted); margin-bottom: 2rem; }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.5rem; background: var(--ink); color: var(--white); border-radius: 8px; font-size: 0.85rem; font-weight: 500; font-family: var(--sans); border: none; cursor: pointer; transition: background 0.2s, transform 0.2s; text-decoration: none; }
        .btn-primary:hover { background: var(--gold); transform: translateY(-1px); }
        .btn-outline { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.5rem; background: transparent; color: var(--ink); border: 1.5px solid var(--border); border-radius: 8px; font-size: 0.85rem; font-weight: 500; font-family: var(--sans); cursor: pointer; transition: border-color 0.2s, background 0.2s; text-decoration: none; }
        .btn-outline:hover { border-color: var(--gold); background: var(--gold-pale); }
        .hero-image-wrap { position: relative; display: flex; align-items: center; justify-content: center; }
        .hero-image-ring { width: 340px; height: 340px; border-radius: 50%; background: linear-gradient(135deg, var(--gold-pale), var(--border)); padding: 6px; box-shadow: 0 20px 60px rgba(181,147,107,0.2); }
        .hero-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
        .hero-float-card { position: absolute; background: var(--white); border: 1px solid var(--border); border-radius: 12px; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.65rem; box-shadow: 0 8px 24px rgba(0,0,0,0.08); min-width: 160px; }
        .card-top { top: 30px; left: -30px; }
        .card-bottom { bottom: 30px; right: -30px; }
        .float-icon { font-size: 1.4rem; font-family: var(--serif); color: var(--gold); }
        .float-title { font-size: 0.78rem; font-weight: 600; color: var(--ink); }
        .float-sub { font-size: 0.68rem; color: var(--muted); margin-top: 1px; }
        .hero-scroll-hint { display: flex; justify-content: center; padding-bottom: 2rem; }
        .scroll-line { width: 1px; height: 60px; background: linear-gradient(to bottom, var(--gold-light), transparent); }
        .pillars-section { padding: 5rem 2rem; }
        .section-eyebrow { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 2rem; }
        .pillars-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .pillar-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 2rem 1.5rem; transition: box-shadow 0.2s, transform 0.2s; }
        .pillar-card:hover { box-shadow: 0 8px 32px rgba(181,147,107,0.12); transform: translateY(-2px); }
        .pillar-icon { font-family: var(--serif); font-size: 2.2rem; font-weight: 300; color: var(--gold); margin-bottom: 1rem; line-height: 1; }
        .pillar-label { font-size: 0.9rem; font-weight: 600; color: var(--ink); margin-bottom: 0.5rem; }
        .pillar-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }
        .ventures-snap { padding: 0 2rem 5rem; }
        .section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem; }
        .section-title { font-family: var(--serif); font-size: 2rem; font-weight: 400; color: var(--ink); line-height: 1.1; }
        .see-all-btn { display: flex; align-items: center; gap: 0.25rem; font-size: 0.8rem; font-weight: 500; color: var(--gold); background: none; border: none; cursor: pointer; font-family: var(--sans); }
        .snap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .snap-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 1.75rem; border-top: 3px solid var(--accent, var(--gold)); transition: box-shadow 0.2s, transform 0.2s; }
        .snap-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .snap-tag { font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; color: var(--accent, var(--gold)); margin-bottom: 0.75rem; }
        .snap-name { font-family: var(--serif); font-size: 1.15rem; font-weight: 500; color: var(--ink); margin-bottom: 0.35rem; line-height: 1.3; }
        .snap-role { font-size: 0.78rem; color: var(--muted); margin-bottom: 1rem; }
        .snap-link { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.75rem; font-weight: 500; color: var(--accent, var(--gold)); text-decoration: none; }
        .cta-band { background: var(--ink); padding: 4rem 2rem; }
        .cta-inner { display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap; max-width: 1160px; margin: 0 auto; }
        .cta-title { font-family: var(--serif); font-size: 1.85rem; font-weight: 400; color: var(--white); margin-bottom: 0.4rem; }
        .cta-sub { font-size: 0.85rem; color: rgba(255,255,255,0.55); }
        .btn-primary-dark { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.75rem; background: var(--gold); color: var(--white); border-radius: 8px; font-size: 0.85rem; font-weight: 500; font-family: var(--sans); border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; flex-shrink: 0; }
        .btn-primary-dark:hover { background: var(--gold-light); }
        .page-section { padding: 6rem 2rem 5rem; }
        .page-title { font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 400; color: var(--ink); line-height: 1.1; margin-bottom: 1.25rem; }
        .page-intro { font-size: 1rem; color: var(--muted); line-height: 1.75; max-width: 720px; margin-bottom: 3.5rem; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem; }
        .service-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; transition: box-shadow 0.2s, transform 0.2s; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent, var(--gold)); }
        .service-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .service-icon { margin-bottom: 1.25rem; }
        .service-title { font-family: var(--serif); font-size: 1.2rem; font-weight: 500; color: var(--ink); margin-bottom: 0.85rem; line-height: 1.3; }
        .service-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.7; margin-bottom: 1.25rem; }
        .service-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .service-tag { font-size: 0.68rem; padding: 0.25rem 0.6rem; background: var(--gold-pale); color: var(--ink-light); border-radius: 4px; font-weight: 500; }
        .engage-box { background: var(--ink); border-radius: 20px; padding: 3rem; text-align: center; }
        .engage-title { font-family: var(--serif); font-size: 1.75rem; font-weight: 400; color: var(--white); margin-bottom: 0.5rem; }
        .engage-sub { font-size: 0.85rem; color: rgba(255,255,255,0.55); margin-bottom: 1.5rem; }
        .ventures-full-grid { display: flex; flex-direction: column; gap: 1.5rem; }
        .venture-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; display: flex; transition: box-shadow 0.2s; }
        .venture-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .venture-accent-bar { width: 5px; flex-shrink: 0; background: var(--accent, var(--gold)); }
        .venture-body { padding: 2rem; flex: 1; }
        .venture-tag-pill { display: inline-block; font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; color: var(--accent, var(--gold)); margin-bottom: 0.75rem; }
        .venture-name { font-family: var(--serif); font-size: 1.4rem; font-weight: 500; color: var(--ink); margin-bottom: 0.3rem; }
        .venture-role { font-size: 0.82rem; font-weight: 500; color: var(--muted); margin-bottom: 1rem; }
        .venture-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.7; margin-bottom: 1rem; max-width: 700px; }
        .venture-link { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.78rem; font-weight: 500; color: var(--accent, var(--gold)); text-decoration: none; }
        .research-list { display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 3rem; }
        .research-card { background: var(--white); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; transition: box-shadow 0.2s; }
        .research-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .research-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.85rem; flex-wrap: wrap; }
        .research-status { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 100px; }
        .status-published { background: #e6f4ee; color: #2d7a57; }
        .status-completed { background: var(--gold-pale); color: var(--gold); }
        .status-ongoing { background: #e8ecf7; color: #4a5eab; }
        .research-venue { font-size: 0.78rem; color: var(--muted); }
        .research-title { font-family: var(--serif); font-size: 1.25rem; font-weight: 500; color: var(--ink); margin-bottom: 0.75rem; line-height: 1.35; }
        .research-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.7; margin-bottom: 1rem; }
        .research-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .research-tag { font-size: 0.68rem; padding: 0.25rem 0.6rem; background: var(--gold-pale); color: var(--ink-light); border-radius: 4px; font-weight: 500; }
        .collab-box { background: var(--gold-pale); border: 1px solid var(--gold-light); border-radius: 20px; padding: 2.5rem; display: flex; gap: 1.5rem; align-items: flex-start; }
        .collab-icon { color: var(--gold); flex-shrink: 0; margin-top: 3px; }
        .collab-title { font-family: var(--serif); font-size: 1.35rem; font-weight: 500; color: var(--ink); margin-bottom: 0.5rem; }
        .collab-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.7; }
        .about-grid { display: grid; grid-template-columns: 300px 1fr; gap: 4rem; align-items: start; }
        .about-img-wrap { border-radius: 20px; overflow: hidden; border: 1px solid var(--border); margin-bottom: 1.25rem; }
        .about-img { width: 100%; display: block; object-fit: cover; aspect-ratio: 4/5; }
        .about-contact-card { background: var(--white); border: 1px solid var(--border); border-radius: 14px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
        .about-contact-link { display: flex; align-items: center; gap: 0.5rem; font-size: 0.78rem; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .about-contact-link:hover { color: var(--gold); }
        .about-headline { font-family: var(--serif); font-size: 1.75rem; font-weight: 400; color: var(--ink); margin-bottom: 1.25rem; line-height: 1.3; }
        .about-para { font-size: 0.9rem; color: var(--muted); line-height: 1.8; margin-bottom: 1rem; }
        .about-edu { margin-top: 2rem; }
        .about-section-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .edu-list { display: flex; flex-direction: column; gap: 0.65rem; }
        .edu-item { display: flex; justify-content: space-between; align-items: center; padding: 0.65rem 0; border-bottom: 1px solid var(--border); }
        .edu-left { display: flex; align-items: center; gap: 0.5rem; }
        .edu-degree { font-size: 0.85rem; font-weight: 500; color: var(--ink); }
        .edu-inst { font-size: 0.78rem; color: var(--muted); }
        .edu-year { font-size: 0.75rem; color: var(--muted); }
        .about-certs { margin-top: 2rem; }
        .cert-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .cert-pill { display: flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; padding: 0.35rem 0.75rem; background: var(--white); border: 1px solid var(--border); border-radius: 100px; color: var(--ink-light); font-weight: 500; }
        .site-footer { border-top: 1px solid var(--border); padding: 3rem 2rem; background: var(--white); }
        .footer-inner { max-width: 1160px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap; }
        .footer-brand-name { font-family: var(--serif); font-size: 1.1rem; font-weight: 400; color: var(--ink); display: block; }
        .footer-brand-sub { display: block; font-family: var(--sans); font-size: 0.7rem; color: var(--muted); margin-top: 2px; letter-spacing: 0.04em; }
        .footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .footer-link { font-size: 0.78rem; color: var(--muted); text-decoration: none; transition: color 0.2s; background: none; border: none; cursor: pointer; font-family: var(--sans); }
        .footer-link:hover { color: var(--gold); }
        .footer-copy { font-size: 0.72rem; color: var(--muted); }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
          .hero-image-wrap { order: -1; }
          .hero-image-ring { width: 220px; height: 220px; }
          .card-top { top: 10px; left: -10px; }
          .card-bottom { bottom: 10px; right: -10px; }
          .hero-float-card { min-width: 130px; padding: 0.6rem 0.8rem; }
          .pillars-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .snap-grid { grid-template-columns: 1fr; }
          .about-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .pillars-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .nav-links { display: none; }
          .hero-name { font-size: 2.5rem; }
          .cta-inner { flex-direction: column; text-align: center; }
          .collab-box { flex-direction: column; }
        }
      `}</style>

      <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="nav-brand" onClick={() => setCurrentPage('home')}>
            <span className="nav-brand-name">Vishakha Arora</span>
            <span className="nav-brand-sub">HR & Management Consultant</span>
          </button>
          <nav className="nav-links">
            {navLinks.map(l => (
              <button key={l.id} className={`nav-link${currentPage === l.id ? ' active' : ''}`} onClick={() => setCurrentPage(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="https://linkedin.com/in/aroravishakha" target="_blank" rel="noreferrer" className="nav-action-link"><ExternalLink size={17} /></a>
            <a href="mailto:arora.vishakha17@gmail.com" className="nav-action-link"><Mail size={17} /></a>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: currentPage === 'home' ? '0' : '68px' }}>
        {(pages[currentPage] || pages.home)()}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <span className="footer-brand-name">Vishakha Arora</span>
            <span className="footer-brand-sub">HR & General Management Consultant · Indore, India</span>
          </div>
          <div className="footer-links">
            {navLinks.map(l => (
              <button key={l.id} className="footer-link" onClick={() => setCurrentPage(l.id)}>{l.label}</button>
            ))}
            <a href="mailto:arora.vishakha17@gmail.com" className="footer-link">Contact</a>
          </div>
          <p className="footer-copy">© 2026 Vishakha Arora</p>
        </div>
      </footer>
    </div>
  );
}
