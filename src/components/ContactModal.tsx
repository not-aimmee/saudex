import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  templateId: string;
  publicKey: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormFields {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  message: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  serviceId,
  templateId,
  publicKey,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fields, setFields] = useState<FormFields>({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Partial<FormFields> = {};
    if (!fields.from_name.trim()) errs.from_name = "Required";
    if (!fields.from_email.trim()) errs.from_email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email)) errs.from_email = "Invalid email";
    if (!fields.subject.trim()) errs.subject = "Required";
    if (!fields.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
      setStatus("success");
      setFields({ from_name: "", from_email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(5,15,15,0.05)",
    border: `1.5px solid ${errors[name as keyof FormFields] ? "#ef4444" : focused === name ? "#050f0f" : "rgba(5,15,15,0.14)"}`,
    borderRadius: "10px",
    color: "#050f0f",
    fontSize: "15px",
    fontWeight: 400,
    fontFamily: "'Archivo', system-ui, sans-serif",
    padding: "14px 16px",
    outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
    letterSpacing: "0.01em",
  });

  return (
    <>
      <style>{`
        .cm-input::placeholder { color: rgba(5,15,15,0.3); font-size: 14px; }
        .cm-input option { background: #f7faf8; color: #050f0f; }
        .cm-input:focus { background: rgba(5,15,15,0.07) !important; }
        .cm-submit:hover:not(:disabled) { background: #f7faf8 !important; color: #050f0f !important; border-color: #050f0f !important; }
        .cm-submit:disabled { opacity: 0.45; cursor: not-allowed; }
        .cm-close:hover { background: rgba(5,15,15,0.07) !important; }
        .cm-info-item { display: flex; align-items: flex-start; gap: 14px; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cm-modal { animation: fadeUp 0.32s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .cm-spinner { animation: spin 0.8s linear infinite; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(5,15,15,0.80)",
          backdropFilter: "blur(20px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px",
        }}
        role="dialog" aria-modal="true" aria-labelledby="cm-title"
      >
        {/* Modal shell */}
        <div
          className="cm-modal"
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            width: "100%",
            maxWidth: "960px",
            maxHeight: "94vh",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(163,189,184,0.16)",
            boxShadow: "0 60px 140px rgba(0,0,0,0.9), 0 0 0 1px rgba(247,250,248,0.04)",
          }}
        >
          {/* ── LEFT PANEL ─────────────────────────────────────── */}
          <div style={{
            background: "#050f0f",
            padding: "52px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Ambient glow */}
            <div style={{
              position: "absolute", top: -100, right: -100,
              width: 300, height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(163,189,184,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div>
              {/* Brand mark */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 52 }}>
                <span className="font-clash" style={{ color: "#A3BDB8", fontSize: 16, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>Saudex Global</span>
              </div>

              <h2 className="font-clash" id="cm-title" style={{
                margin: "0 0 14px",
                fontSize: 36,
                fontWeight: 600,
                color: "#f7faf8",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}>
                Let's move<br />cargo forward.
              </h2>
              <p className="font-archivo" style={{
                margin: "0 0 48px",
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(163,189,184,0.7)",
                lineHeight: 1.7,
              }}>
                Our logistics team responds within 2 business hours.
              </p>

              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  {
                    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
                    label: "Phone", value: "+65 8535 1308",
                  },
                  {
                    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                    label: "Email", value: "info@saudexglobal.com",
                  },
                  {
                    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                    label: "Hours", value: "Mon-Fri \n 9:00 AM - 4:00 PM",
                  },
                ].map((item, i) => (
                  <div key={i} className="cm-info-item">
                    <div style={{
                      width: 36, height: 36, flexShrink: 0,
                      background: "rgba(163,189,184,0.09)",
                      border: "1px solid rgba(163,189,184,0.14)",
                      borderRadius: 10,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A3BDB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </div>
                    <div className="font-archivo">
                      <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(163,189,184,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "#f7faf8" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <p className="font-archivo" style={{ margin: 0, fontSize: 12, color: "rgba(163,189,184,0.38)", lineHeight: 1.7, fontWeight: 400 }}>
              By submitting you agree to our privacy policy and terms of service.
            </p>
          </div>

          {/* ── RIGHT PANEL ────────────────────────────────────── */}
          <div className="font-archivo" style={{
            background: "#f7faf8",
            padding: "52px 52px 44px",
            overflowY: "auto",
            position: "relative",
          }}>
            {/* Close */}
            <button
              onClick={onClose}
              className="cm-close"
              aria-label="Close"
              style={{
                position: "absolute", top: 24, right: 24,
                width: 38, height: 38,
                background: "transparent",
                border: "1px solid rgba(5,15,15,0.12)",
                borderRadius: 10,
                color: "rgba(5,15,15,0.35)",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            {status === "success" ? (
              /* ── Success state ── */
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", height: "100%", minHeight: 440,
                textAlign: "center", gap: 18,
              }}>
                <div style={{
                  width: 72, height: 72,
                  background: "rgba(5,15,15,0.06)",
                  border: "1px solid rgba(5,15,15,0.12)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 8,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#050f0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="font-clash" style={{ margin: 0, fontSize: 28, fontWeight: 600, color: "#050f0f", letterSpacing: "-0.03em" }}>Message received.</p>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 400, color: "rgba(5,15,15,0.48)", maxWidth: 260, lineHeight: 1.7 }}>
                  We'll review your enquiry and get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); onClose(); }}
                  style={{
                    marginTop: 12,
                    background: "#050f0f", color: "#f7faf8",
                    border: "none", borderRadius: 12,
                    fontSize: 14, fontWeight: 600,
                    padding: "13px 36px",
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    fontFamily: "'Archivo', system-ui, sans-serif",
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                <p className="font-clash" style={{ margin: "0 0 36px", fontSize: 11, fontWeight: 600, color: "#050f0f", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  New Enquiry
                </p>

                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  {/* Row 1 */}
                  <div  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px", }}>
                    <FormField label="Full Name" required error={errors.from_name}>
                      <input className="cm-input text-#050f0f" name="from_name" type="text"  value={fields.from_name}
                        onChange={handleChange} placeholder="Jane Smith"
                        onFocus={() => setFocused("from_name")} onBlur={() => setFocused(null)}
                        style={inputStyle("from_name")} />
                    </FormField>
                    <FormField label="Email Address" required error={errors.from_email}>
                      <input className="cm-input" name="from_email" type="email" value={fields.from_email}
                        onChange={handleChange} placeholder="jane@company.com"
                        onFocus={() => setFocused("from_email")} onBlur={() => setFocused(null)}
                        style={inputStyle("from_email")} />
                    </FormField>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
                    <FormField label="Phone" error={errors.phone}>
                      <input className="cm-input" name="phone" type="tel" value={fields.phone}
                        onChange={handleChange} placeholder="+1 555 000 0000"
                        onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                        style={inputStyle("phone")} />
                    </FormField>
                    <FormField label="Service" required error={errors.subject}>
                      <select className="cm-input" name="subject" value={fields.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                        style={{ ...inputStyle("subject"), cursor: "pointer" }}>
                        <option value="">Select…</option>
                        <option value="Shipment Tracking">Shipment Tracking</option>
                        <option value="Freight Quote">Freight Quote</option>
                        <option value="Customs & Compliance">Customs & Compliance</option>
                        <option value="Warehousing">Warehousing</option>
                        <option value="Last-Mile Delivery">Last-Mile Delivery</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </FormField>
                  </div>

                  {/* Message */}
                  <FormField label="Message" required error={errors.message}>
                    <textarea className="cm-input" name="message" value={fields.message}
                      onChange={handleChange} rows={5}
                      placeholder="Describe your shipment requirements or question…"
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                      style={{ ...inputStyle("message"), resize: "none", lineHeight: 1.7 }} />
                  </FormField>

                  {/* Error banner */}
                  {status === "error" && (
                    <div style={{
                      display: "flex", alignItems: "center", gap: 10,
                      background: "rgba(239,68,68,0.06)",
                      border: "1px solid rgba(239,68,68,0.18)",
                      borderRadius: 10,
                      padding: "12px 16px",
                      marginBottom: 24,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#ef4444" }}>
                        Submission failed. Please try again.
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, marginTop: 10 }}>
                    <button type="button" onClick={onClose} style={{
                      background: "transparent",
                      border: "1.5px solid rgba(5,15,15,0.14)",
                      borderRadius: 12,
                      color: "rgba(5,15,15,0.45)",
                      fontSize: 14, fontWeight: 500,
                      padding: "13px 26px",
                      cursor: "pointer",
                      fontFamily: "'Archivo', system-ui, sans-serif",
                      transition: "border-color 0.15s",
                    }}>
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="cm-submit"
                      disabled={status === "sending"}
                      style={{
                        background: "#050f0f",
                        border: "1.5px solid #050f0f",
                        borderRadius: 12,
                        color: "#f7faf8",
                        fontSize: 14,
                        fontWeight: 600,
                        padding: "13px 32px",
                        cursor: "pointer",
                        fontFamily: "'Archivo', system-ui, sans-serif",
                        letterSpacing: "0.01em",
                        display: "flex",
                        alignItems: "center",
                        gap: 9,
                        transition: "background 0.15s, color 0.15s, border-color 0.15s",
                      }}
                    >
                      {status === "sending" ? (
                        <>
                          <svg className="cm-spinner" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// ─── Field wrapper ─────────────────────────────────────────────────────────────

const FormField: React.FC<{
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}> = ({ label, required, error, children }) => (
  <div style={{ marginBottom: 24 }}>
    <label style={{
      display: "block",
      fontSize: 11,
      fontWeight: 700,
      color: "#050f0f",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 8,
      fontFamily: "'Archivo', system-ui, sans-serif",
    }}>
      {label}{required && <span style={{ color: "#050f0f", marginLeft: 3, opacity: 0.5 }}>*</span>}
    </label>
    {children}
    {error && (
      <span style={{ display: "block", marginTop: 6, fontSize: 11, fontWeight: 600, color: "#ef4444" }}>
        {error}
      </span>
    )}
  </div>
);

export default ContactModal;
