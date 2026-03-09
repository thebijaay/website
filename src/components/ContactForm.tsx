"use client";

import { Column, Heading, Text, Input, Button, Row, Textarea } from "@once-ui-system/core";
import { useState } from "react";

interface FormError {
  message: string;
}

interface FormState {
  submitting: boolean;
  succeeded: boolean;
  errors: FormError[];
}

export const ContactForm = () => {
  const [state, setState] = useState<FormState>({
    submitting: false,
    succeeded: false,
    errors: []
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgoovngj", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setState({ submitting: false, succeeded: true, errors: [] });
        form.reset();
      } else {
        const result = await response.json();
        setState({ submitting: false, succeeded: false, errors: result.errors || [] });
      }
    } catch (error) {
      setState({ submitting: false, succeeded: false, errors: [{ message: "Something went wrong." }] });
    }
  };

  return (
    <Column fillWidth gap="m" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
      <Heading variant="display-strong-xs">Enquiry Form</Heading>
      <Text variant="body-default-m" onBackground="neutral-weak">
        Have a question or want to work together? Fill out the form below.
      </Text>

      {state.succeeded ? (
        <Text variant="body-default-m" onBackground="brand-strong">
          Thanks for your message! I'll get back to you soon.
        </Text>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Column gap="m">
            <Row gap="m" s={{ direction: "column" }}>
              <Input
                id="name"
                label="Full Name"
                name="name"
                placeholder="John Doe"
                required
              />
              <Input
                id="email"
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </Row>
            <Textarea
              id="message"
              label="Message"
              name="message"
              placeholder="How can I help you?"
              required
            />
            <Button
              type="submit"
              fillWidth
              loading={state.submitting}
            >
              Send Message
            </Button>
            {state.errors.length > 0 && (
              <Text variant="body-default-s" onBackground="accent-strong">
                {state.errors.map((error: any) => error.message).join(", ")}
              </Text>
            )}
          </Column>
        </form>
      )}
    </Column>
  );
};
