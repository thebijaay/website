import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Jay Prasad",
  lastName: "Majhi",
  name: "Jay Prasad Majhi",
  role: "Data Science, Cloud Computing, and Software Development Professional",
  avatar: "/images/avatar.jpeg",
  email: "it@jayprasad.com.np",
  location: "Asia/Kathmandu",
  languages: ["English", "Nepali"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on technology, cybersecurity, and IT</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/thebijaay", essential: true },
  { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/thebijay", essential: true },
  { name: "Website", icon: "link", link: "https://jayprasad.com.np", essential: true },
  { name: "Email", icon: "email", link: "mailto:it@jayprasad.com.np", essential: true },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Data Science & IT Professional`,
  description: "Data Science | Cloud Computing | Software Development",
  headline: <>Data Science & IT Professional</>,
  featured: { display: false, title: <></>, href: "" },
  subline: (
    <>
      I am a passionate Data Science, Cloud Computing, and Software Development professional with
      strong expertise in AI, analytics, cybersecurity, and digital technologies.
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
    title: "About Me",
    description: (
      <>
        I am a passionate Data Science, Cloud Computing, and Software Development professional with
        strong expertise in AI, analytics, cybersecurity, and digital technologies. I hold multiple
        internationally recognized certifications across data science, cloud platforms,
        cybersecurity, and digital marketing.
        <br />
        <br />I am committed to continuous learning and innovation, with hands-on experience in AI
        development, analytics, full-stack web development, and cloud technologies.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Oli & Associates Pvt. Ltd",
        role: "Admission, Visa & Account Officer",
        timeframe: "July 2022 – Present",
        achievements: [
          <>Managed end-to-end student admission processes</>,
          <>Handled visa documentation and compliance requirements</>,
          <>Prepared and submitted visa applications and GS documentation</>,
          <>Performed account reconciliation, data entry, and financial reporting</>,
          <>Used Salesforce CRM to track student profiles and application status</>,
          <>Maintained accurate student and compliance records</>,
        ],
      },
      {
        company: "Sagarmatha Teens Club, Koshi Province",
        role: "Vice President",
        timeframe: "December 2019 – November 2021",
        achievements: [
          <>Led team operations and organizational planning</>,
          <>Organized youth-focused community initiatives</>,
        ],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Mechi Multiple Campus, Bhadrapur",
        description: <>Bachelor of Business Studies (BBS)</>,
        timeframe: "December 2021 – Present",
        details: [
          <>Business, Finance, Management, Taxation, Auditing</>,
          <>Location: Jhapa, Nepal</>,
        ],
      },
      {
        name: "Laxmi Prasad Devkota Secondary School",
        description: <>School Leaving Certificate (Management)</>,
        timeframe: "2019 – 2021",
        details: [<>Computer Science</>, <>Business Math</>, <>Location: Jhapa, Nepal</>],
      },
      {
        name: "Swarnim Shiksha Sadan Secondary School",
        description: <>Secondary Education Examination (SEE)</>,
        timeframe: "2018 – 2019",
        details: [<>Location: Jhapa, Nepal</>],
      },
    ],
  },

  technical: {
    display: true,
    title: "Professional Certifications",
    certificates: [
      {
        title: "CertNexus Certified Data Science Practitioner",
        image: "/images/Certificates/CertNexus Certified Data_page-0002.jpg",
      },
      {
        title: "AWS Certified Developer – Associate",
        image: "/images/Certificates/AWS Certified Developer Associate_page-0002.jpg",
      },
      {
        title: "Google Cloud Generative AI Leader",
        image: "/images/Certificates/Google Cloud Generative AI Leader_page-0002.jpg",
      },
      {
        title: "University of London - Full-Stack Web Development",
        image: "/images/Certificates/University of London_page-0002.jpg",
      },
      {
        title: "AWS Generative AI & AI Agents",
        image: "/images/Certificates/AWS Generative AI_page-0002.jpg",
      },
    ],
    skills: [
      {
        title: "Data Science",
        items: ["CertNexus Certified Data Science Practitioner"],
      },
      {
        title: "Cloud Computing & IT",
        items: [
          "AWS Certified Developer – Associate (Coursera)",
          "Google Cloud Generative AI Leader (Coursera)",
          "AWS Generative AI & AI Agents with Amazon Bedrock (Coursera)",
        ],
      },
      {
        title: "Data Science & Analytics",
        items: [
          "R for Data Science: Analysis and Visualization – LinkedIn",
          "Python for AI Projects: From Data Exploration to Impact – LinkedIn",
          "Complete Guide to Python for Data Engineering: Beginner to Advanced – LinkedIn",
          "Deloitte Australia – Data Analytics Job Simulation – Forage",
          "Data Analytics – HP LIFE",
        ],
      },
      {
        title: "Software Engineering & Development",
        items: [
          "Full-Stack Web Development — University of London (Coursera)",
          "Skyscanner – Front-End Software Engineering – Forage",
          "Quantium – Data Analytics – Forage",
        ],
      },
      {
        title: "Cybersecurity",
        items: [
          "CompTIA Cybersecurity Analyst: Network Security Concepts – Skillsoft",
          "Certified in Cybersecurity (CC): Networking & Security Infrastructure – Skillsoft",
          "Certified in Cybersecurity (CC): Logical Access Controls – Skillsoft",
          "Tata – Cybersecurity Analyst – Forage",
        ],
      },
      {
        title: "Digital Marketing & Analytics",
        items: [
          "Certified in Google Analytics (Analytics 4) – Google / Skillshop",
          "Gemini Certified Educator – Google",
          "LinkedIn Marketing Strategy Certification – LinkedIn",
        ],
      },
      {
        title: "Education & Counselling Certifications",
        items: [
          "British Council Certified UK Agent & Counsellor – British Council",
          "Trained NT Education Agent – Northern Territory Government",
        ],
      },
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
  images: [
    {
      src: "/images/certificate/CertNexus Certified Data_page-0002.jpg",
      alt: "CertNexus Certified Data Science Practitioner",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/AWS Certified Developer Associate_page-0002.jpg",
      alt: "AWS Certified Developer – Associate",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/Google Cloud Generative AI Leader_page-0002.jpg",
      alt: "Google Cloud Generative AI Leader",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/University of London_page-0002.jpg",
      alt: "University of London - Full-Stack Web Development",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/AWS Generative AI_page-0002.jpg",
      alt: "AWS Generative AI & AI Agents",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-1.jpeg",
      alt: "Professional moment",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpeg",
      alt: "Professional moment",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpeg",
      alt: "Professional moment",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpeg",
      alt: "Professional moment",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-5.jpeg",
      alt: "Professional moment",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
