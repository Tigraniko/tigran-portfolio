import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const info = {
    name: "Tigran Saakian",
    email: "saakian.tiko@gmail.com",
    phone: "702-888-2086",
    linkedin: "https://linkedin.com/in/tigran-saakian",
    github: "https://github.com/Tigraniko",
    education: "West Career and Technical Academy 2026 (Cybersecurity Program)",
    certifications: [
      "CompTIA A+ - May 2025",
      "CompTIA Security+ - June 2025",
      "CompTIA Network+ - July 2025"
    ],
    experience: [
      "CyberPatriot: Platinum Team Leader - 2024/2025",
      "National Cyber League: Top 15% in the nation (2025)",
      "National Cyber League: Top 10% in High School Division (2025)"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="bg-purple-900 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white">Tigran Saakian</h1>
          <ul className="flex space-x-4">
            <li><button onClick={() => setCurrentPage('home')} className={`px-3 py-2 rounded ${currentPage === 'home' ? 'bg-purple-700' : ''}`}>Home</button></li>
            <li><button onClick={() => setCurrentPage('information')} className={`px-3 py-2 rounded ${currentPage === 'information' ? 'bg-purple-700' : ''}`}>Information</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className={`px-3 py-2 rounded ${currentPage === 'contact' ? 'bg-purple-700' : ''}`}>Contact</button></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto p-4 md:p-8">
        {currentPage === 'home' && (
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">Welcome to My Cybersecurity Portfolio</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              I'm Tigran Saakian, a high school student currently pursuing my studies in Cybersecurity at West Career and Technical Academy. 
              With a strong foundation in many IT and cybersecurity certifications, I'm passionate about what I do and solving the challenges that might come up.
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => setCurrentPage('information')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition duration-300">View My Achievements</button>
              <button onClick={() => setCurrentPage('contact')} className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded transition duration-300">Contact Me</button>
            </div>
          </section>
        )}

        {currentPage === 'information' && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-purple-300 border-b border-purple-700 pb-2">Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Education</h3>
                <p className="mb-4">{info.education}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Certifications</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {info.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Experience</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {info.experience.map((exp, index) => <li key={index}>{exp}</li>)}
                </ul>
              </div>
            </div>
          </section>
        )}

        {currentPage === 'contact' && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-purple-300 border-b border-purple-700 pb-2">Contact</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Get in Touch</h3>
              <div className="space-y-4">
                <p><strong>Email:</strong> <a href={`mailto:${info.email}`} className="text-purple-400 hover:underline">{info.email}</a></p>
                <p><strong>Phone:</strong> {info.phone}</p>
                <p><strong>LinkedIn:</strong> <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{info.linkedin}</a></p>
                <p><strong>GitHub:</strong> <a href={info.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{info.github}</a></p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-12 bg-gray-800 p-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Tigran Saakian. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
