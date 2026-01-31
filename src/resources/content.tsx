import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Jay Prasad",
  lastName: "Majhi",
  name: "Jay Prasad Majhi",
  role: "Full-Stack Developer, Cybersecurity & IT Professional",
  avatar: "/images/avatar.jpeg",
  email: "it@jayprasad.com.np",
  location: "Asia/Kathmandu", // ✅ Correct IANA timezone
  languages: ["English", "Nepali"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on technology, cybersecurity, and IT</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thebijaay",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/thebijay",
    essential: true,
  },
  {
    name: "Website",
    icon: "link",
    link: "https://jayprasad.com.np",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:it@jayprasad.com.np",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Cybersecurity & IT Professional`,
  description: "Cybersecurity | IT Support | Business Operations",
  headline: <>Cybersecurity & IT Professional</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Dual-qualified professional with 3+ years of experience in student admissions,
      visa processing, financial documentation, and IT support. Certified in
      Cybersecurity (CC), CompTIA CySA+, and Microsoft Azure Fundamentals.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Professional profile of ${person.name}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },

  intro: {
    display: true,
    title: "Professional Summary",
    description: (
      <>
        Dual-qualified professional with 3+ years of experience in student admissions,
        visa processing, financial documentation, and IT support. Skilled in Salesforce
        CRM, account reconciliation, student documentation, and network security.
        Career goal is to leverage business operations and IT expertise in a challenging role.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Oli & Associates Pvt. Ltd",
        role: "Admission, Account Officer",
        period: "July 2022 – Present",
        description: (
          <ul>
            <li>Managed end-to-end student admission processes</li>
            <li>Handled visa documentation and compliance requirements</li>
            <li>Prepared and submitted visa applications and GS documentation</li>
            <li>Performed account reconciliation, data entry, and financial reporting</li>
            <li>Used Salesforce CRM to track student profiles and application status</li>
            <li>Maintained accurate student and compliance records</li>
          </ul>
        ),
      },
      {
        company: "Sagarmatha Teens Club, Koshi Province",
        role: "Vice President",
        period: "December 2019 – November 2021",
        description: (
          <ul>
            <li>Led team operations and organizational planning</li>
            <li>Organized youth-focused community initiatives</li>
          </ul>
        ),
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Mechi Multiple Campus, Bhadrapur",
        degree: "Bachelor of Business Studies (BBS)",
        period: "December 2021 – Present",
        description: "Business, Finance, Management, Taxation, Auditing | Jhapa, Nepal",
      },
      {
        name: "Laxmi Prasad Devkota Secondary School",
        degree: "School Leaving Certificate (Management)",
        period: "2019 – 2021",
        description: "Computer Science, Business Math | Jhapa, Nepal",
      },
      {
        name: "Swarnim Shiksha Sadan Secondary School",
        degree: "Secondary Education Examination (SEE)",
        period: "2018 – 2019",
        description: "Jhapa, Nepal",
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Cybersecurity",
        items: ["Network Security", "Access Controls", "Security Infrastructure", "Threat Analysis"],
      },
      {
        title: "CRM Software",
        items: ["Salesforce"],
      },
      {
        title: "Data Analytics",
        items: ["Data Science", "Analytical Tools"],
      },
      {
        title: "Education Consulting",
        items: ["Visa Processing", "GS Documentation", "Admissions", "Student Counseling"],
      },
      {
        title: "Cloud Computing",
        items: ["Microsoft Azure", "Cloud Management"],
      },
      {
        title: "Web Development",
        items: ["Front-End Engineering", "Website Management"],
      },
      {
        title: "Business Operations",
        items: ["Accounting", "Financial Reporting", "Documentation", "Client Communication"],
      },
    ],
  },

  certifications: {
    display: true,
    title: "Certifications",
    items: [
      "Certified in Cybersecurity (CC) – Skillsoft (2025)",
      "CompTIA Cybersecurity Analyst+ (CySA+) – Skillsoft (2025)",
      "Microsoft Azure Fundamentals – Skillsoft (2025)",
      "Data Science & Analytics – HP LIFE (2025)",
      "Front-End Software Engineering – Forage (Skyscanner)",
      "Tata Cybersecurity Analyst – Forage",
      "LinkedIn Marketing Strategy Certification",
      "Trained NT Education Agent – Northern Territory Government",
      "British Council Certified UK Agent & Counsellor",
      "ApplyBoard Counsellor Course – Canada",
      "Google Gemini Certified Educator",
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Technology, Cybersecurity & IT",
  description: `Articles and insights by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: "Cybersecurity, IT, and web-based projects",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: "Professional moments and achievements",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
