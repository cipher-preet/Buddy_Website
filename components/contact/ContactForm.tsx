"use client";

import { FormEvent, useState } from "react";
import { ContactReasonDropdown } from "@/components/contact/ContactReasonDropdown";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [notice, setNotice] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          reason: data.get("reason"),
          message: data.get("message"),
        }),
      });
      const payload = (await response.json()) as {
        success?: boolean;
        message?: string;
        data?: { message?: string };
      };

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Could not send your message.");
      }

      form.reset();
      setStatus("success");
      setNotice(payload.data?.message || "Thanks. We received your message.");
    } catch (error) {
      setStatus("error");
      setNotice(error instanceof Error ? error.message : "Could not send your message.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" placeholder="Your name" required minLength={2} maxLength={120} />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={200} />
      </label>
      <label>
        <span>Reason</span>
        <ContactReasonDropdown />
      </label>
      <label className="contact-form-wide">
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={4000}
          placeholder="Tell us what happened, what you need, or what you are hoping to build with KukuNotes."
        />
      </label>
      <button className="studio-btn studio-btn-accent" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {notice ? (
        <p className={`contact-form-status is-${status}`} role="status">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
