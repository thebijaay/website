import { Column, Heading, Text, SmartLink, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Terms & Conditions – ${person.name}`,
    description: `Comprehensive Terms and Conditions for ${person.name}'s portfolio website`,
    baseURL: baseURL,
    path: "/terms-conditions",
  });
}

export default function TermsConditions() {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Heading variant="display-strong-l">Terms & Conditions</Heading>

      <Text variant="body-default-m" onBackground="neutral-weak">
        Last updated: May 2024
      </Text>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Acceptance of Terms</Heading>
        <Text variant="body-default-m">
          By using this website, you agree to these Terms & Conditions. If you do not agree, please
          discontinue use.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Intellectual Property</Heading>
        <Text variant="body-default-m">
          All content, including text and images, is the property of {person.name}. Unauthorized use
          is prohibited.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Limitation of Liability</Heading>
        <Text variant="body-default-m">
          The website is provided "as is". {person.name} is not liable for any damages arising from
          your use of the site.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Contact</Heading>
        <Text variant="body-default-m">
          For any questions, contact us at: <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>.
        </Text>
      </Column>
    </Column>
  );
}
