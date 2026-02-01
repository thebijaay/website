import { Row, Column, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Column as="footer" fillWidth padding="8" horizontal="center" gap="8">
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI unless you have a Pro license. */}
            / Build your portfolio with{" "}
            <SmartLink href="https://github.com/thebijaay">Jay Prasad Majhi</SmartLink>
          </Text>
        </Text>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Row>
      <Row gap="16" horizontal="center" paddingBottom="8">
        <SmartLink href="/privacy-policy">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Privacy Policy
          </Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak">|</Text>
        <SmartLink href="/terms-conditions">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Terms & Conditions
          </Text>
        </SmartLink>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Column>
  );
};
