import { Column, Heading, Text, SmartLink, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Privacy Policy – ${person.name}`,
    description: `Comprehensive Privacy Policy for ${person.name}'s website explaining how personal data is collected, used, stored, and protected.`,
    baseURL: baseURL,
    path: "/privacy-policy",
  });
}

export default function PrivacyPolicy() {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">

      <Heading variant="display-strong-l">Privacy Policy</Heading>

      <Text variant="body-default-m" onBackground="neutral-weak">
        Effective Date: May 2024
      </Text>

      {/* Introduction */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">1. Introduction</Heading>
        <Text variant="body-default-m">
          This Privacy Policy describes how {person.name} (“we”, “our”, or “us”) collects,
          uses, processes, and protects your information when you visit or interact with our website.
          Protecting the privacy of visitors and users is extremely important to us. This policy
          explains what information we collect, why we collect it, how it is used, and the rights
          you have regarding your personal information.
        </Text>

        <Text variant="body-default-m">
          By accessing or using this website, you agree to the practices described in this
          Privacy Policy. If you do not agree with any part of this policy, you should discontinue
          using the website.
        </Text>
      </Column>

      {/* Definitions */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">2. Definitions</Heading>

        <Text variant="body-default-m">
          For clarity, the following terms are used throughout this Privacy Policy:
        </Text>

        <Text variant="body-default-m">
          Personal Data: Any information that identifies or can identify an individual such as
          name, email address, phone number, IP address, or other identifying details.
        </Text>

        <Text variant="body-default-m">
          Usage Data: Information automatically collected when users interact with the website,
          including browser type, device information, IP address, referring URLs, and interaction data.
        </Text>

        <Text variant="body-default-m">
          Cookies: Small data files stored on your device used to track activity on websites
          and improve user experience.
        </Text>
      </Column>

      {/* Data Collection */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">3. Information We Collect</Heading>

        <Text variant="body-default-m">
          We may collect several different types of information in order to operate and improve
          our services.
        </Text>

        <Text variant="body-default-m">
          Personal information you provide directly may include:
          name, email address, phone number, and other contact details submitted through forms
          or email communication.
        </Text>

        <Text variant="body-default-m">
          Technical data may include IP address, browser type, browser version,
          pages visited, time spent on pages, operating system, and referring websites.
        </Text>

        <Text variant="body-default-m">
          This information helps us understand how visitors use the website and allows us
          to improve our services and performance.
        </Text>
      </Column>

      {/* Data Usage */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">4. How We Use Your Information</Heading>

        <Text variant="body-default-m">
          The information collected may be used for various purposes including:
        </Text>

        <Text variant="body-default-m">
          • Operating and maintaining the website  
          • Responding to enquiries or service requests  
          • Providing technical support  
          • Improving website functionality and performance  
          • Monitoring usage patterns and analytics  
          • Preventing fraudulent activity or misuse  
        </Text>

        <Text variant="body-default-m">
          We do not sell, trade, or rent personal information to third parties.
        </Text>
      </Column>

      {/* Cookies */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">5. Cookies and Tracking Technologies</Heading>

        <Text variant="body-default-m">
          Our website may use cookies or similar technologies to enhance user experience.
          Cookies allow websites to remember user preferences and improve functionality.
        </Text>

        <Text variant="body-default-m">
          Users may choose to disable cookies through their browser settings. However,
          disabling cookies may affect the functionality of certain parts of the website.
        </Text>
      </Column>

      {/* Data Security */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">6. Data Security</Heading>

        <Text variant="body-default-m">
          We implement reasonable technical and organizational security measures designed
          to protect personal data from unauthorized access, alteration, disclosure, or destruction.
        </Text>

        <Text variant="body-default-m">
          Although we strive to use commercially acceptable means to protect personal data,
          no method of transmission over the internet or electronic storage is completely secure.
        </Text>
      </Column>

      {/* Third Party */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">7. Third-Party Services</Heading>

        <Text variant="body-default-m">
          Our website may use trusted third-party services such as analytics tools,
          hosting providers, or communication platforms to operate effectively.
        </Text>

        <Text variant="body-default-m">
          These third parties may have access to limited personal data only for the
          purpose of performing tasks on our behalf and are obligated not to disclose
          or use it for any other purpose.
        </Text>
      </Column>

      {/* User Rights */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">8. Your Privacy Rights</Heading>

        <Text variant="body-default-m">
          Depending on your jurisdiction, you may have the right to:
        </Text>

        <Text variant="body-default-m">
          • Request access to your personal data  
          • Request correction of inaccurate information  
          • Request deletion of your data  
          • Object to processing of personal information  
          • Withdraw consent where applicable
        </Text>

        <Text variant="body-default-m">
          Requests related to personal data can be submitted through the contact
          information listed below.
        </Text>
      </Column>

      {/* Data Retention */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">9. Data Retention</Heading>

        <Text variant="body-default-m">
          We retain personal data only for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy unless a longer retention
          period is required or permitted by law.
        </Text>
      </Column>

      {/* Children's Privacy */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">10. Children’s Privacy</Heading>

        <Text variant="body-default-m">
          This website is not intended for individuals under the age of 13.
          We do not knowingly collect personal information from children.
        </Text>
      </Column>

      {/* Updates */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">11. Changes to This Policy</Heading>

        <Text variant="body-default-m">
          We may update this Privacy Policy from time to time to reflect changes
          in legal requirements, technology, or operational practices.
        </Text>

        <Text variant="body-default-m">
          The updated version will always be indicated by the revised “Last updated”
          date at the top of this page.
        </Text>
      </Column>

      {/* Contact */}

      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">12. Contact Information</Heading>

        <Text variant="body-default-m">
          If you have questions regarding this Privacy Policy or your personal data,
          please contact us at:
        </Text>

        <Text variant="body-default-m">
          Email: <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>
        </Text>

      </Column>

    </Column>
  );
}
