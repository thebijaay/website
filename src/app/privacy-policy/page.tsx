import { Column, Heading, Text, Link, Meta } from "@once-ui-system/core";
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
        Last updated: March 2024
      </Text>

      {/* Introduction */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Introduction</Heading>
        <Text variant="body-default-m">
          At {person.name}'s portfolio website, your privacy is highly valued. This Privacy Policy
          explains how personal information is collected, used, and protected when you visit and
          interact with the website. By using this website, you consent to the practices described
          in this Privacy Policy.
        </Text>
      </Column>

      {/* Information We Collect */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Information We Collect</Heading>
        <Text variant="body-default-m">
          We collect information in several ways to provide a personalized and safe browsing
          experience:
        </Text>
        <Text variant="body-default-m">
          • <strong>Personal Information:</strong> Information you voluntarily provide, including
          your name, email address, and messages submitted via contact forms.<br/>
          • <strong>Usage Data:</strong> Technical data collected automatically when you use the
          website, such as IP address, browser type, operating system, pages visited, and time
          spent on pages.<br/>
          • <strong>Cookies and Tracking Data:</strong> Small files stored on your device to
          improve website functionality and track user interactions.
        </Text>
      </Column>

      {/* How We Use Information */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">How We Use Information</Heading>
        <Text variant="body-default-m">
          The information collected is used for the following purposes:
        </Text>
        <Text variant="body-default-m">
          • To provide, maintain, and improve the website and its services.<br/>
          • To respond to inquiries and provide user support.<br/>
          • To understand how users interact with the website to enhance functionality and content.<br/>
          • To send updates or notifications regarding the website, if you opt-in.<br/>
          • To comply with legal obligations and enforce website policies.
        </Text>
      </Column>

      {/* Cookies and Tracking */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Cookies and Tracking Technologies</Heading>
        <Text variant="body-default-m">
          Cookies are small text files stored on your device that allow us to recognize your browser
          and remember preferences. Tracking technologies may include beacons, tags, or scripts.
        </Text>
        <Text variant="body-default-m">
          Examples of cookies we use:
        </Text>
        <Text variant="body-default-m">
          • <strong>Session Cookies:</strong> Enable essential website operations.<br/>
          • <strong>Preference Cookies:</strong> Remember your choices and settings.<br/>
          • <strong>Security Cookies:</strong> Help protect your information and prevent unauthorized access.<br/>
        </Text>
        <Text variant="body-default-m">
          You can manage or disable cookies via your browser, but some features may not work as intended.
        </Text>
      </Column>

      {/* Data Retention */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Data Retention</Heading>
        <Text variant="body-default-m">
          We retain personal data only as long as necessary for the purposes outlined in this policy
          unless a longer retention period is required by law. Usage data may be stored in aggregated
          or anonymized form for analytics indefinitely.
        </Text>
      </Column>

      {/* Data Security */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Data Security</Heading>
        <Text variant="body-default-m">
          We implement industry-standard technical and organizational measures to protect personal
          information. While we strive to ensure security, no system or transmission over the Internet
          is completely secure, and absolute protection cannot be guaranteed.
        </Text>
      </Column>

      {/* Analytics */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Analytics</Heading>
        <Text variant="body-default-m">
          We may use analytics tools to understand visitor behavior, monitor website performance, and
          improve user experience. Data collected through analytics is generally anonymized and cannot
          personally identify you.
        </Text>
      </Column>

      {/* Third-Party Links */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Third-Party Links</Heading>
        <Text variant="body-default-m">
          The website may include links to external websites. We are not responsible for the content,
          privacy practices, or security of third-party sites. Users are encouraged to review the
          privacy policies of any third-party website they visit.
        </Text>
      </Column>

      {/* Children’s Privacy */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Children’s Privacy</Heading>
        <Text variant="body-default-m">
          This website is not intended for individuals under 18 years old. We do not knowingly collect
          personal information from children. Parents or guardians who believe their child has
          submitted personal data should contact us so the information can be deleted.
        </Text>
      </Column>

      {/* User Rights */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Your Rights</Heading>
        <Text variant="body-default-m">
          You have the right to access, correct, or request deletion of your personal data. You may
          contact us at any time to exercise these rights via email:{" "}
          <Link href={`mailto:${person.email}`} variant="link-primary">{person.email}</Link>.
        </Text>
      </Column>

      {/* Updates to Privacy Policy */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Changes to This Privacy Policy</Heading>
        <Text variant="body-default-m">
          We may update this Privacy Policy periodically. Updated versions will be posted on this page
          with a new “Last Updated” date. Continued use of the website constitutes acceptance of any
          changes. We encourage you to review this policy regularly.
        </Text>
      </Column>

      {/* Governing Law */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Governing Law</Heading>
        <Text variant="body-default-m">
          This Privacy Policy is governed by the laws of the country where {person.name} resides.
          Any disputes arising from this Privacy Policy or use of the website will be subject to the
          exclusive jurisdiction of the competent courts in that jurisdiction.
        </Text>
      </Column>

      {/* Contact Information */}
      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">Contact</Heading>
        <Text variant="body-default-m">
          If you have questions or concerns regarding this Privacy Policy, please contact:{" "}
          <Link href={`mailto:${person.email}`} variant="link-primary">{person.email}</Link>.
        </Text>
      </Column>
    </Column>
  );
}
