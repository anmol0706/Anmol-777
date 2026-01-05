// Portfolio Data Configuration
// This file contains all your personal portfolio data

export const siteConfig = {
    name: "Anmol Malviya",
    title: "Full-Stack Web Developer",
    tagline: "I enjoy building real-world web applications with modern technologies.",
    email: "anmol0706@gmail.com",
    phone: "+91 XXXXXXXXXX",
    location: "India",
    availability: "Available for freelance work",
    avatarUrl: "/profile.jpg",
    aboutImageUrl: "/AboutPic.jpeg",
    social: {
        github: "https://github.com/anmol0706",

        linkedin: "https://linkedin.com/in/anmol-malviya",
        twitter: "https://twitter.com",
        instagram: "https://www.instagram.com/anmol_20_7_/?hl=en",
    },
};

export const aboutData = {
    intro: `Hi, I'm Anmol Malviya, a passionate Full-Stack Web Developer skilled in React, Node.js, and MongoDB. I enjoy building real-world web applications that solve problems and create value.`,
    journey: `My journey in tech started with a curiosity about how things work on the web. Today, I'm passionate about creating seamless user experiences and writing code that's not just functional, but elegant and maintainable.`,
    interests: `When I'm not coding, you'll find me exploring new technologies, contributing to open source, or brainstorming the next big project idea.`,
    stats: [
        { value: '10+', label: 'Projects Completed' },
        { value: '3+', label: 'Years Learning' },
        { value: '10+', label: 'Public Repos' },
        { value: '100%', label: 'Passion' },
    ],
};

export const skillsData = {
    frontend: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'HTML/CSS', level: 95 },
    ],
    backend: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'Socket.io', level: 75 },
        { name: 'Python', level: 70 },
    ],
    tools: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 85 },
        { name: 'Linux', level: 75 },
    ],
    additional: [
        'Redux', 'Zustand', 'Mongoose', 'JWT', 'Firebase', 'Vercel', 'Render',
        'GSAP', 'Framer Motion', 'REST APIs', 'WebSockets', 'Agile/Scrum', 'Gemini AI'
    ],
};

export const projectsData = [
    {
        id: 1,
        title: 'Adaptive AI Interviewer',
        description: 'Elite SaaS platform conducting AI interviews with real-time feedback, dynamic difficulty adjustment, and deep performance analytics.',
        image: '/projects/AdaptiveAIInterviewer.png',
        tech: ['Google Gemini AI', 'React', 'Node.js', 'Docker'],
        liveUrl: 'https://ai-interviewer-liss.onrender.com/',
        githubUrl: 'https://github.com/anmol0706/AI-Interviewer',
        category: 'fullstack',
        featured: true
    },
    {
        id: 2,
        title: 'Shopping Platform',
        description: 'A production-ready e-commerce application with Pinterest-inspired design, horizontal scrollers, and glass morphism UI.',
        image: '/projects/ShoppingPlatform.png',
        tech: ['React 18', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Stripe'],
        liveUrl: 'https://shopease-wlmj.onrender.com/',
        githubUrl: 'https://github.com/anmol0706/Shopping',
        category: 'fullstack',
        featured: true
    },
    {
        id: 3,
        title: 'GPC Itarsi College Portal',
        description: 'An institutional management system with role-based dashboards for Admins, Students, and Teachers.',
        image: '/projects/GPC-Itarsi.png',
        tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: 'https://gpc-itarsi-9cl7.onrender.com/',
        githubUrl: 'https://github.com/anmol0706/GPC-Itarsi',
        category: 'fullstack',
        featured: true
    },
    {
        id: 4,
        title: 'ProjectX',
        description: 'High-performance multi-page Next.js application with clean architecture and modern motion design.',
        image: '/projects/ProjectX.png',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: 'https://ogeditor2.onrender.com',
        githubUrl: 'https://github.com/anmol0706/ProjectX',
        category: 'frontend',
        featured: true
    },
    {
        id: 6,
        title: 'Personal Portfolio',
        description: 'Modern, high-performance developer portfolio built with Next.js 15, GSAP, and Framer Motion. Features custom cursor, particle effects, and lenient scrolling.',
        image: '/projects/personal-portfolio.png',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
        liveUrl: 'https://anmol-malviya.onrender.com/',
        githubUrl: 'https://github.com/anmol0706/Portfolio/tree/master',
        category: 'frontend',
        featured: true
    },
    {
        id: 7,
        title: 'Video Conferencing App',
        description: 'Real-time video communication platform enabling seamless peer-to-peer connections with instant messaging capabilities.',
        image: '/projects/VC.png',
        tech: ['React', 'Node.js', 'Socket.io', 'WebRTC'],
        liveUrl: 'https://vc-3rz6.onrender.com/',
        githubUrl: 'https://github.com/anmol0706/VC',
        category: 'fullstack',
        featured: true
    }
];

export const certificatesData = [
    {
        id: 1,
        title: 'CyberThinker Competition (1st Position)',
        issuer: 'GeeksforGeeks PIEMR',
        date: '2024',
        credentialId: 'GFG-PIEMR-2024-001',
        url: 'https://github.com/anmol0706',
        image: '/certificates/CyberThinker.jpeg',
        skills: ['Problem Solving', 'Competitive Programming', 'Cyber Security']
    },
    {
        id: 2,
        title: 'Cyber Security Certificate Program',
        issuer: 'IIT Jodhpur TISC',
        date: '2024',
        credentialId: 'MPIITJ-0330',
        url: 'https://github.com/anmol0706',
        image: '/certificates/IITJODHPUR.jpeg',
        skills: ['Network Security', 'Ethical Hacking', 'Cyber Laws']
    },
    {
        id: 3,
        title: 'Summer Internship (4-Week)',
        issuer: 'HostKash',
        date: '2024',
        credentialId: 'HK-2024/CSE1-125',
        url: 'https://hostkash.in',
        image: '/certificates/HostKash.jpeg',
        skills: ['Web Development', 'Industry Standards', 'Team Collaboration']
    },
    {
        id: 4,
        title: 'UNXT Soft Skill Development',
        issuer: 'SGBS UNNATI FOUNDATION',
        date: '2024',
        credentialId: 'UNXT-200213',
        url: 'https://unnatiblr.org',
        image: '/certificates/Unnati.jpeg',
        skills: ['Spoken English', 'Employability Skills', 'Life Skills']
    }
];

export const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
];
