import { Column, Heading, Text, MasonryGrid, Media, Meta, Schema, Flex } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const certificates = [
  { src: "/images/certificate/CertNexus Certified Data_page-0002.jpg", alt: "CertNexus Certified Data Science Practitioner - P1" },
  { src: "/images/certificate/CertNexus Certified Data_page-0003.jpg", alt: "CertNexus Certified Data Science Practitioner - P2" },
  { src: "/images/certificate/CertNexus Certified Data_page-0004.jpg", alt: "CertNexus Certified Data Science Practitioner - P3" },
  { src: "/images/certificate/CertNexus Certified Data_page-0005.jpg", alt: "CertNexus Certified Data Science Practitioner - P4" },
  { src: "/images/certificate/CertNexus Certified Data_page-0006.jpg", alt: "CertNexus Certified Data Science Practitioner - P5" },
  { src: "/images/certificate/CertNexus Certified Data_page-0007.jpg", alt: "CertNexus Certified Data Science Practitioner - P6" },
  { src: "/images/certificate/AWS Certified Developer Associate_page-0002.jpg", alt: "AWS Certified Developer – Associate - P1" },
  { src: "/images/certificate/AWS Certified Developer Associate_page-0003.jpg", alt: "AWS Certified Developer – Associate - P2" },
  { src: "/images/certificate/AWS Certified Developer Associate_page-0004.jpg", alt: "AWS Certified Developer – Associate - P3" },
  { src: "/images/certificate/AWS Certified Developer Associate_page-0005.jpg", alt: "AWS Certified Developer – Associate - P4" },
  { src: "/images/certificate/Google Cloud Generative AI Leader_page-0002.jpg", alt: "Google Cloud Generative AI Leader - P1" },
  { src: "/images/certificate/Google Cloud Generative AI Leader_page-0003.jpg", alt: "Google Cloud Generative AI Leader - P2" },
  { src: "/images/certificate/Google Cloud Generative AI Leader_page-0004.jpg", alt: "Google Cloud Generative AI Leader - P3" },
  { src: "/images/certificate/Google Cloud Generative AI Leader_page-0005.jpg", alt: "Google Cloud Generative AI Leader - P4" },
  { src: "/images/certificate/Google Cloud Generative AI Leader_page-0006.jpg", alt: "Google Cloud Generative AI Leader - P5" },
  { src: "/images/certificate/University of London_page-0002.jpg", alt: "University of London - Full-Stack Web Development - P1" },
  { src: "/images/certificate/University of London_page-0003.jpg", alt: "University of London - Full-Stack Web Development - P2" },
  { src: "/images/certificate/University of London_page-0004.jpg", alt: "University of London - Full-Stack Web Development - P3" },
  { src: "/images/certificate/AWS Generative AI_page-0002.jpg", alt: "AWS Generative AI & AI Agents - P1" },
  { src: "/images/certificate/AWS Generative AI_page-0003.jpg", alt: "AWS Generative AI & AI Agents - P2" },
  { src: "/images/certificate/AWS Generative AI_page-0004.jpg", alt: "AWS Generative AI & AI Agents - P3" },
  { src: "/images/certificate/horizontal-1.jpg", alt: "Professional Certificate 1" },
  { src: "/images/certificate/horizontal-2.jpg", alt: "Professional Certificate 2" },
  { src: "/images/certificate/horizontal-3.jpg", alt: "Professional Certificate 3" },
  { src: "/images/certificate/horizontal-4.jpg", alt: "Professional Certificate 4" },
  { src: "/images/certificate/horizontal-5.jpg", alt: "Professional Certificate 5" },
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
          A collection of my professional certifications and academic achievements. Click on any certificate to view it in full detail.
        </Text>
      </Column>
      <MasonryGrid columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="m">
        {certificates.map((certificate, index) => (
          <Flex key={index} direction="column" gap="8">
            <Media
              src={certificate.src}
              alt={certificate.alt}
              enlarge
              radius="m"
              aspectRatio="4 / 3"
            />
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              {certificate.alt}
            </Text>
          </Flex>
        ))}
      </MasonryGrid>
    </Flex>
  );
}
