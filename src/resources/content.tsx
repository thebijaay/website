import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jay Prasad",
  lastName: "Majhi",
  name: "Jay Prasad Majhi",
  role: "Full-Stack Developer, Cybersecurity & IT Professional",
  avatar: "/images/avatar.jpeg",
  email: "admin@jayprasad.com.np",
  location: "Asia/Kathmandu",
  languages: ["English", "Nepali"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
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
    link: "https://www.linkedin.com/in/thebijay/",
    essential: true,
  },
  {
    name: "Website",
    icon: "link",
    link: "https://www.jayprasad.com.np",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:admin@jayprasad.com.np",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Full-Stack Developer`,
  description: `Full-Stack Developer | Cybersecurity | IT Professional`,
  headline: <>Full-Stack Developer, Cybersecurity & IT Professional</>,
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
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },

  intro: {
    display: true,
    title: "Professional Summary",
    description: (
      <>
        Dual-qualified professional with 3+ years of experience in student admissions,
        visa processing, financial documentation, and IT support. Strong expertise in
        cybersecurity, CRM systems, and business operations, seeking to leverage
        technical and operational skills in a challenging professional role.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Oli & Associates Pvt. Ltd",
        role: "Admission, Account & Documentation Officer",
        period: "July 2022 – Present",
        description: (
          <>
            <ul>
              <li>Managed end-to-end student admission and visa documentation processes</li>
              <li>Prepared and submitted visa applications and GS documentation</li>
              <li>Handled account reconciliation, data entry, and financial reporting</li>
              <li>Used Salesforce CRM to track applications and client communication</li>
              <li>Maintained accurate student records and compliance documentation</li>
            </ul>
          </>
        ),
      },
      {
        company: "Sagarmatha Teens Club, Koshi Province",
        role: "Vice President",
        period: "December 2019 – November 2021",
        description: (
          <>
            <ul>
              <li>Led team operations and administrative planning</li>
              <li>Organized youth-focused community initiatives and programs</li>
            </ul>
          </>
        ),
      },
    ],
  },

  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Mechi Multiple Campus, Bhadrapur",
        degree: "Bachelor of Business Studies (BBS)",
        period: "December 2021 – Present",
        description: "Business, Finance, Management, Taxation, Auditing",
      },
      {
        name: "Laxmi Prasad Devkota Secondary School",
        degree: "School Leaving Certificate (Management)",
        period: "2019 – 2021",
        description: "Computer Science & Business Math",
      },
      {
        name: "Swarnim Shiksha Sadan Secondary School",
        degree: "Secondary Education Examination (SEE)",
        period: "2018 – 2019",
        description: "",
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Cybersecurity",
        items: [
          "Network Security",
          "Access Controls",
          "Security Infrastructure",
          "Threat Analysis",
        ],
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
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about technology & cybersecurity",
  description: `Insights and updates by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Technical, cybersecurity, and web projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: "Moments, events, and professional highlights",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
