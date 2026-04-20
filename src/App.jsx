import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, Briefcase, BookOpen, Award, FileText, Download, ChevronRight, MapPin, ArrowRight, Users, BarChart3, Globe, TrendingUp, MessageSquare, CheckCircle2, GraduationCap, FlaskConical, Star, Building2, Zap, Target } from 'lucide-react';

// ── LOGO (restored original V-shape) ──────────────────────────────────────
const CustomLogo = () => (
  <svg viewBox="0 0 100 100" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78de0" />
        <stop offset="100%" stopColor="#5b3a9e" />
      </linearGradient>
    </defs>
    <path d="M15,20 L50,85 L85,20" stroke="url(#lg)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30,80 L50,35 L70,80" stroke="#1e1730" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="42" y1="65" x2="58" y2="65" stroke="#1e1730" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'research', label: 'Research' },
  ];

  // ── DATA ────────────────────────────────────────────────────────────────

  const services = [
    { icon: <Users size={26}/>, title: 'HR Consulting', color: '#7c5cbf',
      desc: 'SOPs, KRAs, talent acquisition frameworks, performance management, and HR policy architecture. Currently building HR systems at VM Management Consulting.',
      tags: ['SOPs & KRAs', 'Talent Strategy', 'HR Policy', 'Org Design'] },
    { icon: <Briefcase size={26}/>, title: 'General Management Advisory', color: '#9b5cbf',
      desc: 'Strategic advisory for leadership navigating growth and operational complexity — digitization of workflows, restructuring, and performance dashboards.',
      tags: ['Digitization', 'Strategic Planning', 'Operations', 'Change Management'] },
    { icon: <BarChart3 size={26}/>, title: 'HR & People Analytics', color: '#5c88bf',
      desc: 'Data-driven workforce insights using SPSS, Power BI, Tableau, and advanced Excel. Predictive attrition modeling and compensation benchmarking.',
      tags: ['SPSS', 'Power BI', 'Predictive Modeling', 'Workforce Analytics'] },
    { icon: <Globe size={26}/>, title: 'Digital Marketing (Client Vertical)', color: '#bf5c9b',
      desc: 'Managing digital marketing for construction and real estate clients under VM Consultancy — brand visibility, pipelines, and structured campaign operations.',
      tags: ['Brand Strategy', 'Campaign Management', 'Construction Clients', 'Growth Analytics'] },
    { icon: <TrendingUp size={26}/>, title: 'EdTech & Growth Strategy', color: '#7abfa8',
      desc: 'Strategic Growth Partner at Learning Panda — driving learner acquisition, institutional partnerships, and market expansion for this AI-driven EdTech startup.',
      tags: ['Go-to-Market', 'Partnerships', 'EdTech', 'Growth Strategy'] },
    { icon: <FlaskConical size={26}/>, title: 'Research & Analytics', color: '#a78de0',
      desc: 'Academic and applied research in HR analytics, sports management, and mental health in organizational contexts. Open to collaborations and white papers.',
      tags: ['Org Behavior', 'Sports HR', 'Mental Health', 'Data Analytics'] },
  ];

  const ventures = [
    { name: 'VM Management Consulting & Advisory', url: 'https://vijaymahnot.com/', role: 'Management Consulting Intern',
      color: '#7c5cbf', tag: 'Current Role',
      desc: 'Interning at VM Consultancy handling HR digitization, SOP creation, KRA frameworks, and strategic advisory. Construction and digital marketing clients are managed under this practice.',
      highlights: ['SOP & KRA Development', 'HR Digitization', 'Client: Construction Sector', 'Client: Digital Marketing'] },
    { name: 'Learning Panda', url: 'https://www.learningpanda.ai/', role: 'Strategic Growth Partner',
      color: '#5c88bf', tag: 'EdTech Startup',
      desc: 'Partnering with this AI-driven EdTech startup on market expansion, learner engagement strategy, and institutional partnerships.',
      highlights: ['Market Expansion', 'Partnership Development', 'Growth Strategy', 'EdTech Advisory'] },
    { name: 'Infosys BPM', url: null, role: 'Senior Process Executive (2023–2025)',
      color: '#9b5cbf', tag: 'Past Experience',
      desc: 'Validated 1,000+ U.S. mortgage documents weekly with consistent operational excellence. Streamlined workflows, trained 20+ joiners, and won multiple awards.',
      highlights: ['i-STAR Award', 'SPOT Award ×2', 'Workflow Optimization', '20+ Joiners Trained'] },
  ];

  const research = [
    { title: 'Mental Health in High-Performance Environments',
      venue: 'CERE 2026 — Accepted', status: 'Accepted',
      desc: 'Investigating psychological dimensions of high-performance organizational environments and their impact on sustained employee effectiveness. Accepted at CERE 2026.',
      tags: ['Mental Health', 'Org Psychology', 'High Performance'], highlight: true },
    { title: 'Sport, Sport and Business Conference 2.0',
      venue: 'Sports Management & HR Conference', status: 'Presented',
      desc: 'Presented research on sports management and human capital strategy at the Sport and Business Conference 2.0, exploring intersections of HR and athletic organizations.',
      tags: ['Sports HR', 'Sports Management', 'Human Capital'], highlight: true },
    { title: 'Strategic Human Capital in Indian Sports',
      venue: 'Unstop National Conference, 2025', status: 'Published',
      desc: 'Examined how sports organizations in India can leverage structured HR practices to build sustainable competitive advantage through human capital investment.',
      tags: ['HR Strategy', 'Sports Management', 'Human Capital'] },
  ];

  const highlights = [
    { icon: '∑', label: 'Mathematical Rigour', desc: 'M.Sc Mathematics — statistical thinking in every strategy.' },
    { icon: '♟', label: 'Strategic Acuity', desc: 'MBA (HRM) from IIM Indore — frameworks that deliver outcomes.' },
    { icon: '🤝', label: 'Human Centricity', desc: 'People are not variables. Every solution is built around them.' },
    { icon: '⚡', label: 'Execution Focus', desc: 'Beyond advice — to implementation, digitization, and impact.' },
  ];

  // ── PAGES ────────────────────────────────────────────────────────────────

  const renderHome = () => (
    <div>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-inner max-container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot" /> MBA (HRM) Candidate · IIM Indore · Open to Opportunities
              </div>
              <h1 className="hero-name">Vishakha Arora</h1>
              <p className="hero-tagline">A mathematician turned HR — where the precision of numbers meets the depth of human understanding.</p>
              <p className="hero-sub">HR & Management Consultant · Strategic Growth Partner · People Analytics Researcher</p>
              <div className="hero-location"><MapPin size={14}/> Indore, India</div>
              <div className="hero-ctas">
                <button onClick={() => setCurrentPage('services')} className="btn-primary">View Services <ArrowRight size={15}/></button>
                <a href="mailto:arora.vishakha17@gmail.com" className="btn-outline"><Mail size={15}/> Get in Touch</a>
                <a href="/Vishakha_Arora_HR_Resume.pdf" download className="btn-outline"><Download size={15}/> Resume</a>
              </div>
            </div>
            <div className="hero-image-wrap">
              <div className="hero-image-ring">
                <img src="/profile-pic.jpeg" alt="Vishakha Arora" className="hero-img"
                  onError={e => { e.target.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'; }}/>
              </div>
              <div className="hero-float-card card-top">
                <span className="float-icon">🎓</span>
                <div><div className="float-title">MBA (HRM)</div><div className="float-sub">IIM Indore · 2027</div></div>
              </div>
              <div className="hero-float-card card-bottom">
                <span className="float-icon">∑</span>
                <div><div className="float-title">M.Sc Mathematics</div><div className="float-sub">Univ. of Rajasthan</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATUS BANNER */}
      <div className="status-banner max-container">
        <div className="status-item"><span className="status-dot green"/><strong>Currently:</strong> MBA (HRM) Candidate — IIM Indore (Class of 2027)</div>
        <div className="status-divider"/>
        <div className="status-item"><span className="status-dot gold"/><strong>Interning at:</strong> VM Management Consulting & Advisory</div>
        <div className="status-divider"/>
        <div className="status-item"><span className="status-dot blue"/><strong>Open to:</strong> HR, Analytics & Strategy Roles · Consulting Projects</div>
      </div>

      {/* ABOUT SNAPSHOT */}
      <section className="about-snap max-container">
        <div className="about-snap-grid">
          <div className="about-snap-text">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title">A mathematician who chose people.</h2>
            <p className="about-para">My journey began with an M.Sc in Mathematics — deep pattern recognition, precision, and proof. But I've always been drawn to something harder to quantify: how people think, organize, and grow.</p>
            <p className="about-para">That tension led me to IIM Indore's MBA (HRM) program. Today I work at the intersection of data and humanity — building HR systems, analytics solutions, and growth strategies that put people at the center.</p>
            <p className="about-para" style={{color:'var(--gold)', fontStyle:'italic'}}>Currently pursuing MBA (HRM) at IIM Indore while actively interning and consulting — open to full-time HR, analytics, and strategy opportunities.</p>
            <div className="edu-chips">
              {[['🎓','MBA (HRM)','IIM Indore · 2027'],['∑','M.Sc Mathematics','Univ. of Rajasthan'],['🏆','Six Sigma Black Belt','Certified']].map(([i,d,s])=>(
                <div key={d} className="edu-chip"><span className="chip-icon">{i}</span><div><div className="chip-title">{d}</div><div className="chip-sub">{s}</div></div></div>
              ))}
            </div>
          </div>
          <div className="about-snap-right">
            {/* Infosys Card */}
            <div className="infosys-card">
              <div className="infosys-header">
                <Building2 size={22} color="#6b7eb5"/>
                <div>
                  <div className="infosys-title">Infosys BPM</div>
                  <div className="infosys-role">Senior Process Executive · Jan 2023 – May 2025</div>
                </div>
              </div>
              <p className="infosys-desc">28 months of operational excellence in US mortgage processing — validating 1,000+ documents weekly, streamlining workflows, and earning recognition for top-tier performance.</p>
              <div className="award-pills">
                <span className="award-pill gold-pill">🏆 i-STAR Award</span>
                <span className="award-pill">✨ SPOT Award ×2</span>
                <span className="award-pill">👥 Trained 20+ Joiners</span>
                <span className="award-pill">⚡ Workflow Optimization</span>
              </div>
            </div>
            {/* Pillars */}
            <div className="pillars-mini">
              {highlights.map(p=>(
                <div key={p.label} className="pillar-mini">
                  <span className="pillar-mini-icon">{p.icon}</span>
                  <div><div className="pillar-mini-label">{p.label}</div><div className="pillar-mini-desc">{p.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH HIGHLIGHTS */}
      <section className="research-snap max-container">
        <div className="section-header-row">
          <div><p className="section-eyebrow">Key Research & Presentations</p><h2 className="section-title">Spotlight</h2></div>
          <button onClick={() => setCurrentPage('research')} className="see-all-btn">View all research <ChevronRight size={13}/></button>
        </div>
        <div className="spotlight-grid">
          {research.filter(r=>r.highlight).map(r=>(
            <div key={r.title} className="spotlight-card">
              <span className={`research-status status-${r.status.toLowerCase().replace(' ','_')}`}>{r.status}</span>
              <h3 className="spotlight-title">{r.title}</h3>
              <p className="spotlight-venue">{r.venue}</p>
              <p className="spotlight-desc">{r.desc}</p>
              <div className="research-tags">{r.tags.map(t=><span key={t} className="research-tag">{t}</span>)}</div>
            </div>
          ))}
          {/* IIT Bombay card */}
          <div className="spotlight-card iit-card">
            <span className="research-status status-ongoing">Ongoing</span>
            <h3 className="spotlight-title">IIT Bombay Research Collaboration</h3>
            <p className="spotlight-venue">Workforce Dynamics & Organizational Behavior</p>
            <p className="spotlight-desc">Ongoing collaboration with IIT Bombay researchers — investigating culture, team dynamics, and performance outcomes across knowledge-intensive industries.</p>
            <div className="research-tags"><span className="research-tag">IIT Bombay</span><span className="research-tag">Org Behavior</span><span className="research-tag">Culture Analytics</span></div>
          </div>
        </div>
      </section>

      {/* MEDIA / EVENTS GALLERY */}
      <section className="media-section max-container">
        <p className="section-eyebrow">Presentations & Events</p>
        <h2 className="section-title">In Action</h2>
        <div className="media-grid">
          <div className="media-placeholder">
            <img src="/event-sport-conference.jpg" alt="Sport & Business Conference 2.0" className="media-real-img"
              onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
            <div className="media-inner" style={{display:'none'}}><FileText size={28} color="var(--gold)"/><p>Sport & Business Conference 2.0</p><span>Add photo/slide</span></div>
          </div>
          <div className="media-placeholder">
            <img src="/event-unstop-2025.jpg" alt="Unstop Conference 2025" className="media-real-img"
              onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
            <div className="media-inner" style={{display:'none'}}><Award size={28} color="var(--gold)"/><p>Unstop Conference 2025 — Paper Presentation</p><span>Add photo/slide</span></div>
          </div>
          <div className="media-placeholder">
            <img src="/event-cere-2026.jpg" alt="CERE 2026" className="media-real-img"
              onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
            <div className="media-inner" style={{display:'none'}}><GraduationCap size={28} color="var(--gold)"/><p>CERE 2026 — Mental Health Paper</p><span>Add photo/slide</span></div>
          </div>
          <div className="media-placeholder">
            <img src="/event-vm-consulting.jpg" alt="VM Consulting Events" className="media-real-img"
              onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
            <div className="media-inner" style={{display:'none'}}><Star size={28} color="var(--gold)"/><p>VM Consulting — Client Events</p><span>Add photo/slide</span></div>
          </div>
        </div>
        <p className="media-note">💡 Add your event photos to the <code>public/</code> folder with filenames like <code>event-sport-conference.jpg</code> — they'll appear automatically above.</p>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="max-container cta-inner">
          <div>
            <h2 className="cta-title">Open for Opportunities & Consultancy</h2>
            <p className="cta-sub">HR roles · Management consulting · Research partnerships · EdTech strategy · Analytics projects</p>
          </div>
          <a href="mailto:arora.vishakha17@gmail.com" className="btn-primary-dark"><MessageSquare size={15}/> Start a Conversation</a>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="page-section max-container">
      <p className="section-eyebrow">What I Offer</p>
      <h1 className="page-title">Services</h1>
      <p className="page-intro">Consulting engagements built around clarity, rigour, and real-world relevance. Each engagement is tailored, not templated.</p>
      <div className="services-grid">
        {services.map(s=>(
          <div key={s.title} className="service-card" style={{'--accent':s.color}}>
            <div className="service-icon" style={{color:s.color}}>{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-tags">{s.tags.map(t=><span key={t} className="service-tag">{t}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="engage-box">
        <h3 className="engage-title">Ready to engage?</h3>
        <p className="engage-sub">Available on project, retainer, and advisory basis — currently interning at VM Consultancy and open to side consulting engagements.</p>
        <a href="mailto:arora.vishakha17@gmail.com" className="btn-primary" style={{marginTop:'1.25rem',display:'inline-flex'}}><Mail size={15}/> Reach Out</a>
      </div>
      {/* Services Image Gallery */}
      <div style={{marginTop:'2.5rem'}}>
        <p className="section-eyebrow" style={{marginBottom:'.75rem'}}>Work in Action</p>
        <div className="media-grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
          {[['services-img1.jpg','Consulting Workshop'],['services-img2.jpg','HR Strategy Session'],['services-img3.jpg','Analytics Dashboard']].map(([src,alt])=>(
            <div key={src} className="media-placeholder">
              <img src={`/${src}`} alt={alt} className="media-real-img"
                onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
              <div className="media-inner" style={{display:'none'}}><FileText size={24} color="var(--gold)"/><p>{alt}</p><span>Add image</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVentures = () => (
    <div className="page-section max-container">
      <p className="section-eyebrow">Engagements & Experience</p>
      <h1 className="page-title">Ventures & Work</h1>
      <p className="page-intro">Current internship, past corporate experience, and active partnerships — each shaping a multidisciplinary consulting practice.</p>
      <div className="ventures-full-grid">
        {ventures.map(v=>(
          <div key={v.name} className="venture-card" style={{'--accent':v.color}}>
            <div className="venture-accent-bar"/>
            <div className="venture-body">
              <div className="venture-top-row">
                <span className="venture-tag-pill">{v.tag}</span>
                {v.url && <a href={v.url} target="_blank" rel="noreferrer" className="venture-link">Visit <ExternalLink size={11}/></a>}
              </div>
              <h3 className="venture-name">{v.name}</h3>
              <p className="venture-role">{v.role}</p>
              <p className="venture-desc">{v.desc}</p>
              <div className="venture-highlights">{v.highlights.map(h=><span key={h} className="venture-hl"><CheckCircle2 size={12}/> {h}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Ventures Image Gallery */}
      <div style={{marginTop:'2.5rem'}}>
        <p className="section-eyebrow" style={{marginBottom:'.75rem'}}>Moments & Milestones</p>
        <div className="media-grid">
          {[['ventures-img1.jpg','VM Consulting Work'],['ventures-img2.jpg','Learning Panda Partnership'],['ventures-img3.jpg','Infosys Recognition'],['ventures-img4.jpg','Team & Events']].map(([src,alt])=>(
            <div key={src} className="media-placeholder">
              <img src={`/${src}`} alt={alt} className="media-real-img"
                onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
              <div className="media-inner" style={{display:'none'}}><Briefcase size={24} color="var(--gold)"/><p>{alt}</p><span>Add image</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderResearch = () => (
    <div className="page-section max-container">
      <p className="section-eyebrow">Academic & Applied Work</p>
      <h1 className="page-title">Research</h1>
      <p className="page-intro">Research spanning mental health in organizations, sports HR, people analytics, and workforce dynamics — with active collaborations including IIT Bombay researchers. Open to co-authorship and research partnerships.</p>

      {/* IIT Bombay highlight */}
      <div className="iit-highlight-box">
        <div className="iit-inner">
          <div className="iit-badge">🔬 Research Collaboration</div>
          <h3 className="iit-title">IIT Bombay — Workforce Dynamics Research</h3>
          <p className="iit-desc">Actively collaborating with IIT Bombay researchers on organizational behavior, culture analytics, and team dynamics in knowledge-intensive industries. Synthesis draws on 100+ peer-reviewed journals.</p>
          <div className="research-tags" style={{marginTop:'0.75rem'}}><span className="research-tag">IIT Bombay</span><span className="research-tag">Org Behavior</span><span className="research-tag">Culture Analytics</span><span className="research-tag">Knowledge Work</span></div>
        </div>
      </div>

      <div className="research-list">
        {research.map(r=>(
          <div key={r.title} className={`research-card${r.highlight?' research-highlight':''}`}>
            <div className="research-header">
              <span className={`research-status status-${r.status.toLowerCase().replace(' ','_')}`}>{r.status}</span>
              <span className="research-venue">{r.venue}</span>
            </div>
            <h3 className="research-title">{r.title}</h3>
            <p className="research-desc">{r.desc}</p>
            <div className="research-tags">{r.tags.map(t=><span key={t} className="research-tag">{t}</span>)}</div>
          </div>
        ))}
      </div>

      <div className="collab-box">
        <FlaskConical size={22} className="collab-icon"/>
        <div>
          <h3 className="collab-title">Open to Research Collaboration</h3>
          <p className="collab-desc">Seeking co-authorship and research partnerships in HR analytics, sports management, mental health in organizations, and data-driven people strategy.</p>
          <a href="mailto:arora.vishakha17@gmail.com" className="btn-primary" style={{marginTop:'1rem',display:'inline-flex'}}><Mail size={14}/> Propose Collaboration</a>
        </div>
      </div>
      {/* Research Image Gallery */}
      <div style={{marginTop:'2.5rem'}}>
        <p className="section-eyebrow" style={{marginBottom:'.75rem'}}>Conference & Research Moments</p>
        <div className="media-grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
          {[['research-img1.jpg','Conference Presentation'],['research-img2.jpg','Research Session'],['research-img3.jpg','IIT Bombay Collaboration']].map(([src,alt])=>(
            <div key={src} className="media-placeholder">
              <img src={`/${src}`} alt={alt} className="media-real-img"
                onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}/>
              <div className="media-inner" style={{display:'none'}}><BookOpen size={24} color="var(--gold)"/><p>{alt}</p><span>Add image</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const pages = { home: renderHome, services: renderServices, ventures: renderVentures, research: renderResearch };

  return (
    <div className="site-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html,body,#root{width:100%;max-width:100%;overflow-x:hidden;background:#faf8ff!important;display:block!important;}
        :root{
          --gold:#7c5cbf;--gold-light:#a78de0;--gold-pale:#f0ebff;
          --ink:#1e1730;--ink-light:#3b3060;--muted:#7a6e99;
          --border:#ddd5f5;--bg:#faf8ff;--white:#ffffff;
          --pink:#9d50d4;--violet:#7c5cbf;
          --serif:'Cormorant Garamond',Georgia,serif;
          --sans:'DM Sans',system-ui,sans-serif;
        }
        .site-root{font-family:var(--sans);color:var(--ink);background:var(--bg);min-height:100vh;}
        .max-container{max-width:1160px;margin:0 auto;padding:0 2rem;}

        /* NAV */
        .site-nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(250,248,255,0.94);backdrop-filter:blur(12px);border-bottom:1px solid transparent;transition:border-color .3s,box-shadow .3s;}
        .site-nav.scrolled{border-bottom-color:var(--border);box-shadow:0 2px 20px rgba(0,0,0,.05);}
        .nav-inner{max-width:1160px;margin:0 auto;padding:0 2rem;height:64px;display:flex;align-items:center;justify-content:space-between;}
        .nav-brand{display:flex;align-items:center;gap:.6rem;cursor:pointer;background:none;border:none;text-align:left;}
        .nav-brand-name{font-family:var(--serif);font-size:1.15rem;font-weight:500;color:var(--ink);letter-spacing:.02em;line-height:1;}
        .nav-brand-sub{font-size:.65rem;color:var(--muted);letter-spacing:.07em;text-transform:uppercase;margin-top:1px;}
        .nav-links{display:flex;gap:.2rem;align-items:center;}
        .nav-link{font-size:.82rem;font-weight:500;padding:.4rem .8rem;border-radius:6px;background:none;border:none;cursor:pointer;color:var(--muted);transition:color .2s,background .2s;font-family:var(--sans);}
        .nav-link:hover{color:var(--ink);background:var(--gold-pale);}
        .nav-link.active{color:var(--ink);background:var(--gold-pale);}
        .nav-actions{display:flex;gap:.65rem;align-items:center;}
        .nav-action-link{color:var(--muted);transition:color .2s;display:flex;}
        .nav-action-link:hover{color:var(--gold);}

        /* HERO */
        .hero-section{padding-top:5rem;padding-bottom:2.5rem;background:linear-gradient(135deg,#faf8ff 0%,#ede5ff 100%);}
        .hero-inner{padding-top:2rem;}
        .hero-grid{display:grid;grid-template-columns:1fr 400px;gap:3.5rem;align-items:center;}
        .hero-badge{display:inline-flex;align-items:center;gap:.45rem;padding:.3rem .85rem;background:var(--gold-pale);border:1px solid var(--gold-light);border-radius:100px;font-size:.72rem;font-weight:500;color:var(--ink-light);margin-bottom:1.25rem;}
        .badge-dot{width:7px;height:7px;border-radius:50%;background:#7abfa8;flex-shrink:0;animation:pulse 2s infinite;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        .hero-name{font-family:var(--serif);font-size:clamp(2.5rem,5vw,4.2rem);font-weight:400;color:var(--ink);line-height:1.08;margin-bottom:1rem;}
        .hero-tagline{font-family:var(--serif);font-size:clamp(1rem,1.8vw,1.2rem);font-style:italic;color:var(--gold);line-height:1.5;margin-bottom:.75rem;font-weight:300;}
        .hero-sub{font-size:.85rem;color:var(--muted);margin-bottom:1rem;letter-spacing:.01em;}
        .hero-location{display:flex;align-items:center;gap:.35rem;font-size:.78rem;color:var(--muted);margin-bottom:1.5rem;}
        .hero-ctas{display:flex;gap:.75rem;flex-wrap:wrap;}
        .btn-primary{display:inline-flex;align-items:center;gap:.4rem;padding:.65rem 1.35rem;background:var(--ink);color:var(--white);border-radius:8px;font-size:.82rem;font-weight:500;font-family:var(--sans);border:none;cursor:pointer;transition:background .2s,transform .2s;text-decoration:none;}
        .btn-primary:hover{background:var(--gold);transform:translateY(-1px);}
        .btn-outline{display:inline-flex;align-items:center;gap:.4rem;padding:.65rem 1.35rem;background:transparent;color:var(--ink);border:1.5px solid var(--border);border-radius:8px;font-size:.82rem;font-weight:500;font-family:var(--sans);cursor:pointer;transition:border-color .2s,background .2s;text-decoration:none;}
        .btn-outline:hover{border-color:var(--gold);background:var(--gold-pale);}
        .hero-image-wrap{position:relative;display:flex;align-items:center;justify-content:center;}
        .hero-image-ring{width:300px;height:300px;border-radius:50%;background:linear-gradient(135deg,var(--gold-pale),var(--border));padding:5px;box-shadow:0 16px 50px rgba(124,92,191,.22);}
        .hero-img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;}
        .hero-float-card{position:absolute;background:var(--white);border:1px solid var(--border);border-radius:12px;padding:.65rem .9rem;display:flex;align-items:center;gap:.55rem;box-shadow:0 8px 24px rgba(0,0,0,.08);min-width:150px;}
        .card-top{top:20px;left:-20px;}
        .card-bottom{bottom:20px;right:-20px;}
        .float-icon{font-family:var(--serif);font-size:1.3rem;color:var(--gold);}
        .float-title{font-size:.75rem;font-weight:600;color:var(--ink);}
        .float-sub{font-size:.65rem;color:var(--muted);margin-top:1px;}

        /* STATUS BANNER */
        .status-banner{display:flex;align-items:center;gap:1.5rem;padding:1rem 2rem;background:var(--white);border:1px solid var(--border);border-radius:14px;margin:1.5rem auto;flex-wrap:wrap;}
        .status-item{display:flex;align-items:center;gap:.5rem;font-size:.8rem;color:var(--ink-light);}
        .status-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
        .status-dot.green{background:#7abfa8;}
        .status-dot.gold{background:var(--gold);}
        .status-dot.blue{background:#a78de0;}
        .status-divider{width:1px;height:24px;background:var(--border);}

        /* ABOUT SNAP */
        .about-snap{padding:2.5rem 2rem;}
        .about-snap-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start;}
        .section-eyebrow{font-size:.7rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:.75rem;}
        .section-title{font-family:var(--serif);font-size:clamp(1.6rem,3.5vw,2.2rem);font-weight:400;color:var(--ink);line-height:1.15;margin-bottom:1rem;}
        .about-para{font-size:.88rem;color:var(--muted);line-height:1.75;margin-bottom:.9rem;}
        .edu-chips{display:flex;flex-direction:column;gap:.6rem;margin-top:1.25rem;}
        .edu-chip{display:flex;align-items:center;gap:.75rem;background:var(--white);border:1px solid var(--border);border-radius:10px;padding:.6rem .9rem;}
        .chip-icon{font-size:1.1rem;font-family:var(--serif);color:var(--gold);}
        .chip-title{font-size:.82rem;font-weight:600;color:var(--ink);}
        .chip-sub{font-size:.7rem;color:var(--muted);}
        .about-snap-right{display:flex;flex-direction:column;gap:1.25rem;}

        /* INFOSYS CARD */
        .infosys-card{background:linear-gradient(135deg,#2a1a4a,#3d2d6b);border-radius:16px;padding:1.5rem;color:var(--white);}
        .infosys-header{display:flex;align-items:flex-start;gap:.75rem;margin-bottom:.85rem;}
        .infosys-title{font-family:var(--serif);font-size:1.15rem;font-weight:500;color:var(--white);line-height:1;}
        .infosys-role{font-size:.72rem;color:rgba(255,255,255,.65);margin-top:2px;}
        .infosys-desc{font-size:.8rem;color:rgba(255,255,255,.8);line-height:1.65;margin-bottom:1rem;}
        .award-pills{display:flex;flex-wrap:wrap;gap:.4rem;}
        .award-pill{font-size:.68rem;padding:.25rem .6rem;border-radius:100px;background:rgba(255,255,255,.12);color:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.2);}
        .gold-pill{background:rgba(124,92,191,.3);border-color:rgba(124,92,191,.5);}

        /* PILLARS MINI */
        .pillars-mini{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;}
        .pillar-mini{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:.9rem;display:flex;gap:.6rem;align-items:flex-start;}
        .pillar-mini-icon{font-family:var(--serif);font-size:1.3rem;color:var(--gold);line-height:1;flex-shrink:0;}
        .pillar-mini-label{font-size:.78rem;font-weight:600;color:var(--ink);margin-bottom:2px;}
        .pillar-mini-desc{font-size:.68rem;color:var(--muted);line-height:1.5;}

        /* RESEARCH SNAP */
        .research-snap{padding:2rem 2rem;}
        .section-header-row{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:1.25rem;}
        .see-all-btn{display:flex;align-items:center;gap:.25rem;font-size:.78rem;font-weight:500;color:var(--gold);background:none;border:none;cursor:pointer;font-family:var(--sans);}
        .spotlight-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem;}
        .spotlight-card{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:1.4rem;}
        .spotlight-title{font-family:var(--serif);font-size:1.05rem;font-weight:500;color:var(--ink);margin:.5rem 0 .3rem;line-height:1.35;}
        .spotlight-venue{font-size:.72rem;color:var(--muted);margin-bottom:.6rem;}
        .spotlight-desc{font-size:.78rem;color:var(--muted);line-height:1.6;margin-bottom:.75rem;}
        .iit-card{background:linear-gradient(135deg,#f0ebff,#e8e0f7);border-color:#c5b5e8;}

        /* MEDIA */
        .media-section{padding:2rem 2rem;}
        .media-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin:1.25rem 0 1rem;}
        .media-placeholder{background:var(--white);border:2px dashed var(--border);border-radius:14px;aspect-ratio:4/3;overflow:hidden;transition:border-color .2s;}
        .media-placeholder:hover{border-color:var(--gold);}
        .media-inner{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:.5rem;padding:1rem;text-align:center;}
        .media-inner p{font-size:.75rem;font-weight:500;color:var(--ink-light);line-height:1.4;}
        .media-inner span{font-size:.65rem;color:var(--muted);}
        .media-note{font-size:.72rem;color:var(--muted);background:var(--gold-pale);border-radius:8px;padding:.6rem 1rem;}
        .media-note code{background:rgba(0,0,0,.06);padding:.1rem .3rem;border-radius:3px;font-size:.68rem;}
        .media-real-img{width:100%;height:100%;object-fit:cover;display:block;border-radius:12px;}

        /* CTA */
        .cta-band{background:var(--ink);padding:2.5rem 2rem;margin-top:1rem;}
        .cta-inner{display:flex;justify-content:space-between;align-items:center;gap:2rem;flex-wrap:wrap;max-width:1160px;margin:0 auto;}
        .cta-title{font-family:var(--serif);font-size:1.6rem;font-weight:400;color:var(--white);margin-bottom:.3rem;}
        .cta-sub{font-size:.82rem;color:rgba(255,255,255,.55);}
        .btn-primary-dark{display:inline-flex;align-items:center;gap:.5rem;padding:.7rem 1.5rem;background:var(--gold);color:var(--white);border-radius:8px;font-size:.82rem;font-weight:500;font-family:var(--sans);border:none;cursor:pointer;text-decoration:none;flex-shrink:0;}
        .btn-primary-dark:hover{background:var(--gold-light);}

        /* PAGE SECTIONS */
        .page-section{padding:5.5rem 2rem 4rem;}
        .page-title{font-family:var(--serif);font-size:clamp(2rem,4.5vw,3rem);font-weight:400;color:var(--ink);line-height:1.1;margin-bottom:1rem;}
        .page-intro{font-size:.92rem;color:var(--muted);line-height:1.75;max-width:700px;margin-bottom:3rem;}

        /* SERVICES */
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-bottom:2.5rem;}
        .service-card{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:1.6rem;position:relative;overflow:hidden;transition:box-shadow .2s,transform .2s;}
        .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--accent,var(--gold));}
        .service-card:hover{box-shadow:0 10px 32px rgba(0,0,0,.08);transform:translateY(-2px);}
        .service-icon{margin-bottom:1rem;}
        .service-title{font-family:var(--serif);font-size:1.1rem;font-weight:500;color:var(--ink);margin-bottom:.7rem;line-height:1.3;}
        .service-desc{font-size:.8rem;color:var(--muted);line-height:1.7;margin-bottom:1rem;}
        .service-tags{display:flex;flex-wrap:wrap;gap:.35rem;}
        .service-tag{font-size:.65rem;padding:.22rem .55rem;background:var(--gold-pale);color:var(--ink-light);border-radius:4px;font-weight:500;}
        .engage-box{background:var(--ink);border-radius:18px;padding:2.5rem;text-align:center;}
        .engage-title{font-family:var(--serif);font-size:1.6rem;font-weight:400;color:var(--white);margin-bottom:.4rem;}
        .engage-sub{font-size:.82rem;color:rgba(255,255,255,.55);}

        /* VENTURES */
        .ventures-full-grid{display:flex;flex-direction:column;gap:1.25rem;}
        .venture-card{background:var(--white);border:1px solid var(--border);border-radius:14px;overflow:hidden;display:flex;transition:box-shadow .2s;}
        .venture-card:hover{box-shadow:0 8px 28px rgba(0,0,0,.07);}
        .venture-accent-bar{width:4px;flex-shrink:0;background:var(--accent,var(--gold));}
        .venture-body{padding:1.5rem;flex:1;}
        .venture-top-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;}
        .venture-tag-pill{font-size:.65rem;letter-spacing:.07em;text-transform:uppercase;font-weight:600;color:var(--accent,var(--gold));}
        .venture-name{font-family:var(--serif);font-size:1.25rem;font-weight:500;color:var(--ink);margin-bottom:.25rem;}
        .venture-role{font-size:.78rem;font-weight:500;color:var(--muted);margin-bottom:.75rem;}
        .venture-desc{font-size:.82rem;color:var(--muted);line-height:1.7;margin-bottom:.85rem;max-width:700px;}
        .venture-link{display:inline-flex;align-items:center;gap:.3rem;font-size:.72rem;font-weight:500;color:var(--accent,var(--gold));text-decoration:none;}
        .venture-highlights{display:flex;flex-wrap:wrap;gap:.4rem;}
        .venture-hl{display:flex;align-items:center;gap:.3rem;font-size:.72rem;color:var(--ink-light);background:var(--gold-pale);padding:.25rem .6rem;border-radius:100px;}

        /* RESEARCH */
        .iit-highlight-box{background:linear-gradient(135deg,#f0ebff,#e8e0f7);border:1px solid #c5b5e8;border-radius:16px;padding:1.75rem;margin-bottom:2rem;}
        .iit-inner{}
        .iit-badge{display:inline-flex;font-size:.72rem;font-weight:600;color:#6b3eab;background:#e8d9ff;padding:.3rem .75rem;border-radius:100px;margin-bottom:.75rem;}
        .iit-title{font-family:var(--serif);font-size:1.25rem;font-weight:500;color:var(--ink);margin-bottom:.5rem;}
        .iit-desc{font-size:.83rem;color:var(--muted);line-height:1.7;}
        .research-list{display:flex;flex-direction:column;gap:1rem;margin-bottom:2rem;}
        .research-card{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:1.5rem;transition:box-shadow .2s;}
        .research-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.06);}
        .research-highlight{border-color:var(--gold-light);background:linear-gradient(135deg,var(--white),#fffbf7);}
        .research-header{display:flex;align-items:center;gap:.85rem;margin-bottom:.75rem;flex-wrap:wrap;}
        .research-status{font-size:.65rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:.22rem .6rem;border-radius:100px;}
        .status-published,.status-presented{background:#e6f4ee;color:#2d7a57;}
        .status-completed{background:var(--gold-pale);color:var(--gold);}
        .status-ongoing{background:#ede5ff;color:#6b3eab;}
        .status-accepted{background:#fce7f3;color:#9d174d;}
        .research-venue{font-size:.75rem;color:var(--muted);}
        .research-title{font-family:var(--serif);font-size:1.15rem;font-weight:500;color:var(--ink);margin-bottom:.6rem;line-height:1.35;}
        .research-desc{font-size:.8rem;color:var(--muted);line-height:1.7;margin-bottom:.9rem;}
        .research-tags{display:flex;flex-wrap:wrap;gap:.35rem;}
        .research-tag{font-size:.65rem;padding:.22rem .55rem;background:var(--gold-pale);color:var(--ink-light);border-radius:4px;font-weight:500;}
        .collab-box{background:var(--gold-pale);border:1px solid var(--gold-light);border-radius:18px;padding:2rem;display:flex;gap:1.25rem;align-items:flex-start;}
        .collab-icon{color:var(--gold);flex-shrink:0;margin-top:3px;}
        .collab-title{font-family:var(--serif);font-size:1.2rem;font-weight:500;color:var(--ink);margin-bottom:.4rem;}
        .collab-desc{font-size:.8rem;color:var(--muted);line-height:1.7;}

        /* FOOTER */
        .site-footer{border-top:1px solid var(--border);padding:2rem 2rem;background:var(--white);}
        .footer-inner{max-width:1160px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:2rem;flex-wrap:wrap;}
        .footer-brand-name{font-family:var(--serif);font-size:1rem;font-weight:400;color:var(--ink);display:block;}
        .footer-brand-sub{display:block;font-family:var(--sans);font-size:.65rem;color:var(--muted);margin-top:2px;letter-spacing:.04em;}
        .footer-links{display:flex;gap:1.25rem;flex-wrap:wrap;}
        .footer-link{font-size:.75rem;color:var(--muted);text-decoration:none;transition:color .2s;background:none;border:none;cursor:pointer;font-family:var(--sans);}
        .footer-link:hover{color:var(--gold);}
        .footer-copy{font-size:.68rem;color:var(--muted);}

        /* RESPONSIVE */
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr;gap:2rem;}
          .hero-image-wrap{order:-1;}
          .hero-image-ring{width:200px;height:200px;}
          .card-top{top:8px;left:-8px;}
          .card-bottom{bottom:8px;right:-8px;}
          .about-snap-grid{grid-template-columns:1fr;}
          .services-grid{grid-template-columns:1fr 1fr;}
          .spotlight-grid{grid-template-columns:1fr 1fr;}
          .media-grid{grid-template-columns:1fr 1fr;}
          .pillars-mini{grid-template-columns:1fr;}
          .status-banner{flex-direction:column;align-items:flex-start;gap:.75rem;}
          .status-divider{display:none;}
        }
        @media(max-width:600px){
          .services-grid{grid-template-columns:1fr;}
          .spotlight-grid{grid-template-columns:1fr;}
          .media-grid{grid-template-columns:1fr 1fr;}
          .nav-links{display:none;}
          .cta-inner{flex-direction:column;text-align:center;}
        }
      `}</style>

      {/* NAV */}
      <header className={`site-nav${scrolled?' scrolled':''}`}>
        <div className="nav-inner">
          <button className="nav-brand" onClick={() => setCurrentPage('home')}>
            <CustomLogo/>
            <div>
              <span className="nav-brand-name">Vishakha Arora</span>
              <span className="nav-brand-sub">HR & Management Consultant</span>
            </div>
          </button>
          <nav className="nav-links">
            {navLinks.map(l=>(
              <button key={l.id} className={`nav-link${currentPage===l.id?' active':''}`} onClick={()=>setCurrentPage(l.id)}>{l.label}</button>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="https://linkedin.com/in/aroravishakha" target="_blank" rel="noreferrer" className="nav-action-link"><ExternalLink size={16}/></a>
            <a href="mailto:arora.vishakha17@gmail.com" className="nav-action-link"><Mail size={16}/></a>
          </div>
        </div>
      </header>

      <main style={{paddingTop: currentPage==='home'?'0':'64px'}}>
        {(pages[currentPage]||pages.home)()}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <span className="footer-brand-name">Vishakha Arora</span>
            <span className="footer-brand-sub">HR & Management Consultant · IIM Indore MBA (HRM) · Indore, India</span>
          </div>
          <div className="footer-links">
            {navLinks.map(l=><button key={l.id} className="footer-link" onClick={()=>setCurrentPage(l.id)}>{l.label}</button>)}
            <a href="mailto:arora.vishakha17@gmail.com" className="footer-link">Contact</a>
            <a href="/Vishakha_Arora_HR_Resume.pdf" download className="footer-link">Resume</a>
          </div>
          <p className="footer-copy">© 2026 Vishakha Arora</p>
        </div>
      </footer>
    </div>
  );
}
