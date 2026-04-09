import { useMemo, useState } from "react";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import type { ContactErrorCode } from "@/server/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as m from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";
import { submitContactForm } from "@/server/contact";

function messageForServerCode(code: ContactErrorCode): string {
  switch (code) {
    case "validation_name":
      return m.contact_error_name();
    case "validation_email":
      return m.contact_error_email();
    case "validation_company":
      return m.contact_error_company();
    case "validation_message":
      return m.contact_error_message();
    case "not_configured":
      return m.contact_error_not_configured();
    case "send_failed":
      return m.contact_error_send_failed();
    default:
      return m.contact_error_send_failed();
  }
}

type ContactFormApi = {
  setFieldMeta: (
    field: "name" | "email" | "company" | "message",
    updater: (prev: {
      errors: Array<{ message?: string }>;
      isTouched: boolean;
      isValid: boolean;
    }) => {
      errors: Array<{ message?: string }>;
      isTouched: boolean;
      isValid: boolean;
    },
  ) => void;
  reset: () => void;
};

function applyServerFieldErrors(formApi: ContactFormApi, code: ContactErrorCode) {
  const msg = messageForServerCode(code);
  const markInvalid = (
    field: "name" | "email" | "company" | "message",
    message: string,
  ) => {
    formApi.setFieldMeta(field, (prev) => ({
      ...prev,
      errors: [{ message }],
      isTouched: true,
      isValid: false,
    }));
  };
  switch (code) {
    case "validation_name":
      markInvalid("name", msg);
      break;
    case "validation_email":
      markInvalid("email", msg);
      break;
    case "validation_company":
      markInvalid("company", msg);
      break;
    case "validation_message":
      markInvalid("message", msg);
      break;
    default:
      break;
  }
}

export function ContactForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const locale = getLocale();

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .transform((s) => s.trim())
          .pipe(
            z
              .string()
              .min(1, m.contact_error_name())
              .max(200, m.contact_error_name()),
          ),
        email: z
          .string()
          .transform((s) => s.trim())
          .pipe(
            z
              .email({ error: m.contact_error_email() })
              .min(1, m.contact_error_email())
              .max(320, m.contact_error_email()),
          ),
        company: z
          .string()
          .transform((s) => s.trim())
          .pipe(z.string().max(200, m.contact_error_company())),
        message: z
          .string()
          .transform((s) => s.trim())
          .pipe(
            z
              .string()
              .min(1, m.contact_error_message())
              .max(10_000, m.contact_error_message()),
          ),
      }),
    [locale],
  );

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    validators: {
      onChange: contactSchema,
      onBlur: contactSchema,
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      setFormError(null);

      let result: Awaited<ReturnType<typeof submitContactForm>>;
      try {
        result = await submitContactForm({
          data: {
            name: value.name,
            email: value.email,
            company: value.company,
            message: value.message,
          },
        });
      } catch {
        setFormError(m.contact_error_send_failed());
        throw new Error("Contact form submission failed");
      }

      if (!result.ok) {
        if (
          result.code === "validation_name" ||
          result.code === "validation_email" ||
          result.code === "validation_company" ||
          result.code === "validation_message"
        ) {
          applyServerFieldErrors(
            formApi as unknown as ContactFormApi,
            result.code,
          );
        } else {
          setFormError(messageForServerCode(result.code));
        }
        throw new Error("Contact form submission failed");
      }

      setSubmitSuccess(true);
      formApi.reset();
    },
  });

  if (submitSuccess) {
    return (
      <Card className="mx-auto w-full max-w-lg">
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-sm" role="status">
            {m.contact_success()}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardContent className="pt-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void form.handleSubmit();
          }}
          className="flex flex-col gap-6"
        >
          <form.Subscribe
            selector={(state) => state.isSubmitting}
            children={(isSubmitting) => (
              <FieldGroup>
                <form.Field
                  name="name"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          {m.contact_label_name()}
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          autoComplete="name"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder={m.contact_placeholder_name()}
                          disabled={isSubmitting}
                          aria-invalid={isInvalid}
                        />
                        {isInvalid ? (
                          <FieldError errors={field.state.meta.errors} />
                        ) : null}
                      </Field>
                    );
                  }}
                />

                <form.Field
                  name="email"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          {m.contact_label_email()}
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="email"
                          autoComplete="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder={m.contact_placeholder_email()}
                          disabled={isSubmitting}
                          aria-invalid={isInvalid}
                        />
                        {isInvalid ? (
                          <FieldError errors={field.state.meta.errors} />
                        ) : null}
                      </Field>
                    );
                  }}
                />

                <form.Field
                  name="company"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          {m.contact_label_company()}{" "}
                          <span className="text-muted-foreground font-normal">
                            ({m.contact_label_company_optional()})
                          </span>
                        </FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          autoComplete="organization"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder={m.contact_placeholder_company()}
                          disabled={isSubmitting}
                          aria-invalid={isInvalid}
                        />
                        {isInvalid ? (
                          <FieldError errors={field.state.meta.errors} />
                        ) : null}
                      </Field>
                    );
                  }}
                />

                <form.Field
                  name="message"
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel htmlFor={field.name}>
                          {m.contact_label_message()}
                        </FieldLabel>
                        <Textarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder={m.contact_placeholder_message()}
                          disabled={isSubmitting}
                          rows={6}
                          aria-invalid={isInvalid}
                        />
                        {isInvalid ? (
                          <FieldError errors={field.state.meta.errors} />
                        ) : null}
                      </Field>
                    );
                  }}
                />
              </FieldGroup>
            )}
          />

          {formError ? (
            <p className="text-destructive text-sm" role="alert">
              {formError}
            </p>
          ) : null}

          <form.Subscribe
            selector={(state) => state.isSubmitting}
            children={(isSubmitting) => (
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? m.contact_submitting() : m.contact_submit()}
              </Button>
            )}
          />
        </form>
      </CardContent>
    </Card>
  );
}
