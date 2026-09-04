// Dynamic calculation of total software engineering experience (Career Start Date: April 7, 2025)
export const calculateExperienceYears = (startDate = new Date(2025, 3, 7)) => {
  const now = new Date();
  const diffMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth()) + (now.getDate() >= startDate.getDate() ? 0 : -1);
  const years = Math.max(0, diffMonths / 12);
  return years >= 1 ? `${years.toFixed(1)}+ yr` : `${Math.max(1, diffMonths)}+ mos`;
};

export const calculateExperienceText = (startDate = new Date(2025, 3, 7)) => {
  const now = new Date();
  const diffMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth()) + (now.getDate() >= startDate.getDate() ? 0 : -1);
  const years = Math.max(0, diffMonths / 12);
  return years >= 1 ? `${years.toFixed(1)}+ years` : `${Math.max(1, diffMonths)}+ months`;
};

export const portfolioData = {
  hero: {
    eyebrow: "⚡ Full-Stack Developer & Software Engineer",
    firstName: "MONIKA",
    lastName: "S M",
    subtitle: "Full-Stack Software Developer at Conceptia Software Technologies, promoted twice within 11 months (Trainee → Associate Software Engineer → Junior Software Developer) and a 2× Spotlight Award winner.",
    tags: [
      "Full-Stack Dev",
      "Python / Django",
      "React 19 & TypeScript",
      "Spring Boot",
      "FastAPI & AI",
      "AWS & Docker",
      "PostgreSQL / MongoDB"
    ],
    available: true,
    stats: [
      { num: calculateExperienceYears(), label: "Experience" },
      { num: "2×", label: "Spotlight Awards" },
      { num: "4+", label: "Flagship Projects" }
    ]
  },
  about: {
    label: "About Me",
    title: "WHO AM I?",
    subtitle: "Promoted twice within 11 months at Conceptia Software Technologies & 2× Spotlight Award Winner.",
    quote: '"',
    bio: "Full-stack Software Developer at **Conceptia Software Technologies**, promoted twice within 11 months (**Trainee → Associate Software Engineer → Junior Software Developer**) and a **2× Spotlight Award winner** for delivery on business-critical systems.\n\nBuilds production features across **Python/Django** and **React/Node** ecosystems — role-based enterprise portals, an AI candidate-ranking platform, and an XML-to-PDF publishing pipeline — and ships AI-integrated projects (RAG assistants, multi-LLM chat, payment orchestration) spanning **Spring Boot, FastAPI, and AWS/Docker/Kubernetes**.",
    details: [
      { icon: "ti ti-map-pin", text: "Dattatreya Nagar, Banashankari, Bengaluru, Karnataka, India, 560085" },
      { icon: "ti ti-mail", text: "monikasm2019@gmail.com" },
      { icon: "ti ti-phone", text: "(+91) 09880966185" },
      { icon: "ti ti-brand-github", text: "github.com/moni-sm" },
      { icon: "ti ti-language", text: "English (Proficient - C1/C2)" },
      { icon: "ti ti-trophy", text: "2× Spotlight Award Winner" }
    ],
    values: [
      {
        icon: "ti ti-trophy",
        title: "Recognized Delivery",
        desc: "Promoted twice within 11 months and awarded 2× Spotlight Awards for outstanding delivery on business-critical systems."
      },
      {
        icon: "ti ti-code",
        title: "Clean Architecture",
        desc: "Architecting modular, maintainable, and robust enterprise solutions across Python, Django, React, and Spring Boot."
      },
      {
        icon: "ti ti-cpu",
        title: "AI Integrations",
        desc: "Building production-grade AI applications including RAG assistants, multi-LLM routers (Groq/Gemini/Claude), and voice workflows."
      },
      {
        icon: "ti ti-bolt",
        title: "End-to-End Execution",
        desc: "From database modeling, RBAC security, and XML-to-PDF pipelines to automated CI/CD releases on AWS EC2 & Docker."
      }
    ]
  },
  experience: {
    label: "Experience",
    title: "WORK HISTORY",
    subtitle: "Professional journey at Conceptia Software Technologies (07/04/2025 – Present).",
    roles: [
      {
        company: "Conceptia Software Technologies",
        role: "Junior Software Developer",
        period: "Mar 2026 – Present",
        location: "Bengaluru, India",
        badge: "PROMOTED ROLE",
        award: "🏆 2× Spotlight Award Winner for Outstanding Performance",
        responsibilities: [
          "Promoted to Junior Software Developer after sustained delivery on mission-critical systems; awarded 2× Spotlight Award for outstanding performance.",
          "Lead full-stack module architecture using Python (Django), Django REST Framework, React, TypeScript, and PostgreSQL/SQL.",
          "Architected role-based authentication and authorization (RBAC) with multi-tiered permissions across Admin, Manager, and Employee roles.",
          "Own core modules of the IETM (Interactive Electronic Technical Manual) platform: content hierarchy, version control, publishing/review workflows, 3D viewer integration, and interactive procedure pages.",
          "Built and maintain the automated XML-to-PDF generation pipeline — custom templates, embedded media, bookmarks, and fast search indexing.",
          "Run code reviews, mentor teammates, resolve production issues, and maintain CI/CD release pipelines (GitHub Actions)."
        ],
        techStack: [
          "Python",
          "Django",
          "Django REST Framework",
          "React",
          "TypeScript",
          "PostgreSQL",
          "SQL",
          "XML-to-PDF",
          "CI/CD",
          "GitHub Actions",
          "REST APIs"
        ]
      },
      {
        company: "Conceptia Software Technologies",
        role: "Associate Software Engineer",
        period: "Jul 2025 – Mar 2026",
        location: "Bengaluru, India",
        badge: "PERMANENT ROLE",
        promotionNote: "⚡ Converted to a permanent role after 3 months (of a 6-month traineeship) based on performance.",
        responsibilities: [
          "Converted to a permanent role after 3 months (of a 6-month traineeship) based on performance.",
          "Delivered backend REST APIs, schema migrations, and business logic in Django/DRF.",
          "Built the Annual Rewards & Recognition platform: nomination workflows, award-eligibility rules, admin approvals, bulk Excel import, and automated certificate PDF generation.",
          "Built responsive, accessible dashboards and UI with React, HTML5, CSS3, and Bootstrap.",
          "Optimized database queries and managed Git-based release workflows."
        ],
        techStack: [
          "Python",
          "Django",
          "Django REST Framework",
          "JavaScript",
          "React",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "SQLite",
          "Excel Processing",
          "PDF Generation",
          "Git"
        ]
      },
      {
        company: "Conceptia Software Technologies",
        role: "Trainee Software Developer",
        period: "Apr 2025 – Jul 2025",
        location: "Bengaluru, India",
        badge: "TRAINEESHIP",
        promotionNote: "🚀 Completed an intensive full-stack traineeship, converted to a permanent role within 3 months on merit.",
        responsibilities: [
          "Completed an intensive full-stack traineeship, converted to a permanent role within 3 months on merit.",
          "Learned enterprise fundamentals: Python/Django architecture, MVC patterns, REST APIs, SQL, and modern JavaScript.",
          "Built hands-on CRUD web modules following clean-code and documentation standards."
        ],
        techStack: [
          "Python",
          "Django",
          "JavaScript",
          "SQL",
          "HTML5",
          "CSS3",
          "Git & GitHub",
          "REST APIs"
        ]
      }
    ]
  },
  skills: {
    label: "Skills",
    title: "WHAT I DO",
    subtitle: "A strong technical foundation across full-stack development, distributed backend systems, AI integrations, and cloud tools.",
    categories: [
      {
        icon: "ti ti-server",
        title: "Backend & Systems",
        tags: [
          "Python",
          "Django",
          "Django REST Framework",
          "Java",
          "Spring Boot",
          "FastAPI",
          "Node.js",
          "Express.js",
          "REST APIs",
          "PostgreSQL",
          "MongoDB",
          "SQL / SQLite"
        ],
        bars: [
          { name: "Python / Django & REST APIs", pct: "92%" },
          { name: "Spring Boot & Java", pct: "85%" },
          { name: "Database Design & SQL", pct: "88%" }
        ]
      },
      {
        icon: "ti ti-layout",
        title: "Frontend & UI",
        tags: [
          "React.js",
          "TypeScript",
          "Next.js",
          "JavaScript (ES6+)",
          "Tailwind CSS",
          "HTML5 / CSS3",
          "Bootstrap",
          "Vite",
          "Responsive Design",
          "Glassmorphism"
        ],
        bars: [
          { name: "React.js & TypeScript", pct: "90%" },
          { name: "Next.js & Modern CSS / Tailwind", pct: "88%" },
          { name: "UI/UX & Web Performance", pct: "86%" }
        ]
      },
      {
        icon: "ti ti-brain",
        title: "AI & Cloud / DevOps",
        tags: [
          "Groq Cloud API",
          "Google Gemini AI",
          "Claude 3.5 Sonnet (RAG)",
          "AWS EC2",
          "Docker",
          "Kubernetes",
          "Nginx",
          "GitHub Actions (CI/CD)",
          "Vercel",
          "DuckDNS / SSL"
        ],
        bars: [
          { name: "AI LLM Integrations & RAG", pct: "90%" },
          { name: "AWS EC2 & Docker Deployment", pct: "82%" },
          { name: "CI/CD & DevOps Automation", pct: "85%" }
        ]
      },
      {
        icon: "ti ti-tools",
        title: "Tools & Methodologies",
        tags: [
          "Git & GitHub",
          "Postman",
          "JWT Authentication",
          "Stripe API",
          "XML-to-PDF Pipelines",
          "FPDF2",
          "Excel Data Processing",
          "Agile / Scrum",
          "Linux / Bash"
        ],
        bars: [
          { name: "Git & Version Control", pct: "92%" },
          { name: "Data Pipelines & PDF Engines", pct: "88%" },
          { name: "Security & Role-Based Auth", pct: "90%" }
        ]
      }
    ]
  },
  projects: {
    label: "Portfolio",
    title: "FEATURED PROJECTS",
    subtitle: "A showcase of full-stack platforms, distributed systems, AI applications, and deployed web services I have built.",
    categories: ["All", "AI & LLMs", "Full-Stack", "Fintech & Backend"],
    list: [
      {
        emoji: "💳",
        category: "Fintech & Backend",
        label: "Fintech & Distributed Systems",
        name: "SettleFlow — Payment Orchestration & Reconciliation Engine",
        desc: "Enterprise-style payment platform with real-time circuit breakers, multi-PSP failover routing, and automated reconciliation audit logs.",
        stack: ["Java 17", "Spring Boot 3.3", "Next.js 14", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "CI/CD"],
        metricLabel: "Reliability & Uptime:",
        metricVal: "Zero-downtime failover & 99.9% uptime",
        repoUrl: "https://github.com/moni-sm/settleflow",
        liveUrl: "https://prefers-ringtone-cet-focus.trycloudflare.com/",
        featured: true
      },
      {
        emoji: "🧭",
        category: "Full-Stack",
        label: "Internal Portal & AI",
        name: "Team Compass — Dev Portal & AI Knowledge Assistant",
        desc: "Internal onboarding hub with a searchable directory, project ownership matrix, centralized markdown documentation, and a Claude 3.5 Sonnet RAG assistant.",
        stack: ["Django 5.0", "React 19", "TypeScript", "Tailwind CSS v4", "Claude 3.5 RAG", "PostgreSQL", "Vite"],
        metricLabel: "Productivity:",
        metricVal: "Accelerates team discovery & onboarding",
        repoUrl: "https://github.com/moni-sm/team-compass",
        liveUrl: null,
        featured: true
      },
      {
        emoji: "⚡",
        category: "AI & LLMs",
        label: "AI & Cloud DevOps",
        name: "SigmaGPT — Multi-Model AI Chat Assistant",
        desc: "Production chat app with real-time streaming and a multi-LLM router (Llama 3.3 70B, Qwen 2.5, Gemini 1.5, GPT-4o-mini via Groq). Features Web Speech API voice dock, JWT auth, and automated CI/CD to AWS EC2.",
        stack: ["React 19", "Node.js", "Express", "MongoDB Atlas", "AWS EC2", "GitHub Actions CI/CD"],
        metricLabel: "Live Streaming & CD:",
        metricVal: "Sub-second LLM streaming on AWS EC2",
        repoUrl: "https://github.com/moni-sm/sigma-gptt",
        liveUrl: "https://moni-sigmagpt.duckdns.org",
        featured: true
      },
      {
        emoji: "🎙️",
        category: "AI & LLMs",
        label: "Voice AI & Productivity",
        name: "Voice-to-Task — AI Voice Assistant",
        desc: "Records and transcribes speech, structures it into tasks with Google Gemini AI, and exports a formatted PDF summary.",
        stack: ["FastAPI (Python)", "Google Gemini AI", "React (Vite)", "Tailwind CSS", "FPDF2"],
        metricLabel: "Efficiency:",
        metricVal: "Instant voice-to-structured PDF export",
        repoUrl: "https://github.com/moni-sm/Voice-to-Task",
        liveUrl: "https://voice-to-task-vert.vercel.app",
        featured: true
      }
    ]
  },
  services: {
    label: "Experience & Education",
    title: "BACKGROUND",
    subtitle: "My professional journey, education, and credentials.",
    list: [
      {
        icon: "ti ti-briefcase",
        name: "Conceptia Software Technologies",
        desc: "Junior Software Developer — Promoted twice within 11 months (Trainee → Associate → Junior Developer). 2× Spotlight Award winner for delivery on business-critical systems.",
        price: "07/04/2025 - Present",
        priceSuffix: "",
        featured: true,
        badge: "2× SPOTLIGHT AWARDEE",
        includes: [
          "Promoted twice within 11 months on merit",
          "2× Spotlight Award Winner for High Performance",
          "Python/Django & React Full-Stack Architecture",
          "Role-Based Access Control (RBAC) & XML-to-PDF"
        ]
      },
      {
        icon: "ti ti-school",
        name: "Maharani Cluster University",
        desc: "Master of Computer Applications (MCA) — Comprehensive graduate curriculum in Data Structures, Algorithms, DBMS, Software Engineering, Web Development, Networks, and Cloud Computing.",
        price: "20/02/2023 – 24/02/2024",
        priceSuffix: "",
        featured: false,
        includes: [
          "Level in EQF: EQF Level 7 Equivalent",
          "Data Structures & Algorithms",
          "Database Management Systems (DBMS)",
          "Software Engineering & Project Management",
          "Application & Full-Stack Web Development"
        ]
      }
    ]
  },
  testimonials: {
    label: "Interests & Strengths",
    title: "BEYOND THE CODE",
    subtitle: "Personal passions and core habits that power my continuous growth.",
    list: [
      {
        stars: "📖",
        text: "Reading is one of my core hobbies. I enjoy diving into books that challenge my thinking, broaden my knowledge, and offer new insights into the world. It keeps me intellectually curious and constantly growing.",
        avatarInitials: "RB",
        name: "Reading Books",
        role: "Continuous Learning"
      },
      {
        stars: "🏔️",
        text: "Love exploring outdoor trails and mountains, which keeps me physically fit, resilient, and connected with nature.",
        avatarInitials: "TR",
        name: "Trekking",
        role: "Resilience & Focus"
      },
      {
        stars: "⚡",
        text: "Experimenting with cutting-edge open-source LLMs, local AI agents, and emerging web frameworks to build practical developer utilities.",
        avatarInitials: "AI",
        name: "AI & Open Source",
        role: "Innovation & Experimentation"
      }
    ]
  },
  contact: {
    label: "Contact",
    title: "GET IN TOUCH",
    subtitle: "Interested in collaborating or discussing full-stack software opportunities? Let's connect!",
    text: "I am actively open to Full-Stack Software Developer and Backend Engineer roles. Whether you have an exciting project, a role to discuss, or just want to connect, feel free to reach out directly.",
    channels: [
      {
        platform: "Email",
        handle: "monikasm2019@gmail.com",
        icon: "ti ti-mail",
        url: "mailto:monikasm2019@gmail.com"
      },
      {
        platform: "GitHub",
        handle: "github.com/moni-sm",
        icon: "ti ti-brand-github",
        url: "https://github.com/moni-sm"
      },
      {
        platform: "LinkedIn",
        handle: "linkedin.com/in/monika--sm",
        icon: "ti ti-brand-linkedin",
        url: "https://www.linkedin.com/in/monika--sm/"
      },
      {
        platform: "WhatsApp",
        handle: "+91 9880966185",
        icon: "ti ti-brand-whatsapp",
        url: "https://wa.me/919880966185"
      },
      {
        platform: "Location",
        handle: "Dattatreya Nagar, Banashankari, Bengaluru, Karnataka, 560085",
        icon: "ti ti-map-pin",
        url: "https://maps.google.com/?q=Dattatreya+Nagar,+Banashankari,+Bengaluru,+Karnataka,+560085"
      }
    ]
  }
};