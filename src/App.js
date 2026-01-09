import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Award, Briefcase, Code, GraduationCap, Globe, Github, Linkedin, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from './my_pic.jpg';
import utemImage from './1767953911107_image.png';
import penangPortImage from './1767953933750_image.png';
import schoolLogo from './1767954002749_image.png';
import politeknikImage from './1767954063011_image.png';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  const skills = {
    "Programming Languages": ["Python", "C++", "Java", "JavaScript", "PHP", "C#", "C"],
    "Web Technologies": ["HTML", "CSS", "React", "Node.js", "FastAPI"],
    "Database": ["SQL", "Oracle", "Database Design", "Supabase"],
    "Data Formats": ["XML", "JSON"],
    "AI & Machine Learning": ["RT-DETR", "YOLO", "Object Detection", "Computer Vision"],
    "Business Intelligence": ["Microsoft Power BI", "Microsoft Excel (Advanced)"],
    "DevOps & Tools": ["Docker", "Git", "REST APIs"],
    "Other": ["Project Management", "Network Design", "System Administration"]
  };

  const currentEducation = {
    degree: "Bachelor of Computer Science (Software Engineering)",
    institution: "Universiti Teknikal Malaysia Melaka (UTeM)",
    status: "Currently Pursuing",
    expected: "2026",
    image: utemImage
  };

  const diplomaEducation = {
    degree: "Diploma in Digital Technology",
    institution: "Politeknik Balik Pulau, Penang, Malaysia",
    cgpa: "3.92/4.00",
    distinction: "Dean's List in All Semesters",
    graduation: "February 2024",
    image: politeknikImage,
    courses: [
      "Software Engineering", "Algorithm Analysis", "Database Design", "Mobile Application Development",
      "Artificial Intelligence", "Data Communication and Networking", "Software Project Management",
      "Information Security", "Human Computer Interaction", "Distributed Application Development",
      "Software Validation and Verification", "Statistics and Probability", "Operating System",
      "Calculus and Numerical Methods", "Python Programming", "Object Oriented Programming",
      "Web Programming", "Visual Basic Programming", "System Analysis and Design"
    ]
  };

  const schoolEducation = {
    institution: "SMK Taman Inderawasih, Penang",
    qualification: "Sijil Pelajaran Malaysia (SPM)",
    year: "2020",
    logo: schoolLogo,
    achievements: [
      "Mathematics: A+",
      "Additional Mathematics: C+",
      "Physics: A",
      "Chemistry: B",
      "Biology: B+",
      "Computer Science: C+",
      "English: A (GCE-O: 3B)",
      "Bahasa Melayu: B+",
      "Moral Education: B+",
      "History: A-"
    ]
  };

  const certifications = [
    {
      title: "Diamond Award & Best Video",
      issuer: "International Virtual Competition of Creative & Innovative Idea (IVCCII) 2023",
      project: "CODECRUSH: An Interactive Python Learning Game",
      category: "TVET Student",
      date: "September 2023",
      ref: "62",
      description: "Achieved Diamond Award and Best Video recognition for developing an innovative educational game for Python programming course."
    },
    {
      title: "Gold Award",
      issuer: "Final Year Project Competition (FiYProC) - Politeknik Balik Pulau",
      project: "CODECRUSH",
      category: "Software Application and Development",
      date: "August 2023",
      ref: "PBU/FiYProC/GOLD/SS2023/003",
      description: "Gold recognition for excellence in final year project competition."
    },
    {
      title: "3rd Place Winner",
      issuer: "Final Year Project Competition (FiYProC) - Politeknik Balik Pulau",
      project: "CODECRUSH",
      category: "Software Application and Development",
      date: "August 2023",
      ref: "PBU/FiYProC/SOFTWARE/SS2023/003",
      description: "Secured 3rd place among all software development projects in the final year competition."
    },
    {
      title: "MUET Band 4.5",
      issuer: "Malaysian Examinations Council",
      category: "English Proficiency Certification",
      date: "June 2023",
      description: "Achieved Band 4.5 in Malaysian University English Test with high scores in Listening (81/90), Reading (83/90), and Speaking (66/90)."
    },
    {
      title: "Diploma with Distinction",
      issuer: "Politeknik Balik Pulau",
      category: "Academic Achievement",
      date: "February 2024",
      description: "Graduated with CGPA 3.92/4.00 and Dean's List recognition in all semesters."
    }
  ];

  const experience = [
    {
      title: "System Development Intern",
      company: "Penang Port Sdn. Bhd",
      location: "Penang, Malaysia",
      period: "August 2023 - January 2024",
      rating: "Excellent",
      image: penangPortImage,
      achievements: [
        "Successfully fixed 25% of main system bugs and data entry inconsistencies",
        "Regularly maintained main server and backup server on a weekly basis",
        "Successfully created and published a subsystem to increase efficiency of overtime reporting and analytics",
        "Conducted feasibility study before and after system implementation",
        "Troubleshooting physical hardware (PC and SERVER) and main system issues",
        "Developed solutions to improve operational efficiency in port management systems"
      ]
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Ongoing",
      achievements: [
        "Website development including database design",
        "Mobile and desktop app development",
        "Full-stack development solutions for various clients",
        "AI/ML integration projects",
        "Custom automation solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Saillesh S/O Gopal Krishnan
            </motion.h1>
            <div className="hidden md:flex space-x-4">
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Certifications', 'Contact'].map((item, index) => (
                <motion.button 
                  key={item} 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${activeSection === item.toLowerCase() ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-slate-800'}`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-sm px-2 pt-2 pb-3"
          >
            {['Home', 'About', 'Education', 'Experience', 'Skills', 'Certifications', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-3 py-2 rounded-md mb-1 ${activeSection === item.toLowerCase() ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative">
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img src={profileImage} alt="Saillesh" className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-2xl object-cover mx-auto" />
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Saillesh S/O Gopal Krishnan
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-blue-300 mb-8 font-semibold">
              Full-Stack Developer & System Engineer
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Computer Science Student @ UTeM | AI/ML Enthusiast | Building innovative solutions for real-world problems
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get In Touch
              </a>
              <a href="https://github.com/Symmetrixs" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 rounded-full font-semibold hover:bg-slate-700 transform hover:scale-105 transition-all duration-300 border border-blue-500/30">
                View Projects
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-blue-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Computer Science student at Universiti Teknikal Malaysia Melaka (UTeM), specializing in Software Engineering. 
                  With a strong foundation from my Diploma in Digital Technology (CGPA 3.92), I've developed expertise across the full technology stack.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey in technology began at Politeknik Balik Pulau, where I earned Dean's List recognition in all semesters and 
                  developed a passion for creating innovative solutions that solve real-world problems.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">What I Do</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Code className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Full-Stack Development</h4>
                      <p className="text-gray-400 text-sm">Building robust web applications using React, FastAPI, and modern frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">AI & Machine Learning</h4>
                      <p className="text-gray-400 text-sm">Developing defect detection systems using RT-DETR and computer vision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">System Engineering</h4>
                      <p className="text-gray-400 text-sm">Server maintenance, troubleshooting, and infrastructure management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Freelance Services</h4>
                      <p className="text-gray-400 text-sm">Custom software solutions, mobile apps, and database design</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Current Focus</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">🎓 Academic Excellence</h4>
                    <p className="text-gray-300 text-sm">Pursuing Bachelor's in Software Engineering while maintaining high academic standards</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">🤖 AI Development</h4>
                    <p className="text-gray-300 text-sm">Working on EDAA Detection System for pressure vessel inspections using RT-DETR</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <h4 className="font-semibold text-cyan-400 mb-2">💡 Innovation</h4>
                    <p className="text-gray-300 text-sm">Developing efficient inspection systems with React frontends and Python backends</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">My Approach</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I believe in writing clean, maintainable code and building systems that are both powerful and user-friendly. 
                  My experience ranges from fixing critical system bugs at Penang Port to developing award-winning educational software.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm constantly learning and adapting to new technologies, with a particular interest in automation, 
                  AI applications for industrial processes, and creating solutions that make a real impact.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border border-blue-400/40">
                <h3 className="text-xl font-bold mb-3 text-white">💼 Open for Opportunities</h3>
                <p className="text-gray-200 text-sm">
                  I'm always interested in challenging projects, internships, and collaborations. 
                  Let's build something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</h2>
          </motion.div>
          <div className="space-y-8">
            {/* Current Education */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
              className="relative p-8 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/50 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-2xl"></div>
              <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-bl-xl">
                Current
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-cyan-600 rounded-lg animate-pulse"><GraduationCap size={32} /></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{currentEducation.degree}</h3>
                      <p className="text-cyan-400 text-lg mb-2">{currentEducation.institution}</p>
                      <p className="text-gray-400">Status: <span className="text-cyan-300 font-semibold">{currentEducation.status}</span></p>
                      <p className="text-gray-400">Expected Graduation: <span className="text-cyan-300 font-semibold">{currentEducation.expected}</span></p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={currentEducation.image} 
                    alt="UTeM Campus" 
                    className="w-full h-48 object-cover rounded-xl border-2 border-cyan-500/30 shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            {/* Diploma Education */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
              className="relative p-8 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-t-2xl"></div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-600 rounded-lg"><GraduationCap size={32} /></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{diplomaEducation.degree}</h3>
                      <p className="text-blue-400 text-lg mb-2">{diplomaEducation.institution}</p>
                      <p className="text-gray-400">{diplomaEducation.graduation}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={diplomaEducation.image} 
                    alt="Politeknik Balik Pulau" 
                    className="w-full h-48 object-cover rounded-xl border-2 border-blue-500/30 shadow-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">CGPA</div>
                  <div className="text-3xl font-bold text-blue-400">{diplomaEducation.cgpa}</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Achievement</div>
                  <div className="text-lg font-semibold text-cyan-400">{diplomaEducation.distinction}</div>
                </motion.div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Key Coursework:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {diplomaEducation.courses.map((course, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* SPM Education */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
              className="relative p-8 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-2xl"></div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex items-center justify-center">
                  <motion.img 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    src={schoolEducation.logo} 
                    alt="SMK Taman Inderawasih Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-600 rounded-lg"><GraduationCap size={28} /></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{schoolEducation.qualification}</h3>
                      <p className="text-purple-400 text-lg mb-1">{schoolEducation.institution}</p>
                      <p className="text-gray-400">Graduated: {schoolEducation.year}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">Results:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {schoolEducation.achievements.map((achievement, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 p-2 bg-slate-900/30 rounded"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Professional Experience</h2>
          </motion.div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleIn}
                className="relative p-8 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden group hover:border-blue-500/60 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-t-2xl"></div>
                
                {job.image && (
                  <div className="mb-6">
                    <motion.img 
                      whileHover={{ scale: 1.02 }}
                      src={job.image} 
                      alt={job.company} 
                      className="w-full h-48 object-cover rounded-xl border-2 border-blue-500/30 shadow-lg"
                    />
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Briefcase size={28} /></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <p className="text-blue-400 text-lg mb-1">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1"><MapPin size={16} />{job.location}</span>
                      <span>{job.period}</span>
                      {job.rating && (
                        <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full border border-green-500/30 font-semibold">
                          Rating: {job.rating}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, backgroundColor: 'rgba(15, 23, 42, 0.5)' }}
                      className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Professional Skills</h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-blue-400" size={24} />
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <motion.span 
                      key={idx}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(37, 99, 235, 0.4)' }}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Certifications & Awards</h2>
            <p className="text-center text-gray-400 mb-12">Recognitions and achievements throughout my academic and professional journey</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-yellow-500/60 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4">
                  <Award className="text-yellow-400 group-hover:text-yellow-300 transition-colors group-hover:scale-110 transform" size={32} />
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 pr-10 text-white group-hover:text-blue-300 transition-colors">{cert.title}</h3>
                  <p className="text-blue-400 mb-2 font-semibold">{cert.issuer}</p>
                  {cert.project && (
                    <p className="text-sm text-cyan-300 mb-1 italic">Project: {cert.project}</p>
                  )}
                  <p className="text-sm text-gray-400 mb-3">{cert.category}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                  <div className="text-sm text-gray-500">{cert.date}</div>
                  {cert.ref && (
                    <div className="text-xs text-gray-600 font-mono bg-slate-900/50 px-2 py-1 rounded">
                      Ref: {cert.ref}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Achievements Summary */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mt-12 p-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border border-blue-400/40"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Achievement Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">3.92</div>
                <div className="text-gray-300">Diploma CGPA</div>
                <div className="text-sm text-gray-400">Dean's List All Semesters</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">3+</div>
                <div className="text-gray-300">Major Awards</div>
                <div className="text-sm text-gray-400">International Recognition</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.5</div>
                <div className="text-gray-300">MUET Band</div>
                <div className="text-sm text-gray-400">English Proficiency</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-12">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</motion.p>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.a 
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.8)' }}
                href="mailto:saillesh0323@gmail.com" 
                className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 transition-all group"
              >
                <Mail className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-400 break-all">saillesh0323@gmail.com</p>
              </motion.a>
              <motion.div 
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.8)' }}
                className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 transition-all group"
              >
                <Phone className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all" size={32} />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-gray-400">+60 10 200 1843</p>
              </motion.div>
              <motion.div 
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.8)' }}
                className="p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-500/30 transition-all group"
              >
                <MapPin className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all" size={32} />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-gray-400">Penang, Malaysia</p>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/Symmetrixs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://www.linkedin.com/in/saillesh-gopal-4b7590209" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 bg-slate-900/50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="text-gray-400 mb-2">© 2026 Saillesh S/O Gopal Krishnan. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Built with React & Tailwind CSS | Powered by passion and innovation</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Portfolio;
