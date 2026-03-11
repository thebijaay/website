"use client";

import { useState, useEffect } from "react";
import { Flex, Text, Button, RevealFx, Heading } from "@once-ui-system/core";
import { book } from "@/resources";

export default function BookView() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s" || e.key === "p")) ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Flex
      fillWidth
      direction="column"
      gap="32"
      paddingY="40"
      paddingX="16"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <RevealFx>
        <Flex direction="column" gap="12" horizontal="center" fillWidth>
          <Heading as="h1" variant="display-strong-s">
            {book.bookName}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Preview the first 5 pages below.
          </Text>
        </Flex>
      </RevealFx>

      <RevealFx delay={0.2}>
        <Flex
          fillWidth
          direction="column"
          radius="l"
          border="neutral-alpha-weak"
          background="neutral-alpha-weak"
          overflow="hidden"
          style={{ height: "800px", position: "relative" }}
        >
          <iframe
            src={`${book.previewPath}#toolbar=0&navpanes=0&scrollbar=0`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Book Preview"
          />
        </Flex>
      </RevealFx>

      <RevealFx delay={0.4}>
        <Flex fillWidth horizontal="center" direction="column" gap="16" paddingY="24">
          <Text variant="body-default-m" align="center">
            Want to read more? Get the full copy now.
          </Text>
          <Button onClick={() => setShowModal(true)} variant="primary" size="l">
            Get Full Access
          </Button>
        </Flex>
      </RevealFx>

      {showModal && (
        <Flex
          position="fixed"
          top="0"
          left="0"
          fillWidth
          fillHeight
          background="neutral-alpha-strong"
          zIndex={10}
          horizontal="center"
          vertical="center"
          padding="16"
          onClick={() => setShowModal(false)}
        >
          <Flex
            background="page"
            radius="l-4"
            padding="40"
            direction="column"
            gap="24"
            maxWidth="s"
            onClick={(e) => e.stopPropagation()}
            border="neutral-alpha-weak"
            shadow="xl"
          >
            <Heading as="h2" variant="display-strong-xs">
              Full Access Instructions
            </Heading>
            <Flex direction="column" gap="12">
              <Text variant="body-default-m">
                To access the full version of <strong>{book.bookName}</strong>, please follow these
                steps:
              </Text>
              <Flex direction="column" gap="8" paddingLeft="16">
                <Text variant="body-default-s">
                  1. Pay <strong>${book.priceUSD}</strong> or <strong>NPR {book.priceNPR}</strong>.
                </Text>
                <Text variant="body-default-s">
                  2. Email your payment receipt to <strong>{book.paymentEmail}</strong>.
                </Text>
                <Text variant="body-default-s">
                  3. We will send the full PDF of the book directly to your email.
                </Text>
              </Flex>
            </Flex>
            <Button onClick={() => setShowModal(false)} variant="secondary" fillWidth>
              Close
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
