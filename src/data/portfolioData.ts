export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  category: 'Full Stack' | 'Web Application' | 'Frontend / Analytics';
  image: string;
  galleryImages?: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  keyFeatures: string[];
  problemSolved: string;
  myContribution: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  description: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  certificateLabel: string;
  highlights: string[];
  snapshotImage?: string;
  certificateUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  credentialId?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  platform: string;
  period: string;
  description: string;
  badge: string;
  link?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Aman Pandey",
    role: "B.Tech Computer Science & Engineering Student",
    college: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    email: "amanpandey10a3@gmail.com",
    mobile: "+91-9905784345",
    github: "https://github.com/aman-pa",
    linkedin: "https://linkedin.com/in/amanpandey-",
    driveCvUrl: "https://drive.google.com/file/d/1rjN0lIgJ6dl5xZVGNZkjBh2FOh8I8IOm/view?usp=drive_link",
    bioShort: "Passionate Computer Science & Engineering undergraduate at Lovely Professional University (8.88 CGPA). Skilled in MERN stack, Next.js, C++, and database engineering.",
    bioFull: "I am a B.Tech Computer Science & Engineering student at Lovely Professional University with an 8.88 CGPA. I specialize in building full-stack web applications using JavaScript, Node.js, Express, React, Next.js, PostgreSQL, and MongoDB. With 300+ DSA problems solved on LeetCode and a 5-Star Gold Badge in C++ on HackerRank, I combine strong algorithmic problem-solving with clean web development.",
    avatarUrl: "/avatar.jpg",
    quote: "Building scalable web solutions through clean code and algorithmic rigor.",
    metrics: [
      { label: "LPU CGPA", value: "8.88" },
      { label: "LeetCode Solved", value: "300+" },
      { label: "HackerRank C++", value: "5-Star Gold" },
      { label: "Intermediate", value: "71.8%" },
    ]
  },

  skillsCategories: [
    {
      title: "Languages",
      iconName: "Code2",
      skills: [
        { name: "JavaScript" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "C++" },
        { name: "Java" },
        { name: "Python" },
        { name: "SQL" }
      ]
    },
    {
      title: "Frontend & UI Engineering",
      iconName: "Globe",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Responsive Web Design" },
        { name: "UI/UX" }
      ]
    },
    {
      title: "Tools & Deployment Platforms",
      iconName: "Wrench",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Vercel" },
        { name: "Figma" },
        { name: "Render" }
      ]
    },
    {
      title: "Soft Skills & Management",
      iconName: "BrainCircuit",
      skills: [
        { name: "Communication" },
        { name: "Leadership" },
        { name: "Analytical Thinking" },
        { name: "Project Management" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "medremind",
      title: "MedRemind",
      subtitle: "Medication management made effortless — Medicine reminder, schedule & adherence tracking app",
      period: "Jun' 2026 – Jul' 2026",
      description: "A comprehensive MERN stack medicine reminder application designed to help users track prescriptions, daily schedules, medication adherence analytics (89%), connected doctors, and digital pill boxes.",
      category: "Full Stack",
      image: "/projects/medremind_cover.png",
      galleryImages: [
        "/projects/medremind_cover.png",
        "/projects/medremind_schedule.png",
        "/projects/medremind_analytics.png",
        "/projects/medremind_doctors.png",
        "/projects/medremind_pillbox.png",
        "/projects/medremind_cipherschools.png"
      ],
      tags: ["JavaScript", "Express.js", "Node.js", "React.js", "MongoDB", "PostgreSQL", "Git", "GitHub", "Vercel"],
      githubUrl: "https://github.com/aman-pa",
      liveUrl: "https://med-remind-kappa.vercel.app/",
      problemSolved: "Patients frequently miss prescribed medication times or forget refill schedules, leading to compromised treatment consistency.",
      myContribution: "Engineered the PostgreSQL database schema for prescriptions, integrated automated alert notifications, built the Patient/Doctor role portal, adherence analytics, and developed the React frontend interface.",
      keyFeatures: [
        "Today's Morning & Evening medication schedule with timed reminders",
        "Medication Adherence Analytics Dashboard tracking 89% adherence rate & streaks",
        "Connected Doctors portal linking cardiology & general practice specialists",
        "Digital Pill Box with dosage instructions (Ibuprofen 400mg, Lisinopril 10mg)"
      ]
    },
    {
      id: "sanitizeq",
      title: "SanitizeQ Hygiene Management",
      subtitle: "Washroom Management System to track cleanliness & streamline maintenance scheduling",
      period: "Mar' 2026 – Apr' 2026",
      description: "A comprehensive Washroom Management System designed to log facility maintenance requests, assign cleaning tasks, and track real-time cleanliness status.",
      category: "Web Application",
      image: "/projects/sanitizeq_hero.png",
      galleryImages: [
        "/projects/sanitizeq_hero.png",
        "/projects/sanitizeq_dashboard.png"
      ],
      tags: ["JavaScript", "Express.js", "Node.js", "MongoDB", "PostgreSQL", "Git", "GitHub", "Render"],
      githubUrl: "https://github.com/aman-pa",
      liveUrl: "https://washroom-management.onrender.com/",
      problemSolved: "Facility management teams lack automated systems to track washroom cleanliness requests and delegate cleaning tasks rapidly.",
      myContribution: "Architected a modular Express/Node backend, structured facility records using PostgreSQL, and automated status tracking updates.",
      keyFeatures: [
        "Built Washroom Management System to track cleanliness status & schedule maintenance",
        "Architected modular backend system to log requests & assign cleaning tasks quickly",
        "Utilized PostgreSQL extensively for facility records, staff assignments, and maintenance data",
        "Automated status updates & cleaning schedules, cutting manual tracking effort by ~35%"
      ]
    },
    {
      id: "climate-systems",
      title: "Climate Systems Collapsing",
      subtitle: "Humanity OS — Infernoverse Hackathon Project 2025 @ LPU (Unified Rebuild Ecosystem)",
      period: "Oct' 2025 – Nov' 2025",
      description: "Humanity OS is a revolutionary platform connecting sustainability, safety, and emotional resilience into one intelligent crisis-recovery ecosystem. Monitor, analyze, and respond to global environmental challenges in real time.",
      category: "Frontend / Analytics",
      image: "/projects/climate_hero.png",
      galleryImages: [
        "/projects/climate_hero.png",
        "/projects/climate_pillars.png",
        "/projects/climate_features.png",
        "/projects/climate_users.png"
      ],
      tags: ["HTML", "CSS", "JavaScript", "Infernoverse Hackathon @ LPU", "Git", "GitHub", "GitHub Pages"],
      githubUrl: "https://github.com/aman-pa",
      liveUrl: "https://aman-pa.github.io/Hackathonn/",
      problemSolved: "Global temperature increases (+1.5°C), rising disaster risks (350M+ affected), and declining mental health require a unified intelligent crisis-recovery ecosystem.",
      myContribution: "Built the responsive multi-page layout for Humanity OS, engineered the 3 core pillars (Climate, Disaster Risk, Mental Health), predictive risk alert components, and stakeholder mapping.",
      keyFeatures: [
        "Infernoverse Hackathon Project 2025 @ LPU — Unified Rebuild Ecosystem",
        "3 Core Pillars: Climate Systems Collapsing (+1.5°C), Disaster Risk Rising (350M+), Mental Health Declining (1 in 4)",
        "Predictive Risk Alerts, Emotional Stress Mapping, and Environmental Anomaly Detection",
        "Targeted workflows for Governments, Disaster Management Teams, Relief NGOs, and Smart Cities"
      ]
    }
  ] as Project[],

  education: [
    {
      id: "lpu",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "Aug' 2024 – Present",
      score: "CGPA: 8.88",
      description: "Pursuing B.Tech in CSE with focus on Data Structures & Algorithms, Full-Stack Web Engineering, Database Systems, and Software Engineering principles."
    },
    {
      id: "chinmaya-xii",
      degree: "Intermediate (Class XII)",
      institution: "Chinmaya Vidyalaya South Park",
      location: "Bistupur, Jharkhand",
      period: "Apr' 2023 – May' 2024",
      score: "Percentage: 71.8%",
      description: "Completed Intermediate education with focus on Science and Mathematics."
    },
    {
      id: "chinmaya-x",
      degree: "Matriculation (Class X)",
      institution: "Chinmaya Vidyalaya South Park",
      location: "Bistupur, Jharkhand",
      period: "Apr' 2021 – May' 2022",
      score: "Percentage: 92%",
      description: "Completed Secondary School Examination (Class X) with distinction in Science and Mathematics."
    }
  ] as EducationItem[],

  training: [
    {
      id: "cipherschools",
      title: "Full-Stack Development Training",
      organization: "CipherSchools Training",
      period: "Jun' 2026 – Aug' 2026",
      certificateLabel: "Certificate",
      snapshotImage: "/projects/medremind_cipherschools.png",
      certificateUrl: "https://drive.google.com/file/d/1jXHxJDdQSsN65NHjvRzarlEPAkAOmH1r/view?usp=drive_link",
      highlights: [
        "Completed a certified training program in Full-Stack Development organized by CipherSchools",
        "Strengthened skills in building end-to-end web applications covering frontend & backend",
        "Gained hands-on experience integrating databases, APIs, and modern JavaScript frameworks into full-stack projects",
        "Training Project: MedRemind — Smart Healthcare Tracker (built during summer training)"
      ]
    }
  ] as TrainingItem[],

  certifications: [
    {
      id: "oracle-data-platform",
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "May' 2026",
      credentialId: "103467113OCI25DCFA",
      credentialUrl: "https://drive.google.com/file/d/1dnW55OivIoPwOdcUptHt458e5I6MPLHC/view?usp=drive_link"
    },
    {
      id: "oracle-ai",
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "Mar' 2026",
      credentialUrl: "https://drive.google.com/file/d/1Vjknk-RARIzdiggdPdi7LTxgNiGaZF5Q/view?usp=sharing"
    },
    {
      id: "infosys-dbms-1",
      title: "Database Management System Part - 1",
      issuer: "Infosys Springboard",
      date: "Jul' 2026",
      credentialUrl: "https://drive.google.com/file/d/1OumLlBgO94tHL7xUlfbunltBGK0WdBYU/view?usp=drive_link"
    },
    {
      id: "infosys-dbms-2",
      title: "Database Management System Part - 2",
      issuer: "Infosys Springboard",
      date: "Jul' 2026",
      credentialUrl: "https://drive.google.com/file/d/1MfnzXAq5FefhmEMiVsh2Y-k1A9R3NhyH/view?usp=drive_link"
    },
    {
      id: "tata-genai",
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "TATA / Forage",
      date: "Jun' 2026",
      credentialId: "y6dwynRg7Xac4diGc",
      credentialUrl: "https://drive.google.com/file/d/1m8CC9XF4aK26_iRYBLsNx796LMbSan0g/view?usp=sharing"
    },
    {
      id: "nasscom-mern",
      title: "Full Stack Web Development with MERN Stack",
      issuer: "Nasscom",
      date: "May' 2026",
      credentialUrl: "https://drive.google.com/file/d/1vtRGzxF3dhfT7JM73cK3K_xXLQ-w2wEo/view?usp=drive_link"
    },
    {
      id: "infosys-cpp",
      title: "Programming Using C++",
      issuer: "Infosys Springboard",
      date: "Aug' 2025",
      credentialUrl: "https://drive.google.com/file/d/1y0YJ8rFx188c1AGq7_AGHsNYOljz5D13/view?usp=sharing"
    },
    {
      id: "cipherschools-git",
      title: "Training in Git and GitHub",
      issuer: "CipherSchools",
      date: "Jul' 2026",
      credentialId: "CSW2026-17501",
      credentialUrl: "https://drive.google.com/file/d/1EzYpJqil_RYWJZQjB9XDRUaDTxCmRkeG/view?usp=drive_link"
    },
    {
      id: "deloitte-analytics",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Jan' 2026",
      credentialUrl: "https://drive.google.com/file/d/15qwqfT2x6qzu0o8yMo7t3JwgRTfP2DZe/view?usp=sharing"
    }
  ] as CertificationItem[],

  achievements: [
    {
      id: "leetcode",
      title: "300+ DSA Problems Solved",
      platform: "LeetCode",
      period: "Aug' 2025 – Present",
      badge: "300+ Problems",
      description: "Solved 300+ Data Structures & Algorithms problems on LeetCode, strengthening algorithmic thinking and complex problem-solving skills.",
      link: "https://leetcode.com"
    },
    {
      id: "hackerrank",
      title: "5-Star Gold Badge in C++",
      platform: "HackerRank",
      period: "Jan' 2024 – Present",
      badge: "5-Star Gold",
      description: "Earned 5-Star Gold Badge in C++ programming on HackerRank for demonstrated speed and efficiency in algorithmic coding challenges.",
      link: "https://hackerrank.com"
    }
  ] as AchievementItem[]
};
