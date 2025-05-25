import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const placeholderImg = "/assets/profile_cropped.png";

const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <div className="max-w-4xl mx-auto text-center">
      <img src={placeholderImg} alt="Profile" className="rounded-full w-48 h-48 mx-auto mb-4" />
      <h1 className="text-4xl font-bold">Ambesh Tiwari</h1>
      <p className="text-lg mt-2 text-gray-300">Enthusiast Problem Solver & Tech Innovator</p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
           className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Download Resume</a>
        <Link to="/contact" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Get in Touch</Link>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300">
        I'm a Software Engineer currently working at Amazon, with past experience at Google and Zappos. I specialize in large-scale system design, backend architecture, and high-throughput services. I hold a B.Tech. in Computer Science and Engineering from HBTU Kanpur.
      </p>
    </div>
  </div>
);

const Experience = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {[
        {
          role: "SDE II",
          company: "Amazon",
          duration: "Oct 2022 - Present",
          points: [
            "Built high-throughput Ads ingestion service",
            "Reduced Ad moderation effort by 7% via global content reuse",
            "Led stress testing and throttling for scalable services",
          ],
        },
        {
          role: "Software Engineer",
          company: "Google",
          duration: "Feb 2022 - Oct 2022",
          points: [
            "Built downtime management for credit instruments",
            "Integrated CIBIL-based credit scoring into GPay",
          ],
        },
        {
          role: "SDE",
          company: "Zappos",
          duration: "Jan 2020 - Feb 2022",
          points: [
            "Architected IMDb timecoded data system",
            "Created image publishing pipelines with AWS stack",
          ],
        },
      ].map(({ role, company, duration, points }) => (
        <div key={company} className="mb-6 p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{role} @ {company}</h3>
          <p className="text-sm text-gray-400 mb-2">{duration}</p>
          <ul className="list-disc list-inside text-gray-300">
            {points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p>Email: <a href="mailto:ambesht0@gmail.com" className="text-blue-400">ambesht0@gmail.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/ambesh1" className="text-blue-400">linkedin.com/in/ambesh1</a></p>
      <p>GitHub: <a href="https://github.com/ambesh123" className="text-blue-400">github.com/ambesh123</a></p>
    </div>
  </div>
);

const App = () => (
  <Router>
    <nav className="bg-gray-950 p-4 text-white flex justify-center gap-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
