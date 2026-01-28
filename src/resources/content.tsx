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
  description: `Front-End Developer | ${person.role}`,
  headline: <>Full-Stack Developer, Cybersecurity & IT Professional</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Dual-qualified professional with 3+ years of experience in admissions, visa processing,
      financial documentation, and IT support. Certified in Cybersecurity (CC), CompTIA CYSA+,
      and Microsoft Azure Fundamentals.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dual-qualified professional with strong experience in IT support, cybersecurity,
        documentation, and business operations.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  posts: [],
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
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
