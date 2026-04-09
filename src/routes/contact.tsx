import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { AppFooter } from "@/components/app-footer";
import * as m from "@/paraglide/messages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: m.contact_meta_title() },
      { name: "description", content: m.contact_meta_description() },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <div className="relative z-10 bg-background pt-24 pb-16 md:pt-28">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h1 className="font-display text-fluid-4xl mb-4 font-bold leading-none">
              {m.contact_heading()}
            </h1>
            <p className="text-muted-foreground text-fluid-lg">
              {m.contact_subheading()}
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="mt-20">
          <AppFooter />
        </div>
      </div>
    </main>
  );
}
