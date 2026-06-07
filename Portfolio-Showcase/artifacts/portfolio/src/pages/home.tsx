import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Github, Linkedin, Mail, ExternalLink, 
  BarChart2, Wallet, Leaf, Terminal, CheckCircle2, 
  AlertCircle, Eye, EyeOff, Loader2, Sparkles, Database, BarChart3, Coffee
} from "lucide-react";
import { SiPython, SiMysql, SiKaggle } from "react-icons/si";
import { useSubmitContact, useGetContacts } from "@workspace/api-client-react";
import { Avatar, AvatarImage } from "../components/ui/avatar";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="dark bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground relative font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Ambient Mesh */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] overflow-hidden pointer-events-none -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary to-orange-600 blur-[150px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-700 to-pink-600 blur-[130px] animate-pulse duration-[10000ms]" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-40 bg-background/50 backdrop-blur-md border-b border-border/20 text-white">
      <div className="font-display font-black text-xl tracking-tighter flex items-center gap-2">
        <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">M. AFFAN</span>
      </div>
      <div className="flex gap-6 md:gap-8 text-sm font-medium uppercase tracking-widest opacity-80">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#toolkit" className="hover:text-primary transition-colors">Toolkit</a>
        <a href="#academics" className="hover:text-primary transition-colors">Academics</a>
        <a href="#projects" className="hover:text-primary transition-colors">Work</a>
        <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-1">
          Contact <Sparkles className="w-3 h-3 text-primary" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 pt-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl z-10 w-full flex-1"
      >
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-1">
            <h1 className="font-display text-4xl md:text-6xl lg:text-[5.5rem] leading-tight tracking-tighter mb-6 font-black uppercase text-left">
              ASPIRING <span className="bg-gradient-to-r from-primary via-orange-500 to-pink-500 bg-clip-text text-transparent italic font-normal">DATA</span><br />
              SCIENTIST & ANALYST.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light leading-relaxed mb-8">
              Mohammad Affan — 4th-year BTech CSE student translating complex datasets into clear, actionable insights. I build robust data pipelines, analytical models, and intuitive visualizations that address real-world problems.
            </p>

            <a href="#projects" className="group inline-flex items-center gap-4 text-sm md:text-base font-display uppercase tracking-widest bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300">
              <span>View Selected Work</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-8 md:mt-0 md:ml-12 flex-shrink-0 flex items-center justify-center">
            <Avatar
              className="w-40 h-40 md:w-72 md:h-72 shadow-2xl"
              style={{ marginLeft: '150px', marginTop: '-200px', transform: 'scale(1.2)', transformOrigin: 'center' }}
            >
              <AvatarImage src="/profile.jpg" alt="Mohammad Affan" />
            </Avatar>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-secondary/10 border-t border-border/10 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl uppercase tracking-widest text-primary font-bold">Who I Am</h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-xs leading-relaxed">
            Curious by nature, developer by training. I build systems that merge rigorous mathematics with smooth frontends.
          </p>
        </div>
        <div className="md:col-span-8 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-muted-foreground"
          >
            <p className="text-foreground">
              I believe data is a story waiting to be told — and I craft the logic, code, and visual details to make it <span className="text-primary font-bold">unstoppable</span>.
            </p>
            <p>
              Currently in the 4th year of BTech CSE, aspiring to become a data scientist and analyst. I don't just import classifiers — I dissect the datasets and design the user interfaces that explain them.
            </p>
          </motion.div>

          {/* Interactive Shell / Terminal */}
          <TerminalWidget />
        </div>
      </div>
    </section>
  );
}

