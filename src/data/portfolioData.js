export const portfolioData = {
  hero: {
    eyebrow: "💻 Junior Software Developer",
    firstName: "MONIKA",
    lastName: "S M",
    subtitle: "Passionate full-stack developer crafting reliable web applications, building scalable APIs, and delivering seamless user experiences.",
    tags: ["Full-Stack Dev", "Python / Django", "React.js", "REST APIs", "SQL"],
    available: true,
    stats: [
      { num: "3+", label: "Featured Projects" },
      { num: "10+", label: "Tech Stack Tools" },
      { num: "1.5+ yr", label: "Experience" }
    ]
  },
  about: {
    label: "About Me",
    title: "WHO AM I?",
    subtitle: "A Junior Software Developer obsessed with clean code, scalable architecture, and continuous learning.",
    quote: '"',
    bio: "Hey! I'm **Monika S M** — a Junior Software Developer based in Bengaluru, India. I specialize in designing, developing, and maintaining full-stack web applications using Python, Django, React, JavaScript, and modern web technologies.\n\nFrom building enterprise web solutions and role-based access systems to working on AI-powered tools and XML-to-PDF pipelines, I love solving complex technical problems and building software that delivers real business value.",
    details: [
      { icon: "ti ti-map-pin", text: "Banashankari, Bengaluru, India" },
      { icon: "ti ti-mail", text: "monikasm2019@gmail.com" },
      { icon: "ti ti-phone", text: "(+91) 9880966185" },
      { icon: "ti ti-language", text: "English (Proficient)" }
    ],
    values: [
      {
        icon: "ti ti-code",
        title: "Clean Code",
        desc: "Passionate about writing maintainable, well-structured, and efficient code."
      },
      {
        icon: "ti ti-bolt",
        title: "Problem Solver",
        desc: "Strong analytical mindset focused on debugging, optimization, and scalable solutions."
      },
      {
        icon: "ti ti-users",
        title: "Team Player",
        desc: "Experienced in Git-based collaboration, agile practices, and cross-functional teamwork."
      },
      {
        icon: "ti ti-book",
        title: "Continuous Learner",
        desc: "Always exploring modern frameworks, emerging technologies, and best engineering practices."
      }
    ]
  },
  experience: {
    label: "Experience",
    title: "WORK HISTORY",
    subtitle: "My professional journey and detailed contributions in software engineering.",
    roles: [
      {
        company: "Conceptia Software Technologies",
        role: "Junior Software Developer",
        period: "07/04/2025 – Present",
        location: "Bengaluru, India",
        responsibilities: [
          "Developed and maintained full-stack web applications using Python (Django), JavaScript, HTML, CSS, Bootstrap, React, and SQL.",
          "Built and enhanced role-based authentication and authorization systems with multiple user roles (Admin, Manager, User).",
          "Designed and implemented CRUD operations, REST APIs, database models, and backend business logic using Django.",
          "Contributed to the Annual Rewards & Recognition platform (employee nomination workflows, award eligibility validation, admin approval/rejection process, PDF generation for nominations, Excel import & employee data management, dashboard enhancements & reporting).",
          "Worked on the Interactive Electronic Technical Manual (IETM) project (content hierarchy & navigation, version control & publishing workflows, review & approval processes, role-based access control, search & keyword indexing, image/video/hyperlink/table/dialog/3D viewer integration, and interactive task/procedure pages).",
          "Developed and maintained an XML-to-PDF generation pipeline for technical documentation with formatting and template customization.",
          "Integrated rich document features including images, embedded videos, tables, hyperlinks, bookmarks, and searchable indexes.",
          "Implemented responsive UI components and improved user experience using HTML, CSS, JavaScript, and Bootstrap.",
          "Worked with Git and GitHub for version control, branch management, code reviews, conflict resolution, and collaborative development.",
          "Participated in debugging, testing, feature enhancement, and production issue resolution.",
          "Collaborated with cross-functional teams including project managers, QA engineers, designers, and business stakeholders throughout the software development lifecycle.",
          "Assisted in deployment activities, environment setup, and maintenance of development and staging environments."
        ],
        techStack: [
          "Python",
          "Django",
          "Django REST Framework",
          "JavaScript",
          "React",
          "Angular",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "SQL",
          "SQLite",
          "Git",
          "GitHub",
          "REST APIs",
          "XML",
          "PDF Generation",
          "JSON",
          "Excel Data Processing",
          "MongoDB"
        ]
      }
    ]
  },
  skills: {
    label: "Skills",
    title: "WHAT I DO",
    subtitle: "A strong technical foundation across full-stack development, databases, and modern dev tools.",
    categories: [
      {
        icon: "ti ti-code",
        title: "Backend Dev",
        tags: ["Python", "Django", "Django REST Framework", "REST APIs", "SQL", "SQLite"],
        bars: [
          { name: "Python / Django", pct: "90%" },
          { name: "REST APIs", pct: "88%" }
        ]
      },
      {
        icon: "ti ti-layout",
        title: "Frontend Dev",
        tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Angular"],
        bars: [
          { name: "React.js", pct: "85%" },
          { name: "HTML / CSS / Bootstrap", pct: "90%" }
        ]
      },
      {
        icon: "ti ti-tools",
        title: "Tools & Workflow",
        tags: ["Git", "GitHub", "JSON", "XML", "PDF Generation", "Excel Data Processing"],
        bars: [
          { name: "Git / GitHub", pct: "85%" },
          { name: "Database & Data Pipelines", pct: "80%" }
        ]
      },
      {
        icon: "ti ti-briefcase",
        title: "Core Competencies",
        tags: ["Agile Collaboration", "Database Management", "Role-Based Auth", "System Debugging"],
        bars: [
          { name: "Problem Solving", pct: "92%" },
          { name: "Team Collaboration", pct: "90%" }
        ]
      }
    ]
  },
  projects: {
    label: "Portfolio",
    title: "FEATURED PROJECTS",
    subtitle: "A selection of web applications and software systems I've developed.",
    list: [
      {
        emoji: "🍔",
        label: "Full-Stack Web Dev",
        name: "Food Delivery Platform",
        desc: "MERN stack application featuring JWT authentication securing 5,000+ monthly transactions, integrated Stripe payment API, and optimized RESTful APIs for faster order processing.",
        stack: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
        metricLabel: "Security & Performance:",
        metricVal: "5,000+ monthly users",
        link: "#"
      },
      {
        emoji: "🤖",
        label: "AI / Frontend",
        name: "Gemini AI Clone",
        desc: "AI-powered chatbot application built with React.js. Utilized React Hooks to reduce re-render times by 50%, improved response speed by 30%, and cut latency across 1,000+ daily queries.",
        stack: ["React.js", "JavaScript", "REST API", "CSS3"],
        metricLabel: "Query Accuracy:",
        metricVal: "90% accuracy",
        link: "#"
      },
      {
        emoji: "👁️",
        label: "Computer Vision",
        name: "Face Detection System",
        desc: "Real-time face recognition system built using OpenCV and Python. Achieved 98% detection accuracy with live feed latency under 0.5s and a 25% lower false detection rate.",
        stack: ["Python", "OpenCV", "Machine Learning"],
        metricLabel: "Detection Accuracy:",
        metricVal: "98% accuracy",
        link: "#"
      }
    ]
  },
  services: {
    label: "Experience & Education",
    title: "BACKGROUND",
    subtitle: "My professional Journey, education, and credentials.",
    list: [
      {
        icon: "ti ti-briefcase",
        name: "Conceptia Software Technologies",
        desc: "Junior Software Developer — Built full-stack web apps, Django REST APIs, role-based auth, IETM platforms, and XML-to-PDF pipelines.",
        price: "2025 - Present",
        priceSuffix: "",
        featured: true,
        badge: "CURRENT ROLE",
        includes: ["Django & React Development", "Role-Based Access Control", "XML-to-PDF Pipelines", "Git & Team Collaboration"]
      },
      {
        icon: "ti ti-school",
        name: "Maharani Cluster University",
        desc: "Master of Computer Applications (MCA) — Focused on Data Structures, DBMS, Web Development, and Software Engineering Principles.",
        price: "2023 - 2024",
        priceSuffix: "",
        featured: false,
        includes: ["EQF Level 7 Equivalent", "Software Engineering", "Full-Stack Technologies", "Database Management"]
      }
    ]
  },
  testimonials: {
    label: "Interests & Strengths",
    title: "BEYOND THE CODE",
    subtitle: "Personal hobbies and soft skills that drive my professional approach.",
    list: [
      {
        stars: "📖",
        text: "Diving into books that challenge my thinking, broaden my knowledge, and offer new insights into the world. Keeps me intellectually curious and constantly growing.",
        avatarInitials: "RB",
        name: "Reading Books",
        role: "Continuous Learning"
      },
      {
        stars: "🏔️",
        text: "Exploring outdoor trails and mountains, which builds physical fitness, resilience, focus, and a strong connection with nature.",
        avatarInitials: "TR",
        name: "Trekking",
        role: "Resilience & Wellness"
      }
    ]
  },
  contact: {
    label: "Contact",
    title: "GET IN TOUCH",
    subtitle: "Interested in working together or hiring? Feel free to reach out!",
    text: "I am open to full-stack development, software engineering roles, and technical collaborations. Whether you have a question or want to discuss a potential opportunity, my inbox is open.",
    channels: [
      {
        platform: "Email",
        handle: "monikasm2019@gmail.com",
        icon: "ti ti-mail",
        url: "mailto:monikasm2019@gmail.com"
      },
      {
        platform: "LinkedIn",
        handle: "monika--sm",
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
        url: "#"
      }
    ]
  }
};