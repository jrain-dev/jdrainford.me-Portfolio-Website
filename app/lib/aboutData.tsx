// lib/aboutData.ts

export type ExperienceItem = {
  role: string
  company: string
  date: string
  bullets: string[]
}

export type EducationItem = {
  school: string
  degree: string
  detail: string
}

export type CertificationItem = {
  name: string
  issuer: string
  sub?: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'CoreAI Machine Learning Engineering Intern',
    company: 'The Home Depot',
    date: 'May 2026 – August 2026',
    bullets: [
      'Engineered and implemented a proprietary agentic model-agnostic skill ingestion framework for enterprise deployment.',
      'Accelerated deployment of agentic workflows, improving developer productivity across technical teams.',
    ],
  },
  {
    role: 'OrangeWorks Software Engineering Intern',
    company: 'The Home Depot',
    date: 'August 2025 – December 2025',
    bullets: [
      'Engineered a real-time computer vision alarm system using Python, OpenCV, and YOLOv11 on Raspberry Pi, integrating dual-camera feeds for low-latency pedestrian detection and pose estimation in heavy machinery environments.',
      'Developed an interactive dashboard for dynamically defining polygon exclusion zones, using a multi-threaded structure to trigger audio alarms and event logging.',
    ],
  },
  {
    role: 'Junior Developer + Quality Tester',
    company: 'Iron Bird Solutions',
    date: 'May 2025 – August 2025',
    bullets: [
      'Engineered automated and manual tests for pension calculation algorithms using Python, ensuring compliance with proprietary specifications.',
    ],
  },
  {
    role: 'Machine Learning Data Collection Intern',
    company: 'HoneyToCocoa',
    date: 'March 2025 – May 2025',
    bullets: [
      'Created and followed a field data collection methodology to obtain 200+ unique data points to help train a proprietary AI model.',
    ],
  },
  {
    role: 'Sales Associate | Cashier | Lift Equipment Operator',
    company: 'The Home Depot',
    date: 'March 2023 – May 2026',
    bullets: [],
  },
]

export const education: EducationItem[] = [
  {
    school: 'Kennesaw State University',
    degree: 'B.S. Computer Science',
    detail: '3.2 GPA — December 2025',
  },
  {
    school: 'Kennesaw State University',
    degree: 'M.S. Artificial Intelligence',
    detail: 'Expected Graduation 2027',
  },
]

export const certifications: CertificationItem[] = [
  {
    name: 'PCEP – Python Entry Level Programmer (PCEP-30-02)',
    issuer: 'OpenEDG Python Institute',
  },
  {
    name: 'Kennesaw State Institutional Research Certifications',
    issuer: 'Collaborative Institutional Training Initiative',
    sub: [
      'FERPA for Researchers',
      'Artificial Intelligence (AI) and Human Subject Protections',
      'Biomedical Research with Human Subjects',
      'Social, Behavioral, and Educational Research with Human Subjects',
    ],
  },
  {
    name: 'Home Depot AI Specialist Certification Program',
    issuer: 'DataCamp',
    sub: [
      'Prompt Engineering and Developing Systems with the OpenAI API',
      'Monetizing Artificial Intelligence',
      'Monitoring Machine Learning Concepts',
      'Artificial Intelligence Governance',
    ],
  },
  {
    name: 'AI Engineer for Developers Certification — In Progress',
    issuer: 'DataCamp',
    sub: [
      'LLM Ops Concepts',
      'Developing LLM Applications with LangChain',
      'Building AI Applications with Pinecone',
      'Software Engineering Principles in Python',
      'Introduction to MCP',
    ],
  },
  {
    name: 'Claude Code 101',
    issuer: 'Anthropic',
  },
]