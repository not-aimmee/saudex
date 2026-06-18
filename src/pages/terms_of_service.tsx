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

export default function TermsOfService() {
  return (
    <div className="font-archivo" style={{ minHeight: "100vh", background: "#f7faf8" }}>

      {/* Hero strip */}
      <div style={{ background: "#050f0f", padding: "72px 0 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px" }}>
          <p className="font-clash" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A3BDB8", marginBottom: 18 }}>
            Legal
          </p>
          <h1 className="font-clash" style={{ fontSize: 48, fontWeight: 600, color: "#f7faf8", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
            Terms of Service
          </h1>
          <p className="font-archivo" style={{ fontSize: 14, color: "rgba(163,189,184,0.7)", margin: 0 }}>
            Effective June 17, 2026 &nbsp;·&nbsp; Version 3.1.0 &nbsp;·&nbsp;
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
              ["acceptance", "Acceptance"],
              ["services", "Our Services"],
              ["accounts", "Accounts"],
              ["shipments", "Shipments & Cargo"],
              ["customs", "Customs & Compliance"],
              ["payment", "Payment & Fees"],
              ["liability", "Liability"],
              ["prohibited", "Prohibited Cargo"],
              ["termination", "Termination"],
              ["governing-law", "Governing Law"],
              ["changes", "Changes to Terms"],
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
          <SectionBlock id="acceptance" title="Acceptance of Terms">
            <p>
              By accessing or using any service offered by Saudex Global Logistics ("Saudex," "we," "us," or
              "our"), you agree to be bound by these Terms of Service. If you are using our services on behalf
              of a company or legal entity, you represent that you have the authority to bind that entity.
            </p>
            <p>
              If you do not agree with any part of these terms, you must discontinue use of our platform and
              services immediately. Continued use following any modification constitutes acceptance of the
              updated terms.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="services" title="Our Services">
            <p>
              Saudex provides international and domestic freight logistics services, including but not limited
              to: freight forwarding, customs brokerage, warehousing and fulfilment, last-mile delivery,
              shipment tracking, and supply chain consulting.
            </p>
            <p>
              We act as an intermediary and logistics coordinator. Actual transportation may be carried out by
              third-party carriers and partners operating under their own terms and regulatory obligations.
              Saudex is not a common carrier.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any service at any time with reasonable
              prior notice, except where immediate action is required to comply with legal obligations or
              protect the safety of cargo and personnel.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="accounts" title="Accounts & Responsibilities">
            <p>
              To access our platform, you must register for an account with accurate, complete, and current
              information. You are responsible for maintaining the confidentiality of your credentials and for
              all activity that occurs under your account.
            </p>
            <p>
              You agree to notify us immediately at{" "}
              <a href="mailto:ops@saudexglobal.com" style={{ color: "#050f0f", textDecoration: "none", borderBottom: "1px solid rgba(5,15,15,0.2)" }}>ops@saudexglobal.com</a>{" "}
              of any unauthorized use of your account. Saudex is not liable for losses arising from
              unauthorized account access caused by your failure to secure your credentials.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="shipments" title="Shipments & Cargo">
            <p>
              You are responsible for ensuring that all cargo submitted for transport is accurately described,
              properly packaged, labelled, and accompanied by accurate documentation. Misdeclarations of
              weight, dimensions, or content may result in surcharges, delays, or refusal of service.
            </p>
            <p>
              <Highlight>Declared value:</Highlight>{" "}
              Saudex's liability for loss or damage is limited to the declared value of the shipment or our
              standard liability cap, whichever is lower, unless additional insurance is arranged in advance.
            </p>
            <p>
              <Highlight>Perishables and time-sensitive cargo:</Highlight>{" "}
              While we operate with urgency, Saudex does not guarantee delivery times for perishable goods
              unless a dedicated guaranteed-transit service has been explicitly agreed in writing.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="customs" title="Customs & Compliance">
            <p>
              You are solely responsible for ensuring that all shipments comply with the import, export, and
              customs laws of the origin, transit, and destination countries. Saudex may assist with customs
              documentation as part of its brokerage services, but the legal responsibility remains with you
              as the shipper or consignee.
            </p>
            <p>
              Any duties, taxes, fines, or penalties imposed by customs authorities as a result of
              inaccurate or incomplete documentation are your sole responsibility. Saudex reserves the right
              to recover such costs from you.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="payment" title="Payment & Fees">
            <p>
              Fees for services are quoted at the time of booking and are subject to surcharges for fuel,
              currency fluctuation, port congestion, or extraordinary events unless a fixed-rate contract
              has been agreed. All invoices are due within 30 days of issuance unless otherwise stated.
            </p>
            <p>
              Late payments accrue interest at 1.5% per month (or the maximum permitted by applicable law,
              whichever is lower). Saudex reserves the right to suspend services and place a lien on held
              cargo for unpaid amounts.
            </p>
            <p>
              Disputes over invoiced amounts must be raised in writing within 14 days of receipt. Undisputed
              portions remain due by the original payment date.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="liability" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Saudex's total liability to you for any
              claim arising out of or relating to these terms or our services shall not exceed the fees paid
              by you in the three months preceding the event giving rise to the claim.
            </p>
            <p>
              Saudex is not liable for indirect, incidental, consequential, punitive, or special damages,
              including lost profits, loss of data, or business interruption, even if advised of the
              possibility of such damages.
            </p>
            <p>
              These limitations do not apply to liability for death or personal injury caused by Saudex's
              gross negligence or willful misconduct, or where exclusion is prohibited by applicable law.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="prohibited" title="Prohibited Cargo">
            <p>
              The following cargo categories are strictly prohibited on all Saudex-managed shipments:
            </p>
            <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Weapons, firearms, ammunition, or explosive materials</li>
              <li>Controlled substances, narcotics, or precursor chemicals</li>
              <li>Counterfeit goods or goods infringing intellectual property rights</li>
              <li>Hazardous materials not properly declared and packaged per IATA/IMDG standards</li>
              <li>Human remains or organs (without prior written approval and required documentation)</li>
              <li>Any cargo prohibited under applicable international trade sanctions</li>
            </ul>
            <p>
              Shipments found to contain prohibited cargo will be stopped, reported to relevant authorities,
              and you will bear all associated costs and liabilities.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="termination" title="Termination">
            <p>
              Either party may terminate a service agreement with 30 days written notice. Saudex may
              terminate or suspend access immediately and without notice if you materially breach these
              terms, fail to pay amounts due, or if continued service would violate applicable law.
            </p>
            <p>
              Upon termination, all outstanding amounts become immediately due. Provisions relating to
              liability, indemnification, payment, and governing law survive termination.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="governing-law" title="Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in
              which Saudex's principal place of business is registered, without regard to conflict-of-law
              principles. Any disputes shall be resolved by binding arbitration, except where injunctive
              relief is sought to protect intellectual property or cargo.
            </p>
            <p>
              International shipments may be subject to the CMR Convention, Montreal Convention, or
              applicable multimodal transport conventions, which may override or supplement these terms.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="changes" title="Changes to Terms">
            <p>
              We reserve the right to update these Terms of Service at any time. Material changes will be
              communicated via email to registered users at least 30 days before taking effect. Your
              continued use of our services after that date constitutes your acceptance.
            </p>
            <p>
              All previous versions are archived and available upon request to{" "}
              <a href="mailto:info@saudexglobal.com" style={{ color: "#050f0f", textDecoration: "none", borderBottom: "1px solid rgba(5,15,15,0.2)" }}>info@saudexglobal.com</a>.
            </p>
          </SectionBlock>
          <Divider />
        </main>
      </div>
    </div>
  );
}
