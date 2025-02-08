import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, FileDown, User, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentProject, setCurrentProject] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="gradient-text">Krish Patel</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            Full Stack Developer & Problem Solver
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a
            href="#about"
            className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <User size={32} className="text-indigo-600 mr-3" />
            <h2 className="section-heading">About Me</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <p className="bio-text mb-6">
                I'm Krish Patel, an AI-driven Systems Engineer specializing in cloud infrastructure and automation. 
                With a Master’s in Electrical & Computer Engineering from WPI, I focus on integrating AI into Systems Engineering.
              </p>
              <p className="bio-text mb-6">
                My experience includes AI research at Draper, cloud architecture at ArcField, and network monitoring solutions at AbbVie. 
                I’ve worked with AWS, Azure, Kubernetes, and LLMs to develop scalable, intelligent solutions.
              </p>
              <p className="bio-text">
                Certified in AWS, Azure, and Kubernetes, I thrive on solving complex challenges, optimizing workflows, and pushing 
                the boundaries of AI-driven automation.
              </p>
            </div>

            {/* Resume Download Section */}
            <div className="mt-12 text-center">
              <a
                href="Downloads/Resume_Krish_2025_v1.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 animate-float"
              >
                <FileDown className="mr-2" size={20} />
                Download Resume
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Get a detailed look at my experience and qualifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
              <div className="relative">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">{projects[currentProject].title}</h3>
                  <p className="text-lg mb-4">{projects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentProject].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={projects[currentProject].link}
                    target="_blank"  // Opens link in a new tab
                    rel="noopener noreferrer"  // Security best practice
                    className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentProject ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-center font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:2021kpatel@gmail.com?subject=[Reached out via Website]: "
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Krish Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Sample Data
const projects = [
  {
    title: "Smart Wearable Soccer Vest",
    description: "This smart wearable tracks biometrics in soccer athletes to prevent overexertion and optimize performance.",
    image: "soccer.jpg",
    tags: ["Python", "Hardware Design", "Data Analytics", "MATLAB"],
    link: "https://digital.wpi.edu/concern/student_works/sj1395727?locale=en"
  },
  {
    title: "Customer Transaction Prediction with Machine Learning",
    description: "This project builds a binary classification model to predict whether a customer will make a transaction using Santander’s anonymized behavioral data, enabling better customer engagement and retention strategies.",
    image: "santander.jpg",
    tags: ["Machine Learning", "Python", "Classification", "Predictive Modeling"],
    link: "https://github.com/krishpatel1077/cs548projects/blob/main/cs548proj2.ipynb"
  },
  {
    title: "AI-Powered Real Estate Price Prediction",
    description: "Interactive dashboard for monitoring business metrics with real-time updates and customizable visualizations.",
    image: "realestate.jpg",
    tags: ["Python", "Machine Learning", "Regression", "xAI"],
    link: "https://github.com/krishpatel1077/cs548projects/blob/main/cs548proj3.ipynb"
  },
  {
    title: "Graph-Based Link Prediction for Drug-Drug Interactions",
    description: "This project applies graph machine learning to predict missing drug-drug interactions using the ogbl-ddi dataset, aiding in drug repurposing and toxicity prediction.",
    image: "drug.jpg",
    tags: ["Python", "GNNs", "Machine Learning", "Link Prediction"],
    link: "https://github.com/krishpatel1077/cs548projects/blob/main/cs548proj4.ipynb"
  },
  {
    title: "My Personal Website!",
    description: "You're already here, take a look around!.",
    image: "website.jpg",
    tags: ["Next.js", "Web3.js", "JSON", "HTML/CSS"],
    link: "#"
  }
];

const skills = [
  "AWS",
  "Azure",
  "Verilog",
  "VHDL",
  "IDP",
  "SQL",
  "Git",
  "NLP",
  "Docker",
  "DynamoDB",
  "REST APIs",
  "GraphQL"
];

export default App;

