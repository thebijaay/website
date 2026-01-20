import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jay Prasad",
  lastName: "Majhi",
  name: `Jay Prasad Majhi`,
  role: "Front-End Developer, Cybersecurity & IT Professional",
  avatar: "/images/avatar.jpeg",
  email: "admin@jayprasad.com.np",
  firstName: "Jay Prasad",
  lastName: "Majhi",
  name: `Jay Prasad Majhi`,
  role: "Front-End Developer, Cybersecurity & IT Professional",
  avatar: "/images/avatar.jpeg",
  email: "admin@jayprasad.com.np",
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
  title: `${person.name}'s Portfolio`,
  description: `Front-End Developer${person.role}`,
  headline: <>Front-End Developer, Cybersecurity & IT Professional</>,
  headline: <>Front-End Developer, Cybersecurity & IT Professional</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      A dedicated and results-oriented professional with a unique blend of experience in both the
      education and technology sectors. I bridge the gap between student aspirations and academic
      opportunities while ensuring the security and integrity of digital infrastructures.
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
        I am a dedicated and results-oriented professional with a unique blend of experience in
        both the education and technology sectors. As an Admission Officer, I excel at guiding
        prospective students through the complexities of the university admission process,
        providing them with the information and support they need to make informed decisions about
        their academic future. My background in Cybersecurity and IT allows me to contribute to the
        security and efficiency of our digital infrastructure, ensuring a safe and seamless
        experience for both students and staff. I am passionate about leveraging my dual expertise
        to create a positive and secure environment that fosters educational growth and success.
        <br />
        <br />
        Interests: Traveling, Photography, Public Speaking, and engaging in CTF (Capture The Flag)
        competitions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Oli & Associates Pvt. Ltd",
        timeframe: "Feb 2024 - Present",
        role: "Admission Officer",
        achievements: [
          <>Assisted students with university and course selection.</>,
          <>Guided students through the application and admission process.</>,
          <>Provided comprehensive support to ensure a smooth transition to their chosen university.</>,
        ],
        images: [
          {
            src: "/images/work/work-1.jpg",
            alt: "Work 1",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        company: "Sagarmatha Teens Club",
        timeframe: "Nov 2018 - Jan 2024",
        role: "Vice President",
        achievements: [
          <>Led various social initiatives and community service projects.</>,
          <>Organized educational workshops and events for youth empowerment.</>,
          <>Managed club activities and fostered a collaborative environment.</>,
        ],
        images: [
           {
            src: "/images/work/work-2.jpg",
            alt: "Work 2",
            width: 16,
            height: 9,
          }
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Sunway International Business School",
        description: <>Bachelor of Business Studies</>,
      },
      {
        name: "Koshi Saint James Secondary School",
        description: <>High School</>,
      },
      {
        name: "Sagarmatha Secondary School",
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