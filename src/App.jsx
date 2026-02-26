import React, { useState } from 'react';
import { Mail, ExternalLink, Briefcase, BookOpen, Award, FileText, Download, ChevronRight, MapPin, User } from 'lucide-react';

// --- Custom Logo ---
const CustomLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#db2777" /> {/* Pink 600 */}
        <stop offset="100%" stopColor="#7c3aed" /> {/* Violet 600 */}
      </linearGradient>
    </defs>
    {/* Geometric V */}
    <path d="M15,20 L50,85 L85,20" stroke="url(#logoGradLight)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Intersecting A */}
    <path d="M30,80 L50,35 L70,80" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="42" y1="65" x2="58" y2="65" stroke="#1e293b" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export default function App() {
  // State to manage which "page" is currently active
  const [currentPage, setCurrentPage] = useState('home');

  // --- PAGE 1: HOME PAGE ---
  const renderHome = () => (
    <div className="animate-in fade-in duration-500">
      
      {/* 1. COVER PICTURE SECTION */}
      {/* TO ADD YOUR COVER PIC: Replace the 'src' URL below with your image link */}
      <div className="w-full h-64 md:h-80 lg:h-96 relative bg-slate-200 overflow-hidden border-b border-slate-200">
        <img 
          src="/cover-pic.jpg" 
          alt="Cover Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Optional overlay gradient to make text on top readable if you add any */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative -mt-24 sm:-mt-32 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
          
          {/* 2. YOUR PROFILE PICTURE */}
          {/* TO ADD YOUR PHOTO: Replace the 'src' URL below with your image link */}
          <div className="relative p-1 bg-white rounded-full shadow-lg">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-slate-100 border-4 border-white relative flex items-center justify-center">
               <img 
                 src="/profile-pic.jpg"
                 alt="Vishakha Arora" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 pb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              Vishakha Arora
            </h1>
            <p className="text-xl text-pink-600 font-medium mb-4 flex items-center gap-2">
              <User size={20}/> MBA (HRM) Candidate
            </p>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-6">
              Over 2 years of experience driving process leadership, HR analytics, and operational excellence at Infosys. Currently pursuing my MBA in HR at IIM Indore.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => setCurrentPage('resume')}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-violet-600 hover:from-pink-700 hover:to-violet-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-pink-500/20"
              >
                View Full Resume <ChevronRight size={18} />
              </button>
              <a href="mailto:arora.vishakha17@gmail.com" className="flex items-center gap-2 bg-white text-slate-700 px-6 py-2.5 rounded-full font-medium transition-all border border-slate-300 hover:border-slate-400 hover:bg-slate-50">
                Contact Me <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats/Highlights */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600 flex items-center gap-2"><MapPin size={16} className="text-pink-500"/> Indore, India</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Experience</h3>
            <p className="text-slate-600">28 Months • Process Leadership & Analytics</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Education</h3>
            <p className="text-slate-600">IIM Indore (Class of 2027)</p>
          </div>
        </div>
      </div>
    </div>
  );

  // --- PAGE 2: RESUME PAGE ---
  const renderResume = () => (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 py-12">
      
      {/* Resume Header & DOWNLOAD BUTTON */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Interactive Resume</h1>
          <p className="text-slate-500 mt-1">Detailed overview of my professional journey.</p>
        </div>
        
        {/* TO ADD DOWNLOAD LINK: Change href to the path of your PDF (e.g., href="/Vishakha_Arora_Resume.pdf") */}
        <a 
          href="/Vishakha_Arora_HR_Resume.pdf" 
          download="Vishakha_Arora_Resume.pdf"
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
        >
          <Download size={18} /> Download PDF
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Work Experience */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-100 text-pink-600 rounded-xl">
              <Briefcase size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-slate-100">
              <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-lg font-semibold text-slate-900">Senior Process Executive</h3>
              <p className="text-pink-600 font-medium text-sm mb-3">Infosys BPM, Jaipur • Jan 2023 - May 2025</p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-outside ml-4">
                <li>Validated 1,000+ U.S. mortgage documents weekly with 99.5% accuracy.</li>
                <li>Streamlined workflows improving turnaround time by 18%.</li>
                <li>Delivered structured training to 20+ new joiners.</li>
                <li><strong className="text-slate-800">Awards:</strong> i-STAR Award & SPOT Awards twice for operations excellence.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Internships & Projects */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
              <FileText size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Internships & Projects</h2>
          </div>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-slate-100 pb-6">
              <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-lg font-semibold text-slate-900">Research Analytics Intern</h3>
              <p className="text-violet-600 font-medium text-sm mb-3">Kreative Kode • Nov 2025 - Feb 2026</p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-outside ml-4">
                <li>Prepared 15+ research reports and reviewed 100+ journals to map people, processes, and policies.</li>
              </ul>
            </div>
            <div className="relative pl-6 border-l-2 border-slate-100">
              <div className="absolute w-3 h-3 bg-violet-500 rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-lg font-semibold text-slate-900">MBA HR Course Projects</h3>
              <p className="text-violet-600 font-medium text-sm mb-3">IIM Indore</p>
              <ul className="space-y-2 text-sm text-slate-600 list-disc list-outside ml-4">
                <li><strong>HR Analytics:</strong> Used SPSS, Power BI, and Tableau to predict job satisfaction.</li>
                <li><strong>Talent Acquisition:</strong> Applied psychometric instrumentation and hypothesis testing.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-pink-100 text-pink-600 rounded-xl">
              <BookOpen size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-slate-900 font-semibold">MBA (HRM)</h3>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-600">IIM Indore</span>
                <span className="text-pink-600 font-medium">Class of 2027</span>
              </div>
            </div>
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-slate-900 font-semibold">B.Ed</h3>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-600">Univ. of Rajasthan</span>
                <span className="text-slate-500">79.00% • 2021</span>
              </div>
            </div>
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-slate-900 font-semibold">M.Sc Maths</h3>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-600">Univ. of Rajasthan</span>
                <span className="text-slate-500">60.00% • 2019</span>
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold">B.Sc</h3>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-600">Univ. of Rajasthan</span>
                <span className="text-slate-500">73.11% • 2017</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Achievements */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-violet-100 text-violet-600 rounded-xl">
              <Award size={28} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">Skills & Awards</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-slate-900 font-semibold mb-3">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {['HR Analytics', 'Talent Acquisition', 'Performance Management', 'SPSS', 'Power BI', 'Tableau'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-slate-900 font-semibold mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {['Six Sigma Black Belt', 'Cultural Intelligence', 'Behavioral Essentials'].map((cert) => (
                  <span key={cert} className="px-3 py-1.5 bg-violet-50 text-violet-700 rounded-lg text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold mb-2">Achievements</h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-outside ml-4">
                <li>Ranked Top 10 in B.Ed (Batch of 80); Top 1% in Class X.</li>
                <li>INSPIRE Scholarship recipient (Dept. of Science & Technology).</li>
                <li>Presented Research Paper "Strategic Human Capital in Indian Sports" (Unstop 2025).</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-pink-100 selection:text-pink-900">
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <CustomLogo />
            <span className="text-slate-900 font-bold text-lg tracking-wide">Vishakha Arora</span>
          </div>
          
          <nav className="flex items-center gap-2 sm:gap-6">
            {/* Page Tabs */}
            <button 
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${currentPage === 'home' ? 'text-pink-600 bg-pink-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('resume')}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${currentPage === 'resume' ? 'text-pink-600 bg-pink-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              Resume
            </button>
            
            <div className="w-px h-6 bg-slate-200 mx-2 hidden sm:block"></div>
            
            {/* Social Links */}
            <a href="https://linkedin.com/in/aroravishakha" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-colors" title="LinkedIn">
              <ExternalLink size={20} />
            </a>
            <a href="mailto:arora.vishakha17@gmail.com" className="text-slate-400 hover:text-pink-600 transition-colors" title="Email">
              <Mail size={20} />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area (Switches based on state) */}
      <main>
        {currentPage === 'home' ? renderHome() : renderResume()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 mt-12 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <CustomLogo />
          <p className="mt-4">© 2026 Vishakha Arora. All rights reserved.</p>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/in/aroravishakha" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href="mailto:arora.vishakha17@gmail.com" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
