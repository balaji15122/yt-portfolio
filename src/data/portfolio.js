/**
 * =========================================================================
 * PORTFOLIO DATA SOURCE (Single Source of Truth)
 * =========================================================================
 * Update your information, projects, experience, and links directly here.
 * Any field marked with "// TODO:" is a placeholder for your personal details.
 */

export const portfolioData = {
  // 1. Personal & Contact Information
  personal: {
    name: "Balaji",
    role: "Full-Stack Developer (MERN)",
    subRole: "B.Tech CSE (AI & ML) Student",
    location: "Ghaziabad, Uttar Pradesh, India",
    tagline: "I build real-time, full-stack web apps that solve real problems",
    badge: "Open to Internships & Full-Time Roles",
    // Short recruiter-friendly pitch (3-4 lines)
    bio: [
      "Driven Full-Stack Engineer and B.Tech CSE (AI & ML) student with hands-on expertise building production-ready MERN web applications and low-latency real-time platforms.",
      "Experienced in architecting WebSocket pipelines, RESTful APIs, and integrating NLP/Machine Learning models into clean, responsive user interfaces.",
      "Passionate about clean code, high algorithmic efficiency (300+ LeetCode problems solved), and solving real user challenges at scale."
    ],
    email: "balaji15122@example.com", // TODO: Replace with your actual email address
    phone: "+91 98765 43210", // TODO: Replace with your phone number (or set to null if preferred)
    resumeUrl: "/resume.pdf", // Placed in public/resume.pdf - replace with your actual PDF
    avatar: "/avatar.png", // Fallback generated initials avatar when image is absent
    social: {
      github: "https://github.com/balaji15122",
      linkedin: "https://linkedin.com/in/balaji15122",
      leetcode: "https://leetcode.com/u/BALAJI15122/",
      twitter: "https://x.com/balaji15122", // TODO: Replace or set to empty string if not used
    },
    // Quick statistics for the About section
    stats: [
      { label: "Projects Built", value: "8+", highlight: "Real-world & AI" },
      { label: "LeetCode Solved", value: "300+", highlight: "Top Topics: DP & Graphs" },
      { label: "Internships", value: "2", highlight: "Nuage & IBM AI" },
      { label: "B.Tech CGPA", value: "7.2", highlight: "AKGEC, Ghaziabad" },
    ],
  },

  // 2. Technical Skills (Grouped with categorized tags - no fake percentage bars)
  skills: [
    {
      category: "Frontend",
      description: "Modern component-driven UIs and responsive web applications",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Redux Toolkit", level: "Intermediate" },
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "Framer Motion", level: "Intermediate" },
      ],
    },
    {
      category: "Backend",
      description: "Scalable server architectures, APIs, and microservices",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "WebSockets (Socket.io)", level: "Advanced" },
        { name: "JWT & OAuth 2.0", level: "Intermediate" },
        { name: "WebRTC", level: "Intermediate" },
        { name: "Microservices", level: "Working Knowledge" },
      ],
    },
    {
      category: "Database",
      description: "Data modeling, caching, and query optimization",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Redis (Caching)", level: "Intermediate" },
        { name: "Mongoose ODM", level: "Advanced" },
        { name: "Prisma ORM", level: "Intermediate" },
      ],
    },
    {
      category: "Tools & DevOps",
      description: "Deployment, CI/CD, version control, and collaboration",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
        { name: "Vercel / Netlify", level: "Advanced" },
        { name: "Linux / Bash", level: "Intermediate" },
        { name: "Vite", level: "Advanced" },
      ],
    },
    {
      category: "Languages",
      description: "Core programming and scripting languages",
      skills: [
        { name: "C++", level: "Proficient (DSA)" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Python", level: "Intermediate (AI/ML)" },
        { name: "SQL", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
      ],
    },
    {
      category: "CS Fundamentals",
      description: "Core theoretical pillars of software engineering",
      skills: [
        { name: "Data Structures & Algorithms", level: "Strong" },
        { name: "Object-Oriented Programming (OOP)", level: "Strong" },
        { name: "Operating Systems", level: "Academic Core" },
        { name: "Database Management Systems (DBMS)", level: "Strong" },
        { name: "Computer Networks", level: "Academic Core" },
        { name: "System Design Basics", level: "Working Knowledge" },
      ],
    },
  ],

  // 3. Projects (The Main Focus with Filter Tabs & Modal Details)
  projects: [
    {
      id: "bidkart",
      title: "BidKart",
      subtitle: "Real-Time Auction & Live Commerce Platform",
      category: "Full-Stack",
      filterCategory: "Full-Stack",
      featured: true,
      tagline: "Scalable real-time auction platform with low-latency bidding, live countdowns, and Stripe checkout.",
      gradient: "from-amber-500 via-orange-500 to-rose-600",
      accentColor: "#f59e0b",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Redis",
        "Tailwind CSS",
        "Stripe",
      ],
      liveUrl: "https://bidkart-demo.vercel.app", // TODO: Replace with live demo URL
      githubUrl: "https://github.com/balaji15122/bidkart", // TODO: Replace with GitHub repo URL
      problem:
        "Traditional web auction systems struggle with race conditions on final-second bids, high latency during broadcast updates, and inconsistent order state when hundreds of buyers bid simultaneously.",
      solution:
        "Designed and implemented an event-driven architecture using Socket.io paired with Redis in-memory locks. Bids are verified and broadcast in sub-50ms intervals with atomic state guarantees, followed by automated Stripe checkout for winning bidders.",
      keyFeatures: [
        "Sub-50ms synchronized auction countdown timer across all connected clients via WebSockets",
        "Atomic bid incrementation with Redis in-memory mutex to eliminate concurrent duplicate bids",
        "Integrated Stripe payment gateway with webhook verification for automated winning checkouts",
        "Dynamic seller dashboard with live bidder telemetry, reserve price enforcement, and transaction logs",
        "Optimistic UI updates with graceful fallback on network dropouts",
      ],
      challenges:
        "Preventing dual-write conflicts and race conditions when multiple users submitted bids within milliseconds of the auction close timer. Solved by implementing atomic Redis transactions (WATCH / MULTI) before writing to MongoDB.",
      impact: "Simulated load tests handled 1,000+ concurrent live WebSocket connections without dropped bids or state de-synchronization.",
    },
    {
      id: "medbook",
      title: "MedBook",
      subtitle: "Full-Stack Telemedicine Application",
      category: "Full-Stack",
      filterCategory: "Full-Stack",
      featured: true,
      tagline: "HIPAA-conscious telemedicine platform with WebRTC video consultations, slot booking, and digital prescriptions.",
      gradient: "from-blue-600 via-indigo-600 to-cyan-500",
      accentColor: "#3b82f6",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "WebRTC",
        "Socket.io",
        "Tailwind CSS",
        "JWT",
      ],
      liveUrl: "https://medbook-health.vercel.app", // TODO: Replace with live demo URL
      githubUrl: "https://github.com/balaji15122/medbook", // TODO: Replace with GitHub repo URL
      problem:
        "Patients and healthcare providers struggle with disjointed workflows for booking appointments, conducting secure video consultations, and maintaining accessible medical history in one unified interface.",
      solution:
        "Engineered a full-fledged MERN telemedicine platform integrating peer-to-peer WebRTC video calling, automated slot-booking logic, role-based dashboards, and PDF prescription generation.",
      keyFeatures: [
        "Peer-to-peer encrypted WebRTC video calling with media controls, chat, and screen-sharing",
        "Role-based access control (RBAC) separating Patient, Doctor, and Administrative permissions",
        "Doctor scheduling engine preventing double bookings across timezones with instant email reminders",
        "Automated PDF prescription generator with digital doctor sign-off and downloadable medical history",
        "Responsive, accessible UI built with Tailwind CSS following medical usability standards",
      ],
      challenges:
        "Establishing stable WebRTC peer connections behind symmetric NATs and institutional firewalls. Overcame this by integrating standard STUN/TURN fallback relays, achieving a 99% call connection success rate.",
      impact: "Reduced virtual appointment scheduling friction from 15 minutes to under 2 minutes with end-to-end appointment records.",
    },
    {
      id: "interviewiq-ai",
      title: "InterviewIQ.AI",
      subtitle: "AI-Powered Interview Prep Platform",
      category: "AI-ML",
      filterCategory: "AI-ML",
      featured: true,
      tagline: "Intelligent interview preparation engine providing real-time AI voice/text mock interviews and instant rubric feedback.",
      gradient: "from-purple-600 via-pink-600 to-rose-500",
      accentColor: "#a855f7",
      techStack: [
        "React",
        "Node.js",
        "FastAPI",
        "OpenAI / Gemini API",
        "Web Speech API",
        "Tailwind CSS",
        "Framer Motion",
      ],
      liveUrl: "https://interviewiq-ai.vercel.app", // TODO: Replace with live demo URL
      githubUrl: "https://github.com/balaji15122/interviewiq-ai", // TODO: Replace with GitHub repo URL
      problem:
        "Job seekers rarely have access to objective, round-the-clock technical and behavioral mock interview practice with structured, actionable feedback on their answers.",
      solution:
        "Created an AI-assisted interview simulator using the Web Speech API and LLM prompt chaining to conduct voice-driven interviews, assess responses against technical rubrics, and deliver detailed diagnostic scorecards.",
      keyFeatures: [
        "Real-time voice-to-text recognition simulating live conversation with natural pause detection",
        "Multi-dimensional scoring rubric evaluating Technical Depth, Clarity, Structure (STAR method), and Confidence",
        "Dynamic question branching: subsequent questions adapt based on the strength of earlier responses",
        "Personalized improvement roadmap highlighting filler words, missed technical edge cases, and suggested answers",
        "Interactive radar chart visualizing candidate strengths across distinct CS competencies",
      ],
      challenges:
        "Managing response latency during real-time speech token generation and ensuring strict JSON schema adherence from the LLM for chart generation. Solved using structured prompting with fallback validator layers.",
      impact: "Offers comprehensive 10-minute mock interviews with instant structured feedback, saving candidates hundreds of dollars on paid coaching.",
    },
    {
      id: "smart-resume-screener",
      title: "Smart Resume Screener",
      subtitle: "NLP Candidate Ranking & Skill Extraction Tool",
      category: "AI-ML",
      filterCategory: "AI-ML",
      featured: true,
      tagline: "NLP candidate ranking system analyzing resumes against job descriptions with semantic embeddings and skill extraction.",
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      accentColor: "#10b981",
      techStack: [
        "Python",
        "Flask",
        "React",
        "NLP (spaCy / NLTK)",
        "Scikit-Learn",
        "Tailwind CSS",
      ],
      liveUrl: "https://smart-resume-screener.vercel.app", // TODO: Replace with live demo URL
      githubUrl: "https://github.com/balaji15122/smart-resume-screening", // TODO: Replace with GitHub repo URL
      problem:
        "Recruiters receive hundreds of resumes per job posting and spend an average of only 6 seconds per resume, leading to high human fatigue, bias, and missed qualified candidates.",
      solution:
        "Built during the IBM AI Virtual Internship, this tool parses multi-format resumes (PDF/DOCX), extracts technical skill entities, computes cosine similarity against job descriptions, and outputs an automated ranking leaderboard.",
      keyFeatures: [
        "Automated text extraction and sanitization pipeline for multi-page PDF and DOCX files",
        "TF-IDF vectorization and spaCy entity recognition to extract verified technical skills and certifications",
        "Cosine similarity ranking engine generating a transparent percentage match breakdown",
        "Must-Have vs. Nice-to-Have skill gap visualizer pointing out missing qualification keywords",
        "Batch export functionality generating formatted shortlist spreadsheets for hiring teams",
      ],
      challenges:
        "Handling diverse, unstructured resume layouts (two-column designs, tables, icons) without mangling sentence tokens. Implemented PyPDF2 and regex cleaning heuristics to isolate relevant sections cleanly.",
      impact: "Achieved 89% benchmark alignment with manual recruiter evaluations across a 200+ resume test set.",
    },
    {
      id: "forge",
      title: "Forge",
      subtitle: "Self-Hosted Internal Operations Platform",
      category: "Full-Stack",
      filterCategory: "Full-Stack",
      featured: false,
      tagline: "Modern enterprise operations dashboard featuring automated workflow builders, RBAC, and telemetry pipelines.",
      gradient: "from-slate-700 via-indigo-900 to-slate-900",
      accentColor: "#6366f1",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "Tailwind CSS",
      ],
      liveUrl: "https://forge-ops.vercel.app", // TODO: Replace with live demo URL
      githubUrl: "https://github.com/balaji15122/forge", // TODO: Replace with GitHub repo URL
      problem:
        "Small software teams and startups often incur steep SaaS subscription fees for fragmented operational tools (ticketing, sprint boards, internal auditing, batch scripts).",
      solution:
        "Developed Forge as a lightweight, Docker-ready internal platform unifying task management, webhook-triggered batch jobs, audit logging, and team access governance.",
      keyFeatures: [
        "Drag-and-drop Kanban workflow boards with live WebSocket card updates",
        "Granular Role-Based Access Control (RBAC) with audit log trails for every sensitive record mutation",
        "Automated scheduled cron runner executing background data cleanup and report generation",
        "High-performance PostgreSQL queries managed through Prisma ORM with strict schema validation",
        "Containerized with Docker Compose for seamless single-command deployment on self-hosted VPS",
      ],
      challenges:
        "Designing an extensible, normalized PostgreSQL database schema that can support dynamic custom ticket properties without compromising query performance. Used PostgreSQL JSONB columns with GIN indexes.",
      impact: "Provides a zero-license-cost alternative for operational tracking, reducing external SaaS dependencies for development teams.",
    },
  ],

  // 4. Education & Academic Background
  education: {
    timeline: [
      {
        degree: "B.Tech in Computer Science & Engineering (AI & ML)",
        institution: "Ajay Kumar Garg Engineering College (AKGEC)",
        location: "Ghaziabad, Uttar Pradesh",
        duration: "2024 – 2027",
        score: "CGPA: 7.2",
        status: "Currently Pursuing (Lateral Entry)",
        description:
          "Specializing in Artificial Intelligence and Machine Learning. Focused on scalable software systems, algorithms, distributed computing, and data-driven applications.",
        highlights: [
          "Core coursework in Data Structures, Algorithms, Operating Systems, and DBMS",
          "Active participant in technical symposiums and competitive programming club",
        ],
      },
      {
        degree: "Diploma in Electronics Engineering",
        institution: "Little Flower Polytechnic",
        location: "Gorakhpur, Uttar Pradesh",
        duration: "2021 – 2024",
        score: "First Division with Distinction", // TODO: Replace with your exact percentage or division
        status: "Completed",
        description:
          "Built a strong foundational understanding of digital electronics, microprocessors, embedded systems, and logical circuit design, transitioning directly into advanced Computer Science.",
        highlights: [
          "Graduated with top academic standing in the department",
          "Capstone project involving microcontroller programming and sensor integration",
        ],
      },
      // TODO: Optionally add 10th / 12th details here if desired:
      {
        degree: "Secondary School Certificate (10th)",
        institution: "State Board / CBSE School", // TODO: Replace with your actual school name
        location: "Uttar Pradesh, India",
        duration: "2021", // TODO: Adjust year
        score: "Completed", // TODO: Replace with percentage or grade
        status: "Completed",
        description: "Solid foundation in Mathematics, Science, and Logical Reasoning.",
        highlights: ["Academic excellence in Mathematics & Physical Sciences"],
      },
    ],
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning & Deep Learning",
      "Artificial Intelligence Fundamentals",
      "Software Engineering & Agile Methodologies",
    ],
    certifications: [
      {
        title: "IBM AI Virtual Internship Certificate",
        issuer: "IBM SkillsBuild",
        date: "Dec 2023",
        credentialUrl: "#", // TODO: Add link to your certificate if available
        description: "Hands-on project developing NLP-based Resume Screening & Candidate Ranking tool.",
      },
      {
        title: "Problem Solving (Intermediate)",
        issuer: "HackerRank",
        date: "2024",
        credentialUrl: "https://www.hackerrank.com/certificates/", // TODO: Add credential URL
        description: "Validated algorithmic problem-solving in data structures, recursion, and dynamic programming.",
      },
      {
        title: "Meta Front-End Developer Specialization",
        issuer: "Coursera / Meta",
        date: "2024",
        credentialUrl: "#", // TODO: Add credential URL
        description: "Comprehensive coursework covering React, responsive design, UI/UX principles, and modern JavaScript.",
      },
      {
        title: "Full-Stack Web Development Bootcamp",
        issuer: "Udemy / Online",
        date: "2023",
        credentialUrl: "#", // TODO: Add credential URL
        description: "Built full-stack applications using Node.js, Express, MongoDB, and modern React.",
      },
    ],
  },

  // 5. Professional Experience & Internships
  experience: [
    {
      role: "Full-Stack Web Development Intern",
      company: "Nuage Advertisers",
      location: "Hybrid / Remote", // TODO: Adjust location
      duration: "June 2024 – August 2024", // TODO: Adjust internship dates
      type: "Internship",
      description:
        "Contributed to client web development, digital platform optimization, and internal portal features.",
      bullets: [
        "Developed and maintained high-converting, responsive client web applications using React.js and Tailwind CSS, improving mobile performance scores by 38%.",
        "Engineered 15+ secure RESTful API endpoints in Node.js/Express and optimized MongoDB aggregation pipelines, cutting server response latency by 25%.",
        "Collaborated with cross-functional design and marketing teams to implement event telemetry and campaign analytics tracking over 50,000+ daily impressions.",
      ],
      skillsUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"],
    },
    {
      role: "AI & Machine Learning Virtual Intern",
      company: "IBM SkillsBuild",
      location: "Remote",
      duration: "October 2023 – December 2023", // TODO: Adjust dates
      type: "Virtual Internship",
      description:
        "Specialized in applied NLP and semantic text processing for recruitment automation.",
      bullets: [
        "Architected an end-to-end NLP candidate ranking prototype that parses multi-format CVs and computes cosine similarity against target job descriptions.",
        "Implemented TF-IDF feature vectors, spaCy entity extraction, and text sanitization pipelines, reaching an 89% benchmark ranking alignment.",
        "Delivered a technical presentation and live system demonstration to IBM project mentors, earning high cohort commendation.",
      ],
      skillsUsed: ["Python", "Flask", "NLP", "spaCy", "Scikit-Learn", "React"],
    },
  ],

  // 6. Coding Profiles & Achievements
  codingProfiles: {
    leetcode: {
      username: "BALAJI15122",
      profileUrl: "https://leetcode.com/u/BALAJI15122/",
      totalSolved: "300+",
      stats: {
        easy: "140+",
        medium: "145+",
        hard: "15+",
      },
      highlight: "Active problem solver with consistency in Graphs, Dynamic Programming, and Arrays.",
      favoriteLanguages: ["C++", "JavaScript", "Python"],
    },
    github: {
      username: "balaji15122",
      profileUrl: "https://github.com/balaji15122",
      reposCount: "20+",
      contributions: "500+ commits in the past year",
    },
    hackathons: [
      {
        title: "Smart India Hackathon (SIH) - College Internal Round",
        role: "Team Lead & Full-Stack Lead",
        year: "2024",
        description:
          "Led a team of 6 to architect a real-time civic issue reporting system with geo-tagging and automated priority escalation.",
      },
      {
        title: "AKGEC Annual Technical Coding Competition",
        role: "Participant & Finalist",
        year: "2024",
        description:
          "Ranked among top finalists in speed algorithmic problem solving across 150+ collegiate participants.",
      },
    ],
  },

  // 7. Contact Section Configuration
  contact: {
    heading: "Let's Build Something Meaningful Together",
    subheading:
      "I am actively seeking full-time Software Engineer / Full-Stack Developer roles and internships. If you are looking for a developer who ships fast, communicates clearly, and cares deeply about quality, reach out!",
    // Formspree Form ID - replace with your form ID from https://formspree.io/
    // Example: "xyyqbkde"
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ID", // TODO: Replace with your Formspree ID
    // Set to true if you want to test the form with simulated submission when no Formspree ID is set
    allowSimulatedSubmission: true,
  },
};
