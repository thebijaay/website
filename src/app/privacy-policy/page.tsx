import { Column, Heading, Text, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Privacy Policy – ${person.name}`,
    description: `Privacy Policy for ${person.name}'s portfolio website`,
    baseURL: baseURL,
    path: "/privacy-policy",
  });
}

export default function PrivacyPolicy() {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Heading variant="display-strong-l">Privacy Policy</Heading>

      <Text variant="body-default-m" onBackground="neutral-weak">
        Last updated: March 2024
      </Text>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Introduction
        </Heading>
        <Text variant="body-default-m">
          Your privacy is important to us. This Privacy Policy explains how {person.name} collects,
          uses, and protects your personal information when you visit our website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Information Collection
        </Heading>
        <Text variant="body-default-m">
          We may collect personal information that you voluntarily provide to us when you contact us
          through the website. This may include your name, email address, and any other information
          you choose to provide. Additionally, we may automatically collect certain information
          about your device and usage of the website through cookies and similar technologies.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Use of Information
        </Heading>
        <Text variant="body-default-m">
          The information we collect is used to provide and improve our services, respond to your
          inquiries, and analyze how the website is used. We do not sell or share your personal
          information with third parties for their marketing purposes.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Cookies and Tracking
        </Heading>
        <Text variant="body-default-m">
          We use cookies to enhance your experience on our website. You can choose to disable
          cookies through your browser settings, but this may affect your ability to use certain
          features of the site.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Data Security
        </Heading>
        <Text variant="body-default-m">
          We take reasonable measures to protect your personal information from unauthorized access,
          use, or disclosure. However, no method of transmission over the internet or electronic
          storage is 100% secure.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Third-Party Links
        </Heading>
        <Text variant="body-default-m">
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices or content of these sites. We encourage you to review the privacy
          policies of any third-party sites you visit.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Contact
        </Heading>
        <Text variant="body-default-m">
          For questions about this privacy policy, please contact {person.email}.
        </Text>
      </Column>
    </Column>
  );
}
