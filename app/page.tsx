'use client';

import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ExternalLink, 
  Github, 
  Mail,
  Code,
  Database,
  Globe,
  Brain,
  Wifi,
  Monitor,
  User,
  GraduationCap,
  Briefcase,
  Send
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const techStack = [
    { name: 'HTML/CSS', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Globe },
    { name: 'SQL', icon: Database },
    { name: 'Python', icon: Brain },
    { name: 'C++', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'UI/UX', icon: Monitor },
    { name: 'Figma', icon: Monitor },
  ];

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'AI-powered healthcare management platform with predictive analytics for patient care and resource optimization.',
      tech: ['React', 'Node.js', 'MongoDB', 'Python', 'AI'],
      demo: null,
      icon: Monitor,
    },
    {
      title: 'AI Text Assistant',
      description: 'Intelligent text processing assistant using natural language processing to help with content generation and analysis.',
      tech: ['Python', 'NLP', 'TensorFlow', 'React'],
      demo: null,
      icon: Brain,
    },
    {
      title: 'Handwritten Character Recognition',
      description: 'Machine learning model for recognizing handwritten characters with high accuracy using computer vision techniques.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
      demo: null,
      icon: Brain,
    },
    {
      title: 'Cosmic Echoes Webpage for AstralWeb Innovate Challenge 2025',
      description: 'Cosmic Echoes is a responsive web app that displays real historical space events based on today’s date, with a unique toggle to explore alternate reality versions, blending science and imagination through interactive design.',
      tech: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'React'],
      github: 'https://github.com/sujalarora17',
      demo: null,
      icon: Wifi,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">Sujal Arora</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === (item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_50%)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),transparent_50%)] opacity-60"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm Sujal Arora{' '}
              <span className="inline-block animate-bounce">👋</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
              CSE Undergrad | Web Developer | AI Enthusiast
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">Who I Am</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi, I'm Sujal Arora, a third-year CSE student at SRM Institute Of Science And Technology, Kattankulathur. 
                I am passionate about coding and problem-solving. Exploring the world of code and eager to learn. 
                Open to networking and discovering opportunities!
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <tech.icon className="h-6 w-6 text-blue-600" />
                    <span className="font-medium text-gray-900">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4">
              Here are some of my recent projects that showcase my skills and interests
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="h-10 w-10 text-blue-600" />
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <Github className="h-5 w-5 text-gray-700" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 text-blue-600" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    BTech in Computer Science and Engineering
                  </h4>
                  <p className="text-gray-600">SRM Institute of Science and Technology</p>
                  <p className="text-gray-600">2023 - 2027</p>
                  <p className="text-gray-600">CGPA: 8.38</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Experience</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      Handwritten Character Recognition
                    </h4>
                    <p className="text-blue-600 font-medium">NIT Calicut</p>
                    <p className="text-gray-600">May 2025 - July 2025</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      Web Development Intern
                    </h4>
                    <p className="text-blue-600 font-medium">CodSoft</p>
                    <p className="text-gray-600">Feb 2024 - March 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Stay Connected
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Or reach out directly:</p>
                <a
                  href="mailto:sujalarora1703@gmail.com"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Mail className="h-5 w-5" />
                  <span>sujalarora1703@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              Made with{' '}
              <span className="text-purple-400 text-xl">💫</span>
              {' '}by Sujal Arora | © 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}