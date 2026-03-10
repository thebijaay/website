import { Column, Heading, Text, MasonryGrid, Media, Meta, Schema, Flex } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const certificates = [
  {
    src: "/images/certificate/CertNexus Certified Data_page-0002.jpg",
    alt: "CertNexus Certified Data Science Practitioner",
  },
  {
    src: "/images/certificate/AWS Certified Developer Associate_page-0002.jpg",
    alt: "AWS Certified Developer – Associate",
  },
  {
    src: "/images/certificate/Google Cloud Generative AI Leader_page-0002.jpg",
    alt: "Google Cloud Generative AI Leader",
  },
  {
    src: "/images/certificate/University of London_page-0002.jpg",
    alt: "University of London - Full-Stack Web Development",
  },
  {
    src: "/images/certificate/AWS Generative AI_page-0002.jpg",
    alt: "AWS Generative AI & AI Agents",
  },
  {
    src: "/images/certificate/CertNexus Certified Data_page-0003.jpg",
    alt: "CertNexus Certified Data Science Practitioner - Page 2",
  },
  {
    src: "/images/certificate/AWS Certified Developer Associate_page-0003.jpg",
    alt: "AWS Certified Developer – Associate - Page 2",
  },
  {
    src: "/images/certificate/Google Cloud Generative AI Leader_page-0003.jpg",
    alt: "Google Cloud Generative AI Leader - Page 2",
  },
  {
    src: "/images/certificate/University of London_page-0003.jpg",
    alt: "University of London - Full-Stack Web Development - Page 2",
  },
  {
    src: "/images/certificate/AWS Generative AI_page-0003.jpg",
    alt: "AWS Generative AI & AI Agents - Page 2",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: `Certificates – ${person.name}`,
    description: `Professional certifications and achievements of ${person.name}`,
    baseURL: baseURL,
    path: "/certificates",
  });
}

export default function Certificates() {
  return (
    <Flex maxWidth="l" fillWidth horizontal="center" direction="column">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Certificates – ${person.name}`}
        description={`Professional certifications and achievements of ${person.name}`}
        path="/certificates"
        image={`/api/og/generate?title=${encodeURIComponent("Certificates")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="m" marginBottom="xl">
        <Heading variant="display-strong-l">Certificates</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          A collection of my professional certifications and academic achievements.
        </Text>
      </Column>
      <MasonryGrid columns={2} s={{ columns: 1 }} gap="m">
        {certificates.map((certificate, index) => (
          <Media
            key={index}
            src={certificate.src}
            alt={certificate.alt}
            enlarge
            radius="m"
            aspectRatio="4 / 3"
          />
        ))}
      </MasonryGrid>
    </Flex>
  );
}
