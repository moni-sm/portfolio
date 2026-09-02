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
    subtitle: "Full-Stack Software Developer passionate about engineering robust web applications, scalable backend APIs, AI-powered tools, and high-performance distributed systems. 2× Spotlight Award Winner at Conceptia.",
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
    subtitle: "A high-performing Full-Stack Developer with rapid progression from Trainee to Associate to Junior Software Developer.",
    quote: '"',
    bio: `Hey! I'm **Monika S M** — a Software Developer based in Bengaluru, India. In my **${calculateExperienceText()}** at **Conceptia Software Technologies**, I joined as a Trainee Software Developer on **07/04/2025** for a 6-month program, but owing to exceptional performance and high commitment, I was converted to a permanent **Associate Software Engineer in just 3 months (July 2025)**, and subsequently promoted to **Junior Software Developer** in March. Along the way, I have been honored with **two Spotlight Awards** for outstanding performance and high-impact delivery.\n\nFrom architecting role-based enterprise portals and XML-to-PDF pipelines to engineering high-throughput payment orchestration engines (**SettleFlow**), multi-LLM streaming assistants (**SigmaGPT**), and AI developer hubs (**Team Compass**), I love solving complex technical problems and building scalable software.`,
    details: [
      { icon: "ti ti-map-pin", text: "Banashankari, Bengaluru, India" },
      { icon: "ti ti-mail", text: "monikasm2019@gmail.com" },
      { icon: "ti ti-phone", text: "(+91) 9880966185" },
      { icon: "ti ti-brand-github", text: "github.com/moni-sm" },
      { icon: "ti ti-trophy", text: "2× Spotlight Award Winner" }
    ],
    values: [
      {
        icon: "ti ti-trophy",
        title: "Recognized Excellence",
        desc: "2× Spotlight Award Winner; converted from trainee to permanent engineer in July 2025 (just 3 months)."
      },
      {
        icon: "ti ti-code",
        title: "Clean Architecture",
        desc: "Writing modular, maintainable, and type-safe code following best engineering principles."
      },
      {
        icon: "ti ti-cpu",
        title: "AI & Innovation",
        desc: "Integrating state-of-the-art LLMs, RAG pipelines, and automated intelligence into real-world software."
      },
      {
        icon: "ti ti-bolt",
        title: "High Performance",
        desc: "Optimizing backend throughput, sub-second query latency, and responsive glassmorphic UI."
      }
    ]
  },
  experience: {
    label: "Experience",
    title: "WORK HISTORY",
    subtitle: "My professional journey and rapid career progression at Conceptia Software Technologies.",
    roles: [
      {
        company: "Conceptia Software Technologies",
        role: "Junior Software Developer",
        period: "03/2026 – Present",
        location: "Bengaluru, India",
        badge: "CURRENT PROMOTED ROLE",
        award: "🏆 2× Spotlight Award Winner for Outstanding Performance",
        responsibilities: [
          "Promoted to Junior Software Developer in March following sustained technical excellence, ownership of mission-critical systems, and exceptional project execution.",
          "Lead full-stack module architecture and development using Python (Django), React, TypeScript, and relational SQL databases.",
          "Architected and enhanced role-based authentication and authorization systems (RBAC) with multi-tiered permissions across Admin, Manager, and Employee tiers.",
          "Engineered the core modules for the Interactive Electronic Technical Manual (IETM) platform — content hierarchies, version control, 3D viewer integration, and interactive procedures.",
          "Built and optimized an automated XML-to-PDF generation pipeline with custom styling templates, embedded media, bookmarks, and fast indexing.",
          "Conducted code reviews, mentored team members, resolved critical production bugs, and maintained automated CI/CD release pipelines."
        ],
        techStack: [
          "Python",
          "Django",
          "Django REST Framework",
          "React",
          "TypeScript",
          "PostgreSQL",
          "SQL",
          "XML",
          "PDF Generation",
          "Git",
          "GitHub",
          "REST APIs"
        ]
      },
      {
        company: "Conceptia Software Technologies",
        role: "Associate Software Engineer",
        period: "07/2025 – 03/2026",
        location: "Bengaluru, India",
        badge: "PERMANENT ROLE",
        promotionNote: "⚡ Converted to permanent Associate Software Engineer in July 2025 (in just 3 months instead of 6) due to outstanding performance.",
        responsibilities: [
          "Fast-tracked and absorbed into permanent role on July 2025 following exemplary performance, technical aptitude, and rapid feature turnaround.",
          "Delivered backend RESTful APIs, database schema migrations, and business logic using Django and DRF.",
          "Contributed to the Annual Rewards & Recognition platform featuring employee nomination workflows, award eligibility rules, admin approvals, bulk Excel data ingestion, and automated nomination certificate PDF generation.",
          "Designed responsive, accessible frontend interfaces and interactive dashboards using React, HTML5, CSS3, and Bootstrap.",
          "Collaborated closely with QA engineers, UI/UX designers, and project stakeholders to ship weekly sprint deliverables on time."
        ],
        techStack: [
          "Python",
          "Django",
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
        period: "07/04/2025 – 07/2025 (3 Months)",
        location: "Bengaluru, India",
        badge: "TRAINEESHIP",
        promotionNote: "🚀 Joined on 07/04/2025 for a 6-month traineeship — converted to permanent role in July 2025 (just 3 months) based on high merit.",
        responsibilities: [
          "Joined on 07/04/2025 for an intensive full-stack development traineeship originally scheduled for 6 months.",
          "Demonstrated rapid ramp-up and delivered high-quality work, earning immediate permanent conversion on July 2025 within just 3 months.",
          "Mastered enterprise software fundamentals: Python/Django backend architecture, MVC patterns, REST APIs, SQL databases, and modern JavaScript.",
          "Developed hands-on web modules, implemented secure CRUD endpoints, and adhered to clean code and documentation standards."
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
        name: "SettleFlow — Payment Orchestration Engine",
        desc: "Enterprise-grade Payment Orchestration & Reconciliation platform designed for high-volume merchants. Features real-time Resilience4j Circuit Breakers, dynamic multi-PSP failover routing, automated financial reconciliation audit logs, and zero-downtime transaction processing.",
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
        name: "Team Compass — Dev Portal & AI Assistant",
        desc: "Internal developer portal and team onboarding hub featuring an interactive searchable employee directory, project ownership matrix, centralized markdown documentation, and an AI-powered Claude 3.5 Sonnet RAG knowledge assistant.",
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
        name: "SigmaGPT — Multi-Model AI Assistant",
        desc: "Production-ready AI chat platform with real-time streaming completions, multi-LLM router (Llama 3.3 70B, Qwen 2.5, Gemini 1.5, GPT-4o-mini), Web Speech API voice dock, JWT authentication, and automated CI/CD deployment to AWS EC2 with Nginx & SSL.",
        stack: ["React 19", "Node.js", "Express", "MongoDB Atlas", "Groq Cloud API", "AWS EC2", "GitHub Actions CI/CD"],
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
        desc: "Voice-driven task management application that records speech, transcribes audio, structures actionable tasks using Google Gemini AI, and generates clean downloadable summary PDF reports.",
        stack: ["FastAPI (Python)", "Google Gemini AI", "React (Vite)", "Tailwind CSS", "FPDF2", "REST API"],
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
        desc: "Junior Software Developer — Fast-tracked from Trainee (07/04/2025) to permanent Associate in July 2025 (just 3 months), and promoted to Junior Developer in March. 2× Spotlight Award winner.",
        price: "04/2025 - Present",
        priceSuffix: "",
        featured: true,
        badge: "2× SPOTLIGHT AWARDEE",
        includes: [
          "Permanent Conversion in July 2025 (3 Months)",
          "Promoted to Junior Software Developer",
          "2× Spotlight Award Winner for High Performance",
          "Django & React Full-Stack Architecture"
        ]
      },
      {
        icon: "ti ti-school",
        name: "Maharani Cluster University",
        desc: "Master of Computer Applications (MCA) — Comprehensive graduate studies in Data Structures, Database Systems, Web Engineering, and Software Architecture.",
        price: "2023 - 2024",
        priceSuffix: "",
        featured: false,
        includes: [
          "Advanced Software Engineering",
          "Full-Stack Web Development",
          "Relational Database Management (RDBMS)",
          "Algorithms & System Design"
        ]
      }
    ]
  },
  testimonials: {
    label: "Interests & Strengths",
    title: "BEYOND THE CODE",
    subtitle: "Personal passions and core habits that power my analytical mindset.",
    list: [
      {
        stars: "📖",
        text: "Diving into technical books and engineering literature that challenge my thinking, expand my problem-solving repertoire, and cultivate continuous learning.",
        avatarInitials: "RB",
        name: "Technical Reading",
        role: "Continuous Learning"
      },
      {
        stars: "🏔️",
        text: "Exploring high-altitude outdoor trails and trekking summits, building grit, endurance, sharp focus, and mental resilience under pressure.",
        avatarInitials: "TR",
        name: "Trekking & Outdoors",
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
        handle: "Bengaluru, Karnataka, India",
        icon: "ti ti-map-pin",
        url: "https://maps.google.com/?q=Banashankari,+Bengaluru,+India"
      }
    ]
  }
};