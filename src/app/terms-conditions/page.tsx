import { Column, Heading, Text, Link, Meta } from "@once-ui-system/core";
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
        Last updated: March 2024
      </Text>

      {/* Acceptance of Terms */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Acceptance of Terms</Heading>
        <Text variant="body-default-m">
          By accessing and using this website, you agree to comply with and be bound by these Terms
          and Conditions. These Terms apply to all visitors, users, and others who access the
          website. If you do not agree to these terms, please do not use this website. Continued
          use of the website constitutes your acceptance of any changes made to these Terms.
        </Text>
      </Column>

      {/* Intellectual Property */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Intellectual Property</Heading>
        <Text variant="body-default-m">
          All content on this website, including but not limited to text, images, graphics, logos,
          and designs, is the property of {person.name} and is protected under copyright, trademark,
          and other intellectual property laws. You may not copy, reproduce, modify, distribute, or
          create derivative works from this content without express written permission from {person.name}.
        </Text>
        <Text variant="body-default-m">
          Unauthorized use of any content may result in legal action. You may use the materials
          only for personal, non-commercial purposes and with proper attribution.
        </Text>
      </Column>

      {/* User Conduct */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">User Conduct</Heading>
        <Text variant="body-default-m">
          You agree to use the website only for lawful purposes. You may not:
        </Text>
        <Text variant="body-default-m">
          • Violate any applicable local, state, national, or international law.<br/>
          • Harass, abuse, or harm other users or third parties.<br/>
          • Attempt to gain unauthorized access to the website, servers, or data.<br/>
          • Upload, post, or transmit any content that is harmful, illegal, or offensive.<br/>
          • Interfere with the operation or security of the website.
        </Text>
        <Text variant="body-default-m">
          Any violation of these rules may result in suspension or termination of access, and potential legal consequences.
        </Text>
      </Column>

      {/* Disclaimer of Warranties */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Disclaimer of Warranties</Heading>
        <Text variant="body-default-m">
          This website is provided on an “as is” and “as available” basis without any warranties
          of any kind. {person.name} does not guarantee that the website will be uninterrupted,
          error-free, or free from viruses or harmful components.
        </Text>
        <Text variant="body-default-m">
          You acknowledge and agree that your use of the website is at your sole risk. All content
          and services are provided without warranty of any kind, either express or implied,
          including but not limited to warranties of merchantability, fitness for a particular
          purpose, or non-infringement.
        </Text>
      </Column>

      {/* Limitation of Liability */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Limitation of Liability</Heading>
        <Text variant="body-default-m">
          To the maximum extent permitted by law, {person.name} shall not be liable for any direct,
          indirect, incidental, special, consequential, or punitive damages arising from your use
          of the website, including but not limited to loss of profits, data, or other intangible
          losses.
        </Text>
        <Text variant="body-default-m">
          This limitation applies whether the claim is based on warranty, contract, tort, or
          otherwise, even if {person.name} has been advised of the possibility of such damages.
        </Text>
      </Column>

      {/* Links to Third-Party Sites */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Links to Third-Party Sites</Heading>
        <Text variant="body-default-m">
          This website may include links to external websites. These links are provided for
          convenience only. {person.name} has no control over third-party sites and is not
          responsible for their content, privacy practices, or terms. Visiting third-party sites
          is at your own risk.
        </Text>
      </Column>

      {/* Privacy and Data */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Privacy and Data Protection</Heading>
        <Text variant="body-default-m">
          Your privacy is important. Collection, use, and storage of your data is governed by our
          <Link href="/privacy-policy" variant="link-primary"> Privacy Policy</Link>. By using the
          website, you agree to the practices outlined in that policy.
        </Text>
      </Column>

      {/* Changes to Terms */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Changes to Terms</Heading>
        <Text variant="body-default-m">
          {person.name} reserves the right to modify these Terms & Conditions at any time. Any
          changes will be posted on this page, and your continued use of the website after
          modifications constitutes acceptance of the updated terms.
        </Text>
      </Column>

      {/* Governing Law */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Governing Law</Heading>
        <Text variant="body-default-m">
          These Terms and Conditions are governed by the laws of the country in which {person.name} resides.
          Any disputes arising from your use of the website shall be resolved exclusively in the
          competent courts of that jurisdiction.
        </Text>
      </Column>

      {/* Contact Information */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Contact</Heading>
        <Text variant="body-default-m">
          For questions regarding these Terms & Conditions, please contact:{" "}
          <Link href={`mailto:${person.email}`} variant="link-primary">{person.email}</Link>.
        </Text>
      </Column>
    </Column>
  );
}
