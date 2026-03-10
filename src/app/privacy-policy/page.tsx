import { Column, Heading, Text, SmartLink, Meta, Row, Line } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import styles from "@/components/about/about.module.scss";

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
      <Column gap="16">
        <Heading variant="display-strong-l">Privacy Policy</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Last updated: March 2024
        </Text>
      </Column>

      <Line fillWidth background="neutral-alpha-weak" />

      <Column gap="32">
        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">1. Introduction</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            Your privacy is important to us. This policy outlines how {person.name} collects, uses, and
            protects your information when you visit our website. By using our site, you consent to our
            privacy practices.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">2. Data Collection</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            We collect information from you in the following ways:
          </Text>
          <Column as="ul" gap="8" paddingLeft="24">
            <Text as="li" variant="body-default-m">Personal information (name, email) when you contact us.</Text>
            <Text as="li" variant="body-default-m">Usage data (IP address, browser type) to improve experience.</Text>
            <Text as="li" variant="body-default-m">Cookies to provide personalized content and analyze traffic.</Text>
          </Column>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">3. Use of Information</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            Any information we collect may be used in one of the following ways:
          </Text>
          <Column as="ul" gap="8" paddingLeft="24">
            <Text as="li" variant="body-default-m">To personalize your experience on our website.</Text>
            <Text as="li" variant="body-default-m">To improve our website based on feedback.</Text>
            <Text as="li" variant="body-default-m">To process enquiries or provide support.</Text>
          </Column>
          <Text variant="body-default-m" onBackground="brand-weak">
            Note: We do not sell, trade, or otherwise transfer your personal information to outside parties.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">4. Data Security</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            We implement a variety of security measures to maintain the safety of your personal information.
            We use industry-standard encryption and security protocols to ensure your data is protected.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">5. Your Rights</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            You have the right to:
          </Text>
          <Column as="ul" gap="8" paddingLeft="24">
            <Text as="li" variant="body-default-m">Access the personal data we hold about you.</Text>
            <Text as="li" variant="body-default-m">Request correction of any incorrect data.</Text>
            <Text as="li" variant="body-default-m">Request deletion of your data from our systems.</Text>
          </Column>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">6. Contact Us</Heading>
          <Text variant="body-default-m">
            If there are any questions regarding this privacy policy, you may contact us using the information below:
          </Text>
          <Row paddingY="8">
            <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
