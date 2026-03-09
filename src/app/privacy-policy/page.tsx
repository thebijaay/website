import { Column, Heading, Text, SmartLink, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Privacy Policy – ${person.name}`,
    description: `Comprehensive Privacy Policy for ${person.name}'s portfolio website detailing data collection, usage, and protection.`,
    baseURL: baseURL,
    path: "/privacy-policy",
  });
}

export default function PrivacyPolicy() {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Heading variant="display-strong-l">Privacy Policy</Heading>

      <Text variant="body-default-m" onBackground="neutral-weak">
        Last updated: May 2024
      </Text>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Introduction</Heading>
        <Text variant="body-default-m">
          Your privacy is important to us. This policy outlines how {person.name} collects and uses
          your information.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Data Collection</Heading>
        <Text variant="body-default-m">
          We collect personal information you provide (name, email) and automated usage data (IP address,
          cookies) to improve your experience.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Use of Information</Heading>
        <Text variant="body-default-m">
          Collected data is used to maintain the website, respond to enquiries, and analyze traffic.
          We do not sell your personal information.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Security & Rights</Heading>
        <Text variant="body-default-m">
          We use industry-standard security to protect your data. You have the right to access,
          correct, or delete your personal information by contacting us.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Contact</Heading>
        <Text variant="body-default-m">
          Questions? Contact us at: <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>.
        </Text>
      </Column>
    </Column>
  );
}
