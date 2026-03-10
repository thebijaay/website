import { Column, Heading, Text, SmartLink, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Terms & Conditions – ${person.name}`,
    description: `Detailed Terms and Conditions governing the use of ${person.name}'s website and services.`,
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
        <Heading as="h2" variant="heading-strong-l">1. Introduction</Heading>
        <Text variant="body-default-m">
          These Terms and Conditions govern the use of this website operated by {person.name}.
          By accessing or using this website you acknowledge that you have read, understood,
          and agreed to be legally bound by these Terms and Conditions. These terms apply to
          all users including visitors, clients, partners, and anyone accessing the website.
        </Text>
        <Text variant="body-default-m">
          If you disagree with any part of these Terms and Conditions you should immediately
          discontinue using the website. Continued use of the website constitutes acceptance
          of the current Terms and any updates that may be published in the future.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">2. Definitions</Heading>
        <Text variant="body-default-m">
          Website refers to the online platform owned or operated by {person.name}.
        </Text>
        <Text variant="body-default-m">
          User refers to any person who accesses or interacts with the website including
          visitors, subscribers, and clients.
        </Text>
        <Text variant="body-default-m">
          Content refers to all materials displayed on the website including text,
          graphics, images, videos, code, and documentation.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">3. Acceptance of Terms</Heading>
        <Text variant="body-default-m">
          By accessing the website you agree to comply with these Terms and Conditions
          and all applicable laws and regulations. If you do not agree with these terms,
          you are prohibited from using the website.
        </Text>
        <Text variant="body-default-m">
          The website owner reserves the right to update or change these Terms at any
          time without prior notice. Users are responsible for reviewing this page
          periodically to stay informed about any modifications.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">4. Website Use</Heading>
        <Text variant="body-default-m">
          The website may be used only for lawful purposes. Users agree not to misuse
          the website or attempt to gain unauthorized access to any part of the system,
          servers, or networks connected to the website.
        </Text>
        <Text variant="body-default-m">
          Activities such as hacking, introducing malicious software, interfering with
          website functionality, or collecting data without authorization are strictly
          prohibited.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">5. Intellectual Property Rights</Heading>
        <Text variant="body-default-m">
          All content published on this website is the intellectual property of
          {person.name} unless otherwise specified. This includes text, graphics,
          logos, design elements, and software.
        </Text>
        <Text variant="body-default-m">
          Users may not reproduce, distribute, copy, modify, or republish any
          content without written permission from the website owner.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">6. User Responsibilities</Heading>
        <Text variant="body-default-m">
          Users are responsible for maintaining the confidentiality of any information
          they provide through the website. Users agree to provide accurate and truthful
          information when submitting forms or contacting the website owner.
        </Text>
        <Text variant="body-default-m">
          Any misuse of the website or submission of false or misleading information
          may result in restricted access or legal action.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">7. Third Party Links</Heading>
        <Text variant="body-default-m">
          This website may include links to third-party websites. These links are
          provided for convenience only and do not imply endorsement or responsibility
          for the content of those websites.
        </Text>
        <Text variant="body-default-m">
          Users access third-party websites at their own risk and should review
          their respective policies.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">8. Disclaimer of Warranties</Heading>
        <Text variant="body-default-m">
          The website and its content are provided on an "as is" basis without
          warranties of any kind. While efforts are made to ensure accuracy,
          we do not guarantee that the information on the website is complete,
          reliable, or up to date.
        </Text>
        <Text variant="body-default-m">
          We make no guarantees regarding website availability, performance,
          or the absence of errors or interruptions.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">9. Limitation of Liability</Heading>
        <Text variant="body-default-m">
          Under no circumstances shall {person.name} be liable for any direct,
          indirect, incidental, or consequential damages arising from the use
          of or inability to use the website.
        </Text>
        <Text variant="body-default-m">
          This includes damages related to data loss, service interruption,
          system failures, or unauthorized access.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">10. Indemnification</Heading>
        <Text variant="body-default-m">
          Users agree to indemnify and hold harmless {person.name} from any claims,
          damages, liabilities, or expenses resulting from violation of these
          Terms and Conditions or misuse of the website.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">11. Privacy</Heading>
        <Text variant="body-default-m">
          Your use of the website is also governed by our Privacy Policy.
          By using the website you consent to the collection and use of
          information as described in that policy.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">12. Termination</Heading>
        <Text variant="body-default-m">
          We reserve the right to suspend or terminate access to the website
          at any time without prior notice if users violate these Terms.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">13. Changes to Terms</Heading>
        <Text variant="body-default-m">
          These Terms may be updated periodically to reflect legal, operational,
          or technological changes. Users should review this page regularly.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">14. Governing Law</Heading>
        <Text variant="body-default-m">
          These Terms and Conditions shall be governed and interpreted in
          accordance with applicable laws and regulations.
        </Text>
      </Column>


      <Column gap="m">
        <Heading as="h2" variant="heading-strong-l">15. Contact Information</Heading>
        <Text variant="body-default-m">
          If you have questions about these Terms and Conditions,
          please contact us:
        </Text>

        <Text variant="body-default-m">
          Email: <SmartLink href={`mailto:${person.email}`}>{person.email}</SmartLink>
        </Text>
      </Column>

    </Column>
  );
}
