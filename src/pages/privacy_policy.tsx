import React from "react";

function SectionBlock({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="pt-16 pb-2">
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
        <h2 className="font-clash" style={{ fontSize: 20, fontWeight: 600, color: "#050f0f", letterSpacing: "-0.02em", margin: 0 }}>
          {title}
        </h2>
      </div>
      <div className="font-archivo" style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14, lineHeight: 1.8, color: "#050f0f" }}>
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return <hr style={{ marginTop: 40, border: "none", borderTop: "1px solid rgba(5,15,15,0.08)" }} />;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 600, color: "#050f0f" }}>{children}</span>;
}

export default function PrivacyPolicy() {
  return (
    <div className="font-archivo" style={{ minHeight: "100vh", background: "#f7faf8" }}>

      {/* Hero strip */}
      <div style={{ background: "#050f0f", padding: "72px 0 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px" }}>
          <p className="font-clash" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A3BDB8", marginBottom: 18 }}>
            Legal
          </p>
          <h1 className="font-clash" style={{ fontSize: 48, fontWeight: 600, color: "#f7faf8", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
            Privacy Policy
          </h1>
          <p className="font-archivo" style={{ fontSize: 14, color: "rgba(163,189,184,0.7)", margin: 0 }}>
            Last updated: June 2025 &nbsp;·&nbsp; Questions? &nbsp;
            <a href="mailto:info@saudexglobal.com" style={{ color: "#A3BDB8", textDecoration: "none", borderBottom: "1px solid rgba(163,189,184,0.3)" }}>
              info@saudexglobal.com
            </a>
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px 100px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "80px", alignItems: "start" }}>

        {/* Sticky TOC */}
        <nav style={{ position: "sticky", top: 40, paddingTop: 56 }}>
          <p className="font-clash" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(5,15,15,0.35)", marginBottom: 16 }}>
            Contents
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              ["introduction", "Introduction"],
              ["data-collected", "Data We Collect"],
              ["how-we-use", "How We Use It"],
              ["data-sharing", "Data Sharing"],
              ["cookies", "Cookies & Tracking"],
              ["your-rights", "Your Rights"],
              ["retention", "Data Retention"],
              ["security", "Security"],
              ["children", "Children"],
              ["changes", "Policy Changes"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={`#${href}`} className="font-archivo" style={{ fontSize: 13, color: "rgba(5,15,15,0.45)", textDecoration: "none", display: "block", padding: "4px 0", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#050f0f")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(5,15,15,0.45)")}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <main>
          <SectionBlock id="introduction" title="Introduction">
            <p>
              Saudex Global Logistics ("we," "us," or "our") is committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you engage with our freight, customs, warehousing,
              and last-mile delivery services.
            </p>
            <p>
              Please read this policy carefully. If you disagree with its terms, please discontinue use of
              our services. This document is binding and constitutes part of our Terms of Service.
            </p>
            <p>
              We operate under multiple privacy frameworks including GDPR, CCPA, PIPEDA, and LGPD. Where
              applicable law provides greater protections than those described here, that law governs.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="data-collected" title="Data We Collect">
            <p>We collect information in three primary ways:</p>
            <p>
              <Highlight>Information you provide directly:</Highlight>{" "}
              Account registration details (name, email address, company name), shipment details, billing
              and payment information, customs documentation, support communications, and content submitted
              through our platform or contact forms.
            </p>
            <p>
              <Highlight>Information collected automatically:</Highlight>{" "}
              IP address, browser type and version, operating system, device identifiers, pages visited,
              time and duration of visits, referring URLs, and error logs generated during platform use.
            </p>
            <p>
              <Highlight>Information from third parties:</Highlight>{" "}
              Carrier and customs data from logistics partners, identity verification signals from compliance
              services, and analytics aggregates from advertising partners.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="how-we-use" title="How We Use It">
            <p>
              We process personal data only for specific, explicit, and legitimate purposes.
              Our lawful bases for processing include:
            </p>
            <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Contract performance — fulfilling shipments, generating quotes, and operating our logistics platform</li>
              <li>Legitimate interests — fraud prevention, cargo security, route analytics, and service improvement</li>
              <li>Legal obligation — complying with customs, import/export, and data protection regulations</li>
              <li>Consent — marketing communications and optional analytics features you opt into</li>
            </ul>
          </SectionBlock>
          <Divider />

          <SectionBlock id="data-sharing" title="Data Sharing">
            <p>We do not sell your personal data. We share information only in limited circumstances:</p>
            <p>
              <Highlight>Logistics and carrier partners:</Highlight>{" "}
              To fulfill shipments, we share necessary data with carriers, freight forwarders, customs brokers,
              and last-mile delivery partners. Each partner is contractually limited to using data solely for
              the relevant operation.
            </p>
            <p>
              <Highlight>Service providers:</Highlight>{" "}
              We engage vetted vendors for infrastructure, payments, transactional email, and analytics.
              Each vendor is contractually restricted to processing data only as instructed by us.
            </p>
            <p>
              <Highlight>Legal and regulatory requirements:</Highlight>{" "}
              We may disclose information if required by customs authorities, court order, or applicable
              law, or to protect our rights or the safety of others.
            </p>
            <p>
              <Highlight>Business transfers:</Highlight>{" "}
              In the event of a merger or acquisition, your data may be transferred. We will provide notice
              before your data becomes subject to a different privacy policy.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="cookies" title="Cookies & Tracking">
            <p>
              We use cookies and similar technologies to maintain session state, analyze usage, and deliver
              platform features. You may control preferences through our Consent Manager in the page footer.
            </p>
            <table style={{ width: "100%", fontSize: 13, marginTop: 8, borderCollapse: "collapse", border: "1px solid rgba(5,15,15,0.1)" }}>
              <thead>
                <tr style={{ background: "rgba(5,15,15,0.04)", textAlign: "left" }}>
                  <th style={{ padding: "10px 14px", fontWeight: 600, color: "#050f0f", borderBottom: "1px solid rgba(5,15,15,0.1)", fontSize: 12 }}>Type</th>
                  <th style={{ padding: "10px 14px", fontWeight: 600, color: "#050f0f", borderBottom: "1px solid rgba(5,15,15,0.1)", fontSize: 12 }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Essential", "Required for authentication and shipment tracking sessions. Cannot be disabled."],
                  ["Functional", "Remember preferences such as default origin port and display settings."],
                  ["Analytics", "Aggregate usage data to improve platform performance and UX."],
                  ["Marketing", "Interest-based outreach. Opt-out available at any time."],
                ].map(([type, desc], i) => (
                  <tr key={type} style={{ borderBottom: i < 3 ? "1px solid rgba(5,15,15,0.07)" : "none" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 600, color: "#050f0f", whiteSpace: "nowrap", fontSize: 13 }}>{type}</td>
                    <td style={{ padding: "10px 14px", color: "rgba(5,15,15,0.6)", fontSize: 13 }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionBlock>
          <Divider />

          <SectionBlock id="your-rights" title="Your Rights">
            <p>
              Depending on your jurisdiction, you hold specific rights with respect to your personal data.
              We honor all requests without requiring justification, and fulfill them within 30 days.
            </p>
            <p>
              Your rights may include: access, rectification, erasure, data portability, objection to
              processing, restriction of processing, withdrawal of consent, and the right to lodge a
              complaint with a supervisory authority.
            </p>
            <p>
              To exercise any right, submit a verified request to{" "}
              <a href="mailto:privacy@saudexglobal.com" style={{ color: "#050f0f", textDecoration: "none", borderBottom: "1px solid rgba(5,15,15,0.2)" }}>privacy@saudexglobal.com</a>.
              We will never discriminate against you for exercising your privacy rights.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="retention" title="Data Retention">
            <p>
              We retain personal data only as long as necessary to fulfill the purposes described in this
              policy, or as required by law.
            </p>
            <p>
              Account and shipment data is retained for the duration of your active relationship with us,
              plus a 90-day grace period following account closure. Financial and customs records are retained
              for seven years as required by applicable tax and trade law. Server logs are retained for 90
              days and then purged automatically.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="security" title="Security">
            <p>
              We implement administrative, technical, and physical safeguards to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.
              Passwords are hashed using bcrypt. We conduct annual penetration tests through independent
              security firms and maintain SOC 2 Type II compliance.
            </p>
            <p>
              No transmission over the Internet is 100% secure. We will notify affected users and relevant
              authorities of any breach within 72 hours of discovery, as required by GDPR.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="children" title="Children">
            <p>
              Our services are directed at businesses and adult individuals engaged in commercial logistics.
              We do not knowingly collect personal data from individuals under the age of 16. If you believe
              we have inadvertently collected information from a minor, contact us immediately and we will
              delete that data without delay.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="changes" title="Policy Changes">
            <p>
              We may update this Privacy Policy periodically. Material changes will be communicated via email
              to registered users at least 30 days before they take effect.
            </p>
            <p>
              Your continued use of our services after the effective date of any change constitutes acceptance
              of the revised policy. All previous versions are archived and available upon request to{" "}
              <a href="mailto:privacy@saudexglobal.com" style={{ color: "#050f0f", textDecoration: "none", borderBottom: "1px solid rgba(5,15,15,0.2)" }}>privacy@saudexglobal.com</a>.
            </p>
          </SectionBlock>
          <Divider />
        </main>
      </div>
    </div>
  );
}
