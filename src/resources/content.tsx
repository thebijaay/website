import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jay prasad",
  lastName: "Majhi",
  name: `Jay prasad Majhi`,
  role: "Cyber security Analyst",
  avatar: "/images/avatar.jpeg",
  email: "example@gmail.com",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Securing the digital frontier, one line of code at a time</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SecureDev</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Jay, a Cyber Security Analyst and Full Stack Developer, passionate about building secure
      and resilient applications. I thrive on solving complex problems and protecting digital
      assets.
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jay Prasad Majhi is a dedicated Cyber Security Analyst and expert Full Stack Developer with
        a passion for building secure and scalable applications. With a strong foundation in both
        offensive and defensive security measures, he excels at identifying vulnerabilities and
        implementing robust solutions. His expertise spans the entire development lifecycle, from
        secure coding practices to deploying resilient infrastructure.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SecureNet Solutions",
        timeframe: "2021 - Present",
        role: "Senior Cyber Security Analyst",
        achievements: [
          <>
            Led threat intelligence and incident response initiatives, reducing security incidents
            by 30%.
          </>,
          <>
            Developed and implemented a comprehensive vulnerability management program, resulting
            in a 40% reduction in critical vulnerabilities.
          </>,
          <>
            Performed penetration testing and security audits for web applications and cloud
            infrastructure.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Cybersecurity Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Innovatech",
        timeframe: "2018 - 2021",
        role: "Full Stack Developer",
        achievements: [
          <>
            Engineered and maintained secure, high-performance web applications using the MERN
            stack.
          </>,
          <>
            Integrated security best practices into the SDLC, including static and dynamic code
            analysis.
          </>,
          <>
            Contributed to the development of a secure authentication and authorization system.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Code on a screen",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Tribhuvan University",
        description: <>B.Sc. in Computer Science and Information Technology</>,
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        description: <>Advanced training in penetration testing and ethical hacking methodologies.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Cybersecurity",
        description: (
          <>
            Proficient in penetration testing, vulnerability assessment, and incident response.
            Experienced with tools like Metasploit, Wireshark, and Burp Suite.
          </>
        ),
        tags: [
          {
            name: "Penetration Testing",
            icon: "shield",
          },
          {
            name: "Incident Response",
            icon: "alert",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Network diagram",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full Stack Development",
        description: (
          <>
            Expertise in building and deploying web applications with JavaScript, React, Node.js,
            and Python. Experience with both SQL and NoSQL databases, and cloud platforms like
            AWS.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Cloud infrastructure diagram",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
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
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
