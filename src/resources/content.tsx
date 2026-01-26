import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jay Prasad",
  lastName: "Majhi",
  name: `Jay Prasad Majhi`,
  role: "Full-Stack Developer, Cybersecurity & IT Professional",
  avatar: "/images/avatar.jpeg",
  email: "admin@jayprasad.com.np",
  firstName: "Jay Prasad",
  lastName: "Majhi",
  name: `Jay Prasad Majhi`,
  role: "Full-Stack Developer, Cybersecurity & IT Professional",
  email: "it.assistant@usa.com",
  location: "Asia/Kathmandu", // IANA time zone for Nepal
  languages: ["English", "Nepali", "Hindi"],
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
    link: "https://github.com/Jaymaji",
    link: "https://github.com/thebijaay",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jay-prasad-majhi-277662237/",
    link: "https://www.linkedin.com/in/thebijay/",
    essential: true,
  },
  {
    name: "Website",
    icon: "link",
    link: "https://www.jayprasad.com.np",
    link: "https://www.jayprasad.com.np",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:admin@jayprasad.com.np`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Full-Stack Developer`,
  description: `Front-End Developer${person.role}`,
  headline: <>Full-Stack Developer, Cybersecurity & IT Professional</>,
  headline: <>Full-Stack Developer, Cybersecurity & IT Professionall</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Dual-qualified professional with 3+ years of experience in admissions, visa processing, financial documentation, and IT support.
Certified in Cybersecurity (CC), CompTIA CYSA+, and Microsoft Azure Fundamentals. Skilled in Salesforce CRM, student
documentation, account reconciliation, and network security. Seeking to leverage business operations and IT expertise in a
challenging role.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dual-qualified professional with 3+ years of experience in admissions, visa processing, financial documentation, and IT support.
Certified in Cybersecurity (CC), CompTIA CYSA+, and Microsoft Azure Fundamentals. Skilled in Salesforce CRM, student
documentation, account reconciliation, and network security. Seeking to leverage business operations and IT expertise in a
challenging role.
        <br />
        Interests: Technology, Tech Enthusiast, Tech Communities, Coding, Travel, Listening Music, Tech Gadgets
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Oli & Associates Pvt. Ltd",
        timeframe: "2022 - Present",
        role: "Admission Officer",
        achievements: [
          <>Assisted students with university and course selection.</>,
          <>Guided students through the application and admission process.</>,
          <>Provided comprehensive support to ensure a smooth transition to their chosen university.</>,
        ],
      },
      {
        company: "Sagarmatha Teens Club",
        timeframe: "Nov 2018 - October 2021",
        role: "Vice President",
        achievements: [
          <>Led various social initiatives and community service projects.</>,
          <>Organized educational workshops and events for youth empowerment.</>,
          <>Managed club activities and fostered a collaborative environment.</>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Mechi Multiple Campus (Tribhuvan University)",
        description: <>Bachelor of Business Studies-Running</>,
      },
      {
        name: "National Education Board (NEB)",
        description: <>High School</>,
      },
      {
        name: "National Education Board (NEB)",
        description: <>School Leaving Certificate</>,
      },
      {
        name: "EC-Council",
        description: <>Certified Ethical Hacker (CEH) - In Progress</>,
      },
      {
        name: "Cisco Networking Academy",
        description: <>Cybersecurity Essentials</>,
      },
      {
      },
      {
        name: "EC-Council",
        description: <>Certified Ethical Hacker (CEH) - In Progress</>,
      },
      {
        name: "Cisco Networking Academy",
        description: <>Cybersecurity Essentials</>,
      },
      {
        name: "The Digital Investigator",
        description: <>Certified Digital Forensic Investigator (CDFI)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Cybersecurity",
        description: (
          <>
            Digital Forensics, Penetration Testing, Malware Analysis, Network Security, Web
            Application Security.
          </>
        ),
      },
      {
        title: "Programming",
        description: <>C, C++, Java, Python, JavaScript, PHP, HTML, CSS</>,
      },
      {
        title: "Database",
        description: <>MySQL, Oracle</>,
      },
      {
        title: "Networking",
        description: <>Cisco Packet Tracer, Wireshark, Nmap</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  posts: [
    {
      title: "The Importance of a Strong Online Presence for Businesses",
      description: "In today's digital age, having a strong online presence is no longer just an option for businesses – it's a necessity. From attracting new customers to building brand credibility, a well-crafted online presence can make all the difference in the success of your business. In this blog post, we'll explore the importance of a strong online presence and provide actionable tips for improving yours.",
      image: "/images/img-1.png",
      date: "2024-04-01",
      featured: true,
      author: {
        name: person.name,
      },
      tags: ["Online Presence", "Digital Marketing", "Business Growth"],
    },
    {
      title: "10 Essential Cybersecurity Tips for Small Businesses",
      description: "Small businesses are increasingly becoming targets for cyberattacks. With limited resources and a lack of dedicated IT support, small businesses are often more vulnerable to cyber threats than larger corporations. However, there are simple yet effective steps that small business owners can take to protect their data and systems. In this blog post, we'll share 10 essential cybersecurity tips for small businesses.",
      image: "/images/img-2.jpg",
      date: "2024-04-05",
      author: {
        name: person.name,
      },
      tags: ["Cybersecurity", "Small Business", "Data Protection"],
    },
    {
      title: "The Future of Artificial Intelligence: Trends to Watch",
      description: "Artificial intelligence (AI) is rapidly changing the world as we know it. From self-driving cars to personalized medicine, AI is poised to revolutionize every industry. In this blog post, we'll explore the latest trends in AI and discuss what the future holds for this transformative technology.",
      image: "/images/img-3.jpg",
      date: "2024-04-10",
      author: {
        name: person.name,
      },
      tags: ["Artificial Intelligence", "Future of Tech", "AI Trends"],
    },
    {
      title: "How to Build a Successful E-commerce Business from Scratch",
      description: "Starting an e-commerce business can be a daunting task. From choosing the right platform to marketing your products, there are a million and one things to consider. However, with the right strategy and execution, building a successful e-commerce business is well within reach. In this blog post, we'll walk you through the process of building a successful e-commerce business from scratch.",
      image: "/images/img-4.jpg",
      date: "2024-04-15",
      author: {
        name: person.name,
      },
      tags: ["E-commerce", "Entrepreneurship", "Online Business"],
    },
  ],
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/gallery-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
     {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
