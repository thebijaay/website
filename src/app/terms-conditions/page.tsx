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
        Last updated: March 2024
      </Text>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Acceptance of Terms
        </Heading>
        <Text variant="body-default-m">
          By accessing and using this website, you agree to comply with and be bound by these Terms
          and Conditions. If you do not agree to these terms, please do not use the website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Intellectual Property
        </Heading>
        <Text variant="body-default-m">
          All content on this website, including text, graphics, logos, and images, is the property
          of {person.name} and is protected by copyright and other intellectual property laws. You
          may not reproduce, distribute, or create derivative works from any content without express
          written permission.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          User Conduct
        </Heading>
        <Text variant="body-default-m">
          You agree to use the website only for lawful purposes and in a way that does not infringe
          the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Disclaimer of Warranties
        </Heading>
        <Text variant="body-default-m">
          This website is provided "as is" and "as available" without any warranties of any kind,
          either express or implied. {person.name} does not warrant that the website will be
          uninterrupted or error-free.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Limitation of Liability
        </Heading>
        <Text variant="body-default-m">
          In no event shall {person.name} be liable for any direct, indirect, incidental, special,
          or consequential damages arising out of or in any way connected with the use of this
          website.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Changes to Terms
        </Heading>
        <Text variant="body-default-m">
          These terms and conditions may be updated from time to time. Continued use of this website
          after any changes indicates acceptance of the updated terms.
        </Text>
      </Column>

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">
          Contact
        </Heading>
        <Text variant="body-default-m">
          For questions about these terms and conditions, please contact {person.email}.
        </Text>
      </Column>
    </Column>
  );
}