function TerminalWidget() {
  const [history, setHistory] = useState<string[]>([
    "Affan system terminal v1.0.0 init successful...",
    "Type 'help' to fetch a list of terminal commands."
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const { data: contacts, refetch: refetchContacts } = useGetContacts();

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let reply = "";
    switch (cmd) {
      case "help":
        reply = `Available commands:\n  about    - Summary of qualifications\n  skills   - Technical toolset details\n  projects - Overview of portfolio projects\n  contacts - List contact submissions (Admin mode)\n  clear    - Clear console screen`;
        break;
      case "about":
          reply = `Mohammad Affan — 4th-year BTech CSE student focused on data science and analytics. Focus: data analysis, dashboarding, Python applications, and predictive modeling.`;
        break;
      case "skills":
        reply = `Toolkit: Python, R, SQL, Tableau, Java, Kaggle, PyTorch, React, Node.js`;
        break;
      case "projects":
        reply = `Selected Work:\n  1. Crop Disease Detection (ML/PyTorch)\n  2. AQI Trend Dashboard (Python/Tableau)\n  3. Smart Expense Tracker (Python/SQL)`;
        break;
      case "contacts":
        if (contacts && contacts.length > 0) {
          reply = `Inquiries:\n` + contacts.map((c, i) => `[${i+1}] ${c.name} (${c.email}) - Subj: ${c.subject}\n    "${c.message}"`).join("\n");
        } else {
          reply = "Connecting to database... No submitted messages found, or local database initialized empty.";
        }
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        reply = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setHistory(prev => [...prev, `> ${input}`, reply]);
    setInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Refetch inquiries when user checks console
  useEffect(() => {
    if (input.trim().toLowerCase() === "contacts") {
      refetchContacts();
    }
  }, [input, refetchContacts]);

  return (
    <div className="w-full bg-black/90 border border-border/40 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
      <div className="bg-secondary/40 px-4 py-2 border-b border-border/20 flex justify-between items-center text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-primary" /> affan-terminal.sh
        </span>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
      </div>
      <div className="p-4 h-64 overflow-y-auto space-y-2 text-green-400">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-relaxed">{line}</div>
        ))}
        <div ref={terminalEndRef} />
      </div>
      <form onSubmit={handleCommand} className="flex border-t border-border/20 p-2 bg-black/50">
        <span className="text-primary px-2 font-bold select-none">&gt;</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command (e.g. help)..."
          className="flex-1 bg-transparent text-green-400 border-none outline-none focus:ring-0 font-mono p-0"
        />
      </form>
    </div>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Core Toolkit",
      skills: [
        { name: "Python", icon: SiPython, desc: "Scripting, pandas, PyTorch, sklearn" },
        { name: "SQL Database", icon: SiMysql, desc: "Relational modeling, complex joins, indexing" },
        { name: "R Stats", icon: Database, desc: "Statistical packages, ggplot2 modeling" }
      ]
    },
    {
      title: "Platforms & Analytics",
      skills: [
        { name: "Tableau", icon: BarChart3, desc: "Interactive intelligence visualizations" },
        { name: "Java Programming", icon: Coffee, desc: "Object-oriented structures, algorithms" },
        { name: "Kaggle", icon: SiKaggle, desc: "Scientific competitions and data modeling" }
      ]
    }
  ];

  return (
    <section id="toolkit" className="py-32 px-6 md:px-20 border-t border-border/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl uppercase tracking-widest text-primary font-bold mb-6">THE TOOLSTACK</h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl font-light">
          A collection of libraries, database engines, and intelligence suites utilized to extract insights and model structures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wider border-b border-border/20 pb-3 text-foreground/80">{cat.title}</h3>
              <div className="grid grid-cols-1 gap-4">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 6 }}
                    className="p-4 border border-border/30 hover:border-primary/40 rounded-lg flex items-start gap-4 transition-colors bg-secondary/5"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-foreground">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "AQI Analytics Dashboard",
      category: "Data Visualization",
      icon: BarChart2,
      year: "2024",
      href: "https://affan-codes-ds.github.io/GreenTrack-Smart-Air-Quality-Dashboard/",
      description: "Interactive index tracking tool monitoring pollutant rates in urban grids. Built using Python pipeline processing and Tableau maps to highlight hazardous thresholds.",
      tags: ["Python", "Tableau", "Geo Maps"]
    },
    {
      title: "Expense Intelligence App",
      category: "Data Engineering",
      icon: Wallet,
      year: "2024",
      description: "Relational database pipeline categorizing spending metrics. Employs analytical models to highlight anomalies and project next-month cost projections.",
      tags: ["Python", "SQL", "Forecasting"]
    },
    {
      title: "Crop Pathogen Detection",
      category: "Computer Vision",
      icon: Leaf,
      year: "2023",
      description: "ResNet neural classifier mapping leaf pathologies. Trained on agricultural images to provide local diagnostics with high precision.",
      tags: ["Python", "PyTorch", "ResNet-50"]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-20 border-t border-border/10">
      <div className="max-w-6xl mx-auto flex justify-between items-end mb-16">
        <h2 className="font-display text-4xl uppercase tracking-widest text-primary font-bold">Selected Work</h2>
        <span className="text-muted-foreground uppercase font-mono tracking-widest text-xs">( 03 Projects )</span>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            className="p-8 border border-border/30 hover:border-primary/30 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent transition-all group flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all flex-shrink-0">
              <project.icon className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider border border-primary/20 text-primary px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-light">{project.description}</p>
            </div>
            <div className="flex flex-col items-end gap-4 text-right flex-shrink-0 w-full md:w-auto">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block">{project.category}</span>
                <span className="text-xs text-muted-foreground/50">{project.year}</span>
              </div>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all">
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-10 h-10 border border-border/50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const milestones = [
    { role: "BTech — Computer Science & Engineering", focus: "Currently in 4th year", year: "2023 — Present" },
    { role: "Class 12th", focus: "Scored 95.25% in the 2022 board examinations", year: "2022" },
    { role: "Class 10th", focus: "Scored 89.0% in the 2020 board examinations", year: "2020" }
  ];

  return (
    <section id="academics" className="py-32 px-6 md:px-20 border-t border-border/10 bg-secondary/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl uppercase tracking-widest text-primary font-bold mb-16">Academic Journey</h2>
        <div className="border-t border-border/20">
          {milestones.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-border/20 hover:bg-secondary/10 hover:px-4 transition-all">
              <div>
                <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                <p className="text-sm text-muted-foreground mt-1 font-light">{item.focus}</p>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-4 md:mt-0">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const contactMutation = useSubmitContact();
  const { data: contacts, refetch: refetchContacts } = useGetContacts();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    contactMutation.mutate({
      data: { name, email, subject, message }
    }, {
      onSuccess: () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        refetchContacts();
      }
    });
  };

  const handleAdminToggle = () => {
    setShowAdminPanel(!showAdminPanel);
    if (!showAdminPanel) {
      refetchContacts();
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 border-t border-border/10 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-4xl uppercase tracking-widest text-primary font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Open to conversations about internships, collaborative data science ventures, or software challenges. Send a message directly.
            </p>
            <div className="space-y-4">
              <a href="mailto:affan@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" /> affan@example.com
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/Affan-codes-DS" target="_blank" rel="noopener noreferrer" className="p-2 border border-border/30 rounded-full hover:text-primary hover:border-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mohammad-affan-68b494327" target="_blank" rel="noopener noreferrer" className="p-2 border border-border/30 rounded-full hover:text-primary hover:border-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <button 
            onClick={handleAdminToggle}
            className="mt-12 text-xs uppercase tracking-wider font-bold text-muted-foreground hover:text-primary flex items-center gap-2"
          >
            {showAdminPanel ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAdminPanel ? "Hide Admin Panel" : "Show Submitted Inquiries (Admin)"}
          </button>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-4 bg-secondary/10 border border-border/20 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Direct Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  className="w-full bg-black/40 border border-border/30 rounded p-3 text-sm focus:border-primary outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full bg-black/40 border border-border/30 rounded p-3 text-sm focus:border-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Subject</label>
              <input 
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required 
                className="w-full bg-black/40 border border-border/30 rounded p-3 text-sm focus:border-primary outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required 
                rows={4}
                className="w-full bg-black/40 border border-border/30 rounded p-3 text-sm focus:border-primary outline-none transition-colors"
              />
            </div>

            <button 
              type="submit" 
              disabled={contactMutation.isPending}
              className="w-full bg-primary hover:bg-orange-600 text-white font-bold uppercase tracking-wider p-4 rounded transition-colors flex items-center justify-center gap-2"
            >
              {contactMutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {contactMutation.isSuccess && (
              <div className="p-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2 rounded">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> Submission successful!
              </div>
            )}

            {contactMutation.isError && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2 rounded">
                <AlertCircle className="w-5 h-5 flex-shrink-0" /> Failed to submit message. Try again later.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Admin Panel Overlay/Inquiries Panel */}
      <AnimatePresence>
        {showAdminPanel && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="max-w-6xl mx-auto mt-12 p-8 border border-border/20 rounded-xl bg-black/40"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" /> Submitted Message Inquiries
            </h3>
            
            {contacts && contacts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contacts.map((c) => (
                  <div key={c.id} className="p-5 border border-border/20 rounded-lg bg-secondary/10 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="font-bold text-foreground">{c.name}</h4>
                        <span className="text-[10px] text-muted-foreground/60 font-mono">{c.createdAt ? new Date(c.createdAt).toLocaleDateString() : ""}</span>
                      </div>
                      <span className="text-xs text-primary font-mono block mb-2">{c.email}</span>
                      <p className="text-xs font-bold text-foreground/80 mb-2">Subj: {c.subject}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed italic">"{c.message}"</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No submissions found. Submit a message above to see it populate here.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/20 py-16 px-6 md:px-20 bg-background text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Mohammad Affan. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/40 font-mono">Designed & Engineered on Windows local workspace</p>
      </div>
    </footer>
  );
}

