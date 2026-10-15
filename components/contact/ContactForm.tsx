"use client";
import { useState, type FormEvent } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { siteConfig } from "@/lib/site";
export function ContactForm() {
  const [status, setStatus] = useState("");
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = `KukuNotes — ${values.get("reason")}`;
    const body = `Name: ${values.get("name")}\nEmail: ${values.get("email")}\n\n${values.get("message")}`;
    try {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus(
        "Your email app should open with a draft. Send the message there to contact us. If it does not open, use the direct email address alongside this form.",
      );
    } catch {
      setStatus(
        "We could not open your email app. Your message is still here. Email the team directly using the address alongside this form.",
      );
    }
  }
  return (
    <section className="contact-form-shell" id="contact-form" aria-labelledby="contact-form-title">
      <p className="eyebrow">Start the conversation</p>
      <h2 id="contact-form-title">What can we help with?</h2>
      <form
        className="contact-form"
        action={`mailto:${siteConfig.email}`}
        method="post"
        encType="text/plain"
        onSubmit={prepareEmail}
        aria-labelledby="contact-form-title"
        aria-describedby="email-handoff"
      >
        <label>
          Your name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Alex Morgan"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </label>
        <label className="contact-form-wide">
          What’s on your mind?
          <select name="reason" defaultValue="Product question">
            <option>Product question</option>
            <option>Support</option>
            <option>Billing</option>
            <option>Partnerships</option>
            <option>Privacy request</option>
            <option>Feedback</option>
          </select>
        </label>
        <label className="contact-form-wide">
          Your message
          <textarea
            name="message"
            rows={6}
            placeholder="A little context helps us point you in the right direction."
            required
            minLength={10}
            maxLength={2000}
          />
        </label>
        <p className="small-note contact-form-wide" id="email-handoff">
          This form prepares a draft in your email app. You send it from there.
        </p>
        <button
          type="submit"
          className="button button-primary"
          aria-describedby="email-handoff"
        >
          Prepare email <HiArrowUpRight aria-hidden="true" />
        </button>
      </form>
      <p className="contact-status" role="status" aria-live="polite">
        {status}
      </p>
    </section>
  );
}
