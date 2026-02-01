import { Column, Heading, Text, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Terms & Conditions – ${person.name}`,
    description: `Terms and Conditions for ${person.name}'s portfolio website`,
    baseURL: baseURL,
    path: "/terms-conditions",
  });
}

export default function TermsConditions() {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Heading variant="display-strong-l">Terms & Conditions</Heading>

      <Text variant="body-default-m" onBackground="neutral-weak">
        Last updated: January 2026
      </Text>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Acceptance of Terms</Heading>
        <Text variant="body-default-m">
          By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use this website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Intellectual Property</Heading>
        <Text variant="body-default-m">
          The content on this website, including text, images, graphics, and code, is the property of {person.name} unless otherwise stated. Unauthorized use or reproduction of this content is prohibited without prior written consent.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Use of Website</Heading>
        <Text variant="body-default-m">
          This website is provided for informational purposes only. You agree to use this website only for lawful purposes and in a manner that does not infringe upon or restrict the use of this website by others.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Disclaimer</Heading>
        <Text variant="body-default-m">
          The information provided on this website is for general informational purposes only. While efforts are made to ensure accuracy, no guarantees are made regarding completeness, reliability, or suitability of the information.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Limitation of Liability</Heading>
        <Text variant="body-default-m">
          {person.name} shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Changes to Terms</Heading>
        <Text variant="body-default-m">
          These terms and conditions may be updated from time to time. Continued use of this website after any changes indicates acceptance of the updated terms.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Contact</Heading>
        <Text variant="body-default-m">
          For questions about these terms and conditions, please contact {person.email}.
        </Text>
      </Column>
    </Column>
  );
}
