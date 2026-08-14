export const personal = {
  name: 'Benny Indriyanto',
  title: 'Senior Backend Engineer',
  tagline: 'Building Robust & Scalable Systems',
  location: 'South Jakarta, Jakarta, Indonesia',
  email: 'neobenny1@gmail.com',
  phone: '+62 813-9292-8197',
  resume: '/resume.pdf',
  cvView: '/resume.html',
  cvDownload: '/resume.pdf',
  availability: 'Open to opportunities',
  social: {
    linkedin: 'https://www.linkedin.com/in/benny-indriyanto',
    github: 'https://github.com/bennyindriyanto',
    whatsapp: 'https://wa.me/6281392928197',
    email: 'mailto:neobenny1@gmail.com',
  },
}

export const about = {
  bio: `Senior Backend Engineer with 4+ years of experience building production systems in finance & payments (credit-card core loan, QRIS, merchant EDC) and EDI supply-chain automation (EDIFACT, SFTP). Expert in Java/Spring Boot microservices — designing scalable services, integrating Elasticsearch, securing applications with robust encryption, and developing REST APIs with JDBC. Experienced in cloud and Linux server deployments.`,
  stats: [
    { value: '4+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: 'Finance', label: 'Industry Focus' },
    { value: '100%', label: 'Delivery Rate' },
  ],
}

export const experience = [
  {
    id: 1,
    role: 'Back End Developer',
    company: 'PT EDI Indonesia',
    type: 'Full-time (On-site)',
    period: 'Oct 2025 — Present',
    current: true,
    highlights: [
      'Build Java/Spring Boot services that automate B2B purchase-order (PO) pipelines for 7+ buyers (Alfamart, Alfamidi, Alfabean, LSI, KCSOFTEX, FFI, Nestle, CCEP, P&G) into EDIFACT ORDERS D:96A documents, handling 20k–50k PO/month.',
      'Implement the full PO pipeline: multi-protocol fetch, GLN/GTIN & price validation, EDIFACT generation, and secure SFTP delivery to the Descartes platform.',
      'Deploy and manage containerized services with Docker on Linux servers; write deployment, rollback, and runbook documentation for the team.',
      'Build a monitoring dashboard for 22 Linux servers with SSH-based health checks and automated Telegram alerting, sustaining ~99.9% pipeline uptime.',
    ],
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'Bank Mega',
    type: 'Full-time (On-site)',
    period: 'May 2024 — Oct 2025',
    current: false,
    highlights: [
      'Develop the credit-card core loan system on a microservices architecture (Spring Boot + Elasticsearch), processing 50k+ daily transactions at p95 latency < 200ms.',
      'Build QRIS payment solutions and a merchant management platform integrated with EDC terminals.',
      'Secure financial transactions with end-to-end encryption, Spring Security, OAuth 2.0, and JWT.',
    ],
  },
  {
    id: 3,
    role: 'Quality Assurance Engineer',
    company: 'PT Mitra Transaksi Indonesia',
    type: 'Contract',
    period: 'Sep 2021 — Feb 2024',
    current: false,
    highlights: [
      'Perform data analysis and comprehensive API testing with Postman across financial products.',
      'Conduct performance testing with JMeter and penetration testing to validate reliability, scalability, and security.',
      'Develop automation testing to improve QA process efficiency and coverage.',
    ],
  },
  {
    id: 4,
    role: 'Web Developer',
    company: 'Freelance',
    type: '',
    period: 'Apr 2021 — Dec 2021',
    current: false,
    highlights: [
      'Deliver end-to-end web solutions for multiple clients with a focus on SQL database optimization.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'EDI PO Automation — Alfagroup / FFI',
    description: 'Automated pipeline converting purchase orders from Alfamart, Alfamidi, and Alfabean into EDIFACT ORDERS D:96A documents, delivered to Descartes via SFTP.',
    icon: 'qrcode',
    tags: ['Java 21', 'Spring Boot 3', 'EDIFACT', 'SFTP', 'PostgreSQL'],
    company: 'PT EDI Indonesia',
  },
  {
    id: 2,
    title: 'Core Loan System',
    description: 'Credit-card core loan system at Bank Mega, handling thousands of daily transactions on a microservices architecture with Elasticsearch.',
    icon: 'credit-card',
    tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Microservices'],
    company: 'Bank Mega',
  },
  {
    id: 3,
    title: 'SCM Monitoring Dashboard',
    description: 'Monitoring dashboard for 22 Linux servers with SSH-based health checks, SSL certificate monitoring, and automated Telegram alerting.',
    icon: 'chart-line',
    tags: ['Java 21', 'Spring Boot', 'React', 'JSch', 'JDBC'],
    company: 'PT EDI Indonesia',
  },
  {
    id: 4,
    title: 'QRIS Payment & Merchant Platform',
    description: 'Real-time QRIS payment solution and merchant management platform integrated with EDC payment processing systems.',
    icon: 'qrcode',
    tags: ['Java', 'REST APIs', 'JDBC', 'SQL'],
    company: 'Bank Mega',
  },
  {
    id: 5,
    title: 'PO Processing Services — LSI / KCSOFTEX',
    description: 'Purchase-order processing with flat-file parsing, SKU validation, and EDIFACT/XML generation for S/4HANA integration.',
    icon: 'store',
    tags: ['Java', 'Spring Boot', 'Flat-file Parsing', 'S/4HANA'],
    company: 'PT EDI Indonesia',
  },
  {
    id: 6,
    title: 'Secure Payment Gateway',
    description: 'Payment gateway with end-to-end encryption, supporting Visa, Mastercard, and various payment methods.',
    icon: 'shield-alt',
    tags: ['Java', 'Spring Security', 'OAuth 2.0', 'JWT'],
    company: 'Bank Mega',
  },
  {
    id: 7,
    title: 'Billiard Booking & POS Backend',
    description: 'Full-featured Spring Boot REST API for a billiard booking & POS system — JWT auth, WebSocket push, Redis caching, multi-method payments, and promo engine. Documented with architecture diagrams and CI.',
    icon: 'qrcode',
    tags: ['Java 21', 'Spring Boot 3.4', 'PostgreSQL', 'Redis', 'WebSocket', 'JWT'],
    company: 'Open Source',
    link: 'https://github.com/bennyindriyanto/billiard-backend-service',
  },
  {
    id: 8,
    title: 'Laundry Management Backend',
    description: 'Spring Boot REST API for a laundry management & POS system — order workflow, pricing, branch management, and WhatsApp notifications. Includes CI and unit tests.',
    icon: 'store',
    tags: ['Java 21', 'Spring Boot 3.4', 'PostgreSQL', 'Redis', 'JWT'],
    company: 'Open Source',
    link: 'https://github.com/bennyindriyanto/laundry-backend-service',
  },
]

export const expertise = [
  {
    title: 'Architecture & Design',
    description: 'Design scalable, maintainable, and resilient microservices architectures using SOLID principles, Clean Architecture, and Domain-Driven Design.',
    icon: 'sitemap',
  },
  {
    title: 'Security First',
    description: 'Apply Spring Security (JWT, OAuth 2.0), data encryption, OWASP best practices, and secure coding to protect systems and user data.',
    icon: 'shield-alt',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize database queries, caching with Redis/Memcached, Elasticsearch indexing, and load balancing for high-performance applications.',
    icon: 'tachometer-alt',
  },
  {
    title: 'CI/CD & DevOps',
    description: 'Automated CI/CD pipelines with Docker, Kubernetes, Jenkins/GitHub Actions for fast, consistent, and reliable deployments.',
    icon: 'cogs',
  },
  {
    title: 'Testing & Quality',
    description: 'Unit testing (JUnit, Mockito), integration testing, API testing (Postman), performance testing (JMeter), and penetration testing to ensure software quality and security.',
    icon: 'microscope',
  },
  {
    title: 'Monitoring & Observability',
    description: 'Implement logging (ELK Stack), monitoring (Prometheus/Grafana), and distributed tracing for real-time system observability.',
    icon: 'chart-line',
  },
]

export const skillGroups = [
  {
    category: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'Java', level: 'Advanced', icon: 'fab fa-java' },
      { name: 'JavaScript', level: 'Intermediate', icon: 'fab fa-js' },
      { name: 'Python', level: 'Intermediate', icon: 'fab fa-python' },
      { name: 'C++', level: 'Beginner', icon: 'fas fa-flask' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'layer-group',
    skills: [
      { name: 'Spring Boot', icon: 'fas fa-leaf' },
      { name: 'Microservices', icon: 'fas fa-cogs' },
      { name: 'REST APIs', icon: 'fas fa-network-wired' },
      { name: 'JDBC / JPA', icon: 'fas fa-database' },
      { name: 'Spring Security', icon: 'fas fa-lock' },
      { name: 'Swagger / OpenAPI', icon: 'fas fa-file-alt' },
      { name: 'JUnit / Mockito', icon: 'fas fa-vial' },
    ],
  },
  {
    category: 'Databases & Search',
    icon: 'database',
    skills: [
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'MS SQL Server', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-leaf' },
      { name: 'Redis', icon: 'fas fa-bolt' },
      { name: 'Memcached', icon: 'fas fa-bolt' },
      { name: 'Elasticsearch', icon: 'fas fa-search' },
      { name: 'Kafka', icon: 'fas fa-stream' },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    icon: 'cloud-upload-alt',
    skills: [
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Kubernetes', icon: 'fas fa-box' },
      { name: 'Linux Server', icon: 'fab fa-linux' },
      { name: 'Tomcat', icon: 'fas fa-server' },
      { name: 'Cloud (AWS / GCP)', icon: 'fas fa-cloud' },
      { name: 'Jenkins / GitHub Actions', icon: 'fas fa-code-branch' },
      { name: 'Prometheus / Grafana', icon: 'fas fa-chart-pie' },
      { name: 'ELK Stack', icon: 'fas fa-file-code' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'tools',
    skills: [
      { name: 'Git / GitHub', icon: 'fab fa-git-alt' },
      { name: 'Postman API', icon: 'fas fa-paper-plane' },
      { name: 'JMeter', icon: 'fas fa-chart-line' },
      { name: 'Penetration Testing', icon: 'fas fa-shield-halved' },
      { name: 'Data Analysis', icon: 'fas fa-chart-bar' },
      { name: 'Jira / Confluence', icon: 'fas fa-tasks' },
      { name: 'Agile / Scrum', icon: 'fas fa-sync-alt' },
      { name: 'Maven / Gradle', icon: 'fas fa-puzzle-piece' },
      { name: 'IntelliJ IDEA', icon: 'fas fa-terminal' },
    ],
  },
]

export const certifications = [
  {
    title: 'Certified Software Engineer',
    issuer: 'HackerRank',
    tags: ['Java', 'C++'],
  },
  {
    title: 'REST API (Intermediate) Certificate',
    issuer: 'HackerRank',
    tags: ['Java', 'REST APIs'],
  },
  {
    title: 'Secure Coding',
    issuer: 'Online Course',
    tags: [],
  },
  {
    title: 'Responsive Web Design Course',
    issuer: 'Online Course',
    tags: [],
  },
  {
    title: 'Prompt Engineering for Everyone',
    issuer: 'Online Course',
    tags: [],
  },
  {
    title: 'Python and Machine Learning for Financial Analysis',
    issuer: 'Online Course',
    tags: [],
  },
]

export const education = {
  degree: 'S1 Information Technology',
  school: 'Universitas Dian Nuswantoro',
  period: '2014 — 2019',
  gpa: '2.85',
  organization: 'Dian Nuswantoro Computer Club (DNCC) 2014',
  focus: 'Software Development, JavaScript, Web Development, SQL',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
