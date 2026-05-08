"use client";

import { useState } from "react";

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono), monospace",
  fontSize: 10,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 8,
  display: "block",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-body), sans-serif",
  fontSize: 14,
  background: "var(--surface)",
  border: "1px solid var(--border)",
  padding: "14px 18px",
  color: "var(--offwhite)",
  outline: "none",
  marginBottom: 24,
  boxSizing: "border-box",
};

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function set(key: string, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!fields.name.trim()) errs.name = "Name is required";
    if (!fields.email.trim()) errs.email = "Email is required";
    if (!fields.message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: "contact" }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 14,
          color: "var(--offwhite)",
          letterSpacing: "0.08em",
          padding: "48px 0",
        }}
      >
        ✓ &nbsp;We&apos;ve got your message. We&apos;ll be in touch within 24 hours.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          style={inputStyle}
        />
        {errors.name && <ErrorMsg msg={errors.name} />}
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          id="email"
          type="email"
          placeholder="your@company.com"
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          style={inputStyle}
        />
        {errors.email && <ErrorMsg msg={errors.email} />}
      </div>

      <div>
        <label htmlFor="company" style={labelStyle}>Company</label>
        <input
          id="company"
          type="text"
          placeholder="Company name (optional)"
          value={fields.company}
          onChange={(e) => set("company", e.target.value)}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="projectType" style={labelStyle}>Project Type</label>
        <select
          id="projectType"
          value={fields.projectType}
          onChange={(e) => set("projectType", e.target.value)}
          style={{ ...inputStyle, cursor: "none" }}
        >
          <option value="">Select one</option>
          <option value="software">Software Development</option>
          <option value="ai">AI / ML</option>
          <option value="blockchain">Blockchain / Web3</option>
          <option value="audit">Audit</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" style={labelStyle}>Budget</label>
        <select
          id="budget"
          value={fields.budget}
          onChange={(e) => set("budget", e.target.value)}
          style={{ ...inputStyle, cursor: "none" }}
        >
          <option value="">Select range</option>
          <option value="under25k">Under $25K</option>
          <option value="25k-75k">$25K – $75K</option>
          <option value="75k-200k">$75K – $200K</option>
          <option value="200k+">$200K+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe your project. What are you building, what's broken, what's the timeline?"
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          style={{ ...inputStyle, resize: "vertical", marginBottom: 0 }}
        />
        {errors.message && <ErrorMsg msg={errors.message} />}
      </div>

      {submitError && (
        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "#FF5F57", marginTop: 8 }}>
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          background: "var(--accent)",
          color: "#000",
          border: "none",
          padding: "16px 24px",
          cursor: loading ? "not-allowed" : "none",
          marginTop: 24,
          fontWeight: 500,
          opacity: loading ? 0.7 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {loading ? "Sending…" : "Send it →"}
      </button>
    </form>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono), monospace",
        fontSize: 11,
        color: "#FF5F57",
        marginTop: -20,
        marginBottom: 16,
        letterSpacing: "0.05em",
      }}
    >
      {msg}
    </p>
  );
}
