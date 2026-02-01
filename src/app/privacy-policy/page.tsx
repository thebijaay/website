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
        Last updated: January 2026
      </Text>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Information Collection</Heading>
        <Text variant="body-default-m">
          This website does not collect personal information from visitors unless voluntarily provided through contact forms or email. Any information shared through the contact form is used solely for responding to inquiries.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Cookies and Analytics</Heading>
        <Text variant="body-default-m">
          This website may use cookies and analytics tools to improve user experience and understand how visitors interact with the site. These tools collect anonymous data such as page views, browser type, and general location.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Third-Party Services</Heading>
        <Text variant="body-default-m">
          This website may contain links to external sites. These third-party sites have their own privacy policies, and we are not responsible for their content or practices.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Data Security</Heading>
        <Text variant="body-default-m">
          Reasonable measures are taken to protect any personal information shared through this website. However, no method of transmission over the internet is completely secure.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Contact</Heading>
        <Text variant="body-default-m">
          For questions about this privacy policy, please contact {person.email}.
        </Text>
      </Column>
    </Column>
  );
}
