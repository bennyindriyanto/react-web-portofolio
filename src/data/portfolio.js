export const personal = {
  name: 'Benny Indriyanto',
  title: 'Senior Backend Engineer',
  tagline: 'Building Robust & Scalable Systems',
  location: 'South Jakarta, Jakarta, Indonesia',
  email: 'neobenny1@gmail.com',
  phone: '+62 813-9292-8197',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/benny-indriyanto',
    github: 'https://github.com/bennyindriyanto',
    whatsapp: 'https://wa.me/6281392928197',
    email: 'mailto:neobenny1@gmail.com',
  },
}

export const about = {
  bio: `Seorang Senior Backend Engineer berpengalaman dengan keahlian khusus di sistem core loan (kartu kredit), sistem pembayaran QRIS, dan merchant. Memiliki rekam jejak dalam membangun microservices yang skalabel, integrasi dengan Elasticsearch, serta mengamankan aplikasi menggunakan protokol enkripsi yang kuat. Terbiasa menangani RESTful API, JDBC untuk manajemen data, serta memiliki latar belakang kuat dalam deployment berbasis Cloud dan server Linux.`,
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
    period: 'Oct 2025 – Present',
    current: true,
    highlights: [
      'Fokus pada pengembangan sistem menggunakan ekosistem Java Development',
      'Membangun arsitektur backend yang kokoh dan scalable',
    ],
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'Bank Mega',
    type: 'Full-time (On-site)',
    period: 'May 2024 – Oct 2025 · 1 yr 6 mos',
    current: false,
    highlights: [
      'Bertanggung jawab dalam pengembangan sistem core loan untuk kartu kredit',
      'Mengembangkan solusi pembayaran QRIS dan sistem merchant',
      'Mengimplementasikan arsitektur Microservices, Spring Boot, dan Elasticsearch',
      'Mengamankan transaksi dengan enkripsi dan protokol keamanan',
    ],
  },
  {
    id: 3,
    role: 'Quality Assurance Engineer',
    company: 'PT Mitra Transaksi Indonesia',
    type: 'Contract',
    period: 'Sep 2021 – Feb 2024 · 2 yrs 6 mos',
    current: false,
    highlights: [
      'Melakukan analisis data (Data Analysis) dan pengujian API menggunakan Postman API',
      'Memastikan kualitas dan standar fungsionalitas software sebelum rilis ke produksi',
      'Mengembangkan automation testing untuk meningkatkan efisiensi QA process',
    ],
  },
  {
    id: 4,
    role: 'Web Developer',
    company: 'Freelance',
    type: '',
    period: 'Apr 2021 – Dec 2021 · 9 mos',
    current: false,
    highlights: [
      'Membangun dan mengembangkan aplikasi berbasis web dengan fokus optimalisasi SQL database',
      'Delivered end-to-end web solutions for multiple clients',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Core Loan System',
    description: 'Sistem core loan untuk kartu kredit di Bank Mega, menangani ribuan transaksi harian dengan arsitektur microservices.',
    icon: 'credit-card',
    tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Microservices'],
  },
  {
    id: 2,
    title: 'QRIS Payment System',
    description: 'Solusi pembayaran QRIS yang terintegrasi dengan merchant dan sistem perbankan, mendukung transaksi real-time.',
    icon: 'qrcode',
    tags: ['Java', 'REST APIs', 'JDBC', 'SQL'],
  },
  {
    id: 3,
    title: 'Merchant Management Platform',
    description: 'Platform manajemen merchant terintegrasi dengan sistem EDC, enabling seamless payment processing.',
    icon: 'store',
    tags: ['Spring Boot', 'Microservices', 'Docker', 'Linux'],
  },
  {
    id: 4,
    title: 'Secure Payment Gateway',
    description: 'Payment gateway dengan enkripsi end-to-end, mendukung Visa, Mastercard, dan berbagai metode pembayaran.',
    icon: 'shield-alt',
    tags: ['Java', 'Spring Security', 'OAuth 2.0', 'JWT'],
  },
]

export const expertise = [
  {
    title: 'Architecture & Design',
    description: 'Merancang arsitektur microservices yang scalable, maintainable, dan resilient menggunakan SOLID principles, Clean Architecture, dan Domain-Driven Design.',
    icon: 'sitemap',
  },
  {
    title: 'Security First',
    description: 'Menerapkan Spring Security (JWT, OAuth 2.0), enkripsi data, OWASP best practices, dan secure coding untuk melindungi sistem dan data pengguna.',
    icon: 'shield-alt',
  },
  {
    title: 'Performance Optimization',
    description: 'Optimasi query database, caching dengan Redis/Memcached, indexing Elasticsearch, dan load balancing untuk performa aplikasi yang tinggi.',
    icon: 'tachometer-alt',
  },
  {
    title: 'CI/CD & DevOps',
    description: 'Pipeline CI/CD otomatis dengan Docker, Kubernetes, Jenkins/GitHub Actions untuk deployment yang cepat, konsisten, dan reliable.',
    icon: 'cogs',
  },
  {
    title: 'Testing & Quality',
    description: 'Unit testing (JUnit, Mockito), integration testing, API testing (Postman), dan automation testing (Selenium) untuk menjamin kualitas software.',
    icon: 'microscope',
  },
  {
    title: 'Monitoring & Observability',
    description: 'Implementasi logging (ELK Stack), monitoring (Prometheus/Grafana), dan distributed tracing untuk observability sistem secara real-time.',
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
    title: 'Responsive Web Design Course',
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
  period: '2014 – 2019',
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
