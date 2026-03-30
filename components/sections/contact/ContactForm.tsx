"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-2xl border-2 border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 shadow-sm outline-none transition-all focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 placeholder:text-slate-500 font-bold";

const inputMutedClass =
  "w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 shadow-sm outline-none transition-all focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 placeholder:text-slate-500 font-bold";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const REQUEST_MS = 25_000;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setStatus("idle");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_MS);

    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organisation,
          country,
          subject,
          message,
        }),
        signal: controller.signal,
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setOrganisation("");
      setCountry("");
      setSubject("");
      setMessage("");
    } catch (err) {
      const aborted = err instanceof Error && err.name === "AbortError";
      setStatus("error");
      setErrorMessage(
        aborted
          ? "Request timed out — the mail server took too long. Please try again or email us directly."
          : "Network error. Check your connection and try again."
      );
    } finally {
      window.clearTimeout(timeoutId);
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2">
      {status === "success" && (
        <div className="md:col-span-2 rounded-2xl border-2 border-[#16a34a]/30 bg-[#16a34a]/10 px-5 py-4 text-sm font-bold text-slate-800">
          Thank you — your enquiry has been sent. We typically reply within one business day.
        </div>
      )}

      {status === "error" && errorMessage && (
        <div className="md:col-span-2 rounded-2xl border-2 border-red-200 bg-red-50 px-5 py-4 text-sm font-bold text-red-800">
          {errorMessage}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
          disabled={isSending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@organisation.com"
          className={inputMutedClass}
          disabled={isSending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="organisation" className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
          placeholder="Organisation / department"
          className={inputMutedClass}
          disabled={isSending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="country" className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
          Country
        </label>
        <input
          id="country"
          name="country"
          type="text"
          autoComplete="country-name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Your country"
          className={inputMutedClass}
          disabled={isSending}
        />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Urban planning, risk mapping"
          className={inputMutedClass}
          disabled={isSending}
        />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-700 ml-1">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your use case, locations of interest, timelines, and any existing data sources."
          className="w-full rounded-3xl border-2 border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 shadow-sm outline-none transition-all focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10 placeholder:text-slate-500 resize-none font-bold disabled:opacity-60"
          disabled={isSending}
        />
      </div>

      <div className="md:col-span-2 flex flex-col gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSending}
          className="group cursor-pointer relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#16a34a] px-10 py-4 text-sm font-black text-white transition-all hover:bg-[#166534] hover:shadow-[0_0_25px_rgba(22,163,74,0.4)] hover:scale-105 disabled:pointer-events-none disabled:opacity-60"
        >
          <span className="relative z-10  flex items-center gap-2">
            {isSending ? "Sending…" : "Submit Enquiry"}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest max-w-[300px] leading-relaxed">
          By submitting, you agree to our processing of your geospatial project details.
        </p>
      </div>
    </form>
  );
}