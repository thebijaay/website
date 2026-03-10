import { Column, Heading, Text, SmartLink, Meta, Row, Line } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: `Terms & Conditions – ${person.name}`,
    description: `Comprehensive Terms and Conditions for ${person.name}'s portfolio website.`,
    baseURL: baseURL,
    path: "/terms-conditions",
  });
}

export default function TermsConditions() {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Column gap="16">
        <Heading variant="display-strong-l">Terms & Conditions</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Last updated: March 2024
        </Text>
      </Column>

      <Line fillWidth background="neutral-alpha-weak" />

      <Column gap="32">
        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">1. Acceptance of Terms</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this
            agreement. In addition, when using this website's particular services, you shall be subject to any
            posted guidelines or rules applicable to such services.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">2. Provision of Service</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            The service is provided to you as a convenience for information purposes only. {person.name} reserves the right
            to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without
            notice at any time.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">3. Intellectual Property Rights</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            The content, graphics, design, and other matters related to the site are protected under applicable
            copyrights, trademarks, and other proprietary rights. The copying, redistribution, or publication
            of any part of this site is strictly prohibited unless authorized by {person.name}.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">4. Limitation of Liability</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            Under no circumstances, including but not limited to negligence, shall {person.name} be liable for any
            direct, indirect, special, incidental, or consequential damages, including loss of data or profit,
            arising out of the use or the inability to use the materials on this site.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">5. Governing Law</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            Any claim relating to this website shall be governed by the laws of our jurisdiction without
            regard to its conflict of law provisions.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">6. Changes to Terms</Heading>
          <Text variant="body-default-m" className={styles.justified}>
            We reserve the right to change these terms from time to time as we see fit and your continued use of
            the site will signify your acceptance of any adjustment to these terms.
          </Text>
        </Column>

        <Column gap="m">
          <Heading as="h2" variant="heading-strong-l">7. Contact Information</Heading>
          <Text variant="body-default-m">
            For any questions or concerns regarding these terms, please contact us:
          </Text>
          <Row paddingY="8">
            <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
