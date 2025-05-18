import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header/Navigation */}
      <motion.header
        className="bg-dark-200 shadow-lg border-b border-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Siddharth Sharma</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-white">Experience</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-white">Education</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-dark-300 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">Siddharth Sharma</h2>
            <h3 className="text-2xl text-gray-400 mb-6">Software Developer</h3>
            <p className="text-gray-300 mb-8 max-w-md">
              A passionate and versatile software developer with experience in building and maintaining microservices, full-stack applications, and more.
              Proficient in C#, C++, JavaScript, Java, Typescript, HTML/CSS, Golang, Python, SQL, and Shell.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/sids278" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/siddharth-sharma" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:udays2002@gmail.com"
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition">
                <Mail size={20} />
              </a>
              {/* Removed Resume download button */}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-gray-800 rounded-full overflow-hidden ring-4 ring-primary">
              <img
                src="WhatsApp Image 2025-05-19 at 04.42.14.jpeg" // Replace with your profile image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-dark-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6">
              I am a recent graduate from Punjab Engineering College with a Bachelor of Technology in Computer Science.
              My passion lies in software development, and I am proficient in various programming languages and technologies including C#, C++, JavaScript,
              Java, Typescript, HTML/CSS, Golang, Python, SQL, and Shell.
            </p>
            <p className="text-gray-300 mb-6">
              I have hands-on experience in developing and maintaining microservices, building full-stack applications, and working with databases.
              I am eager to apply my skills and contribute to innovative projects in the software industry.
            </p>
            <p className="text-gray-300">
              I am a quick learner, a strong team player, and I am always looking for opportunities to expand my knowledge and take on new challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-dark-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Experience</h2>

          <div className="max-w-3xl mx-auto">
            {/* Experience Item 1 */}
            <div className="mb-12 bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Software Developer</h3>
                <span className="text-gray-400">June 2024 - Present</span>
              </div>
              <h4 className="text-lg text-primary mb-4">Pathlock, Chandigarh, India</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Developed and maintained microservices related to reporting, role management, and SoD (Segregation of Duties).</li>
                <li>Collaborated with cross-functional teams on the modernization of PLC to a newer ASP.NET Core architecture.</li>
                <li>Worked on infrastructure enhancement initiatives to improve scalability and reliability of the platform.</li>
                <li>Contributed to performance tuning to efficiently handle large datasets across heavily used application pages.</li>
                <li>Supported the Risks and Violations Assessment team by improving accuracy and performance of violation checks.</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="mb-12 bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Software Development Intern</h3>
                <span className="text-gray-400">January 2023 - May 2023</span>
              </div>
              <h4 className="text-lg text-primary mb-4">1K Networks, Gurgaon, Haryana</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Developed a MERN (MongoDB, Express.js, React, Node.js) application with a backend using Node Express and MongoDB for the database.</li>
                <li>Made the frontend using React and Redux for state handling for various components.</li>
                <li>Used Docker to build images and containerize the application.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-dark-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 */}
            <div className="bg-dark-300 rounded-lg shadow-lg overflow-hidden border border-gray-800">
              <div className="h-48 bg-gray-800">
                <img
                  src="https://via.placeholder.com/300" // Replace with project image
                  alt="Swagger Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Swagger Project</h3>
                <p className="text-gray-300 mb-4">
                  Developed a RESTful API using Node and Express, providing endpoints for CRUD operations on user data.
                  Integrated Swagger for comprehensive API documentation.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-purple-900 text-purple-200 text-xs rounded">Express.js</span>
                    <span className="px-2 py-1 bg-green-900 text-green-200 text-xs rounded">Swagger</span>
                  </div>
                  <a href="https://github.com/sids278" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
                    <GitHub size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-dark-300 rounded-lg shadow-lg overflow-hidden border border-gray-800">
              <div className="h-48 bg-gray-800">
                <img
                  src="https://via.placeholder.com/300" // Replace with project image
                  alt="Go URL Shortener"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Go URL Shortener</h3>
                <p className="text-gray-300 mb-4">
                  Built a URL shortener service using Golang, providing a simple and efficient way to shorten long URLs.
                  Utilized Redis for fast and efficient storage and retrieval of URL mappings.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded">Golang</span>
                    <span className="px-2 py-1 bg-purple-900 text-purple-200 text-xs rounded">Redis</span>
                    <span className="px-2 py-1 bg-green-900 text-green-200 text-xs rounded">Docker</span>
                  </div>
                  <a href="https://github.com/sids278" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
                    <GitHub size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-dark-300 rounded-lg shadow-lg overflow-hidden border border-gray-800">
              <div className="h-48 bg-gray-800">
                <img
                  src="https://via.placeholder.com/300" // Replace with project image
                  alt="Container Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Container Project</h3>
                <p className="text-gray-300 mb-4">
                  Containerized a Node.js REST API using Docker and deployed it using Docker Compose.
                  Built a basic CI/CD pipeline using GitHub Actions and deployed the application on AWS EC2 using Jenkins.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-purple-900 text-purple-200 text-xs rounded">Docker</span>
                    <span className="px-2 py-1 bg-green-900 text-green-200 text-xs rounded">AWS</span>
                  </div>
                  <a href="https://github.com/sids278" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
                    <GitHub size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/sids278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary transition"
            >
              <GitHub size={20} className="mr-2" />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-dark-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Skills</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Programming Languages */}
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>C#</li>
                  <li>C++</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Java</li>
                  <li>Golang</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>HTML/CSS</li>
                  <li>Shell</li>
                </ul>
              </div>

              {/* Frameworks & Libraries */}
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Frameworks & Libraries</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>ASP.NET</li>
                  <li>React</li>
                  <li>Spring</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Material-UI</li>
                  <li>ant-design</li>
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Tools & Technologies</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Redis</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD</li>
                  <li>SSMS</li>
                </ul>
              </div>

              {/* Soft Skills  (Can be added later if needed) */}
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Communication</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-16 bg-dark-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Education</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-300 p-8 rounded-lg shadow-lg border border-gray-800 mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Punjab Engineering College, Chandigarh</h3>
                <span className="text-gray-400">2020 - 2024</span>
              </div>
              <p className="text-lg text-primary mb-4">B.Tech in Computer Science and Engineering</p>
              <p className="text-gray-300 mb-4">CGPA: 8/10</p>
              <p className="text-gray-300">
                Relevant Coursework: Data Structures and Algorithms, Operating Systems, 
                Database Management Systems, Machine Learning, Computer Networks, 
                Software Engineering, Web Development
              </p>
            </div>
            
            <div className="bg-dark-300 p-8 rounded-lg shadow-lg border border-gray-800">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-white">ScholarsField Public School, Patiala</h3>
                <span className="text-gray-400">2018 - 2020</span>
              </div>
              <p className="text-lg text-primary mb-4">Higher Secondary Education</p>
              <p className="text-gray-300">
                Percentage: 95%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-dark-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-primary mr-3" size={20} />
                    <a href="mailto:udays2002@gmail.com" className="text-gray-300 hover:text-white">
                      udays2002@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <GitHub className="text-primary mr-3" size={20} />
                    <a href="https://github.com/sids278" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      github.com/sids278
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="text-primary mr-3" size={20} />
                    <a href="https://www.linkedin.com/in/siddharth-sharma-48ba80215/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                      linkedin.com/in/siddharth-sharma
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 bg-dark-300 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary transition w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-200 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Siddharth Sharma. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/sids278" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/siddharth-sharma-48ba80215/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:udays2002@gmail.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;