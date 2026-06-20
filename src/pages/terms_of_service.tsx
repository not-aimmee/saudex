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

function SubBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 8 }}>
      <h3 className="font-clash" style={{ fontSize: 15, fontWeight: 600, color: "#050f0f", letterSpacing: "-0.01em", margin: "0 0 10px" }}>
        {title}
      </h3>
      <div className="font-archivo" style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14, lineHeight: 1.8, color: "#050f0f" }}>
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ paddingLeft: 20, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Divider() {
  return <hr style={{ marginTop: 40, border: "none", borderTop: "1px solid rgba(5,15,15,0.08)" }} />;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span style={{ fontWeight: 600, color: "#050f0f" }}>{children}</span>;
}

function MailLink({ address }: { address: string }) {
  return (
    <a href={`mailto:${address}`} style={{ color: "#050f0f", textDecoration: "none", borderBottom: "1px solid rgba(5,15,15,0.2)" }}>
      {address}
    </a>
  );
}

export default function TermsOfService() {
  return (
    <div className="font-archivo " style={{ minHeight: "150vh", background: "#f7faf8" }}>

      {/* Hero strip */}
      <div  style={{ background: "#050f0f", padding: "100px 0 64px" }}>
        <div  style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px" }}>
          <p className="font-clash" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A3BDB8", marginBottom: 18 }}>
            Legal
          </p>
          <h1 className="font-clash" style={{ fontSize: 48, fontWeight: 600, color: "#f7faf8", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
            Terms of Service
          </h1>
          <p className="font-archivo" style={{ fontSize: 14, color: "rgba(163,189,184,0.7)", margin: 0 }}>
            Effective June 20, 2026 &nbsp;·&nbsp; Version 1.0 &nbsp;·&nbsp;
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
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4, maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
            {[
              ["acceptance", "1. Acceptance"],
              ["definitions", "2. Definitions"],
              ["services", "3. Our Services"],
              ["accounts", "4. Accounts"],
              ["shipments", "5. Shipments & Cargo"],
              ["customs", "6. Customs & Compliance"],
              ["payment", "7. Payment & Fees"],
              ["liability", "8. Liability"],
              ["indemnification", "9. Indemnification"],
              ["prohibited", "10. Prohibited Cargo"],
              ["data-protection", "11. Personal Data"],
              ["force-majeure", "12. Force Majeure"],
              ["intellectual-property", "13. Intellectual Property"],
              ["confidentiality", "14. Confidentiality"],
              ["termination", "15. Termination"],
              ["governing-law", "16. Governing Law"],
              ["anti-bribery", "17. Anti-Bribery & Sanctions"],
              ["changes", "18. Changes to Terms"],
              ["general", "19. General Provisions"],
              ["contact", "20. Contact"],
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
          <p className="font-archivo" style={{ fontSize: 13, color: "rgba(5,15,15,0.5)", margin: "0 0 8px" }}>
            <Highlight>SAUDEX GLOBAL PTE LTD</Highlight> &nbsp;·&nbsp; Registered in Singapore (UEN: [Insert UEN])
          </p>

          <SectionBlock id="acceptance" title="1. Acceptance of Terms">
            <p>
              By accessing, registering for, or using any service offered by Saudex Global Pte Ltd (UEN: [Insert
              UEN]) ("Saudex", "we", "us", or "our"), you ("Client", "you", or "your") agree to be bound by these
              Terms of Service ("Terms"), our Privacy Policy, and any service-specific agreements or quotations
              issued to you. These Terms constitute a legally binding agreement.
            </p>
            <p>
              If you are acting on behalf of a company or legal entity, you represent and warrant that you have
              the authority to bind that entity to these Terms. If you do not agree to any part of these Terms,
              you must immediately discontinue use of all Saudex services and platforms.
            </p>
            <p>
              Continued use of our services following notification of any amendment constitutes acceptance of
              the updated Terms.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="definitions" title="2. Definitions">
            <p>For the purposes of these Terms, the following definitions apply:</p>
            <BulletList items={[
              <><Highlight>"Services"</Highlight> means all logistics, freight forwarding, customs brokerage, warehousing, fulfilment, last-mile delivery, shipment tracking, supply chain consulting, and any other services offered by Saudex.</>,
              <><Highlight>"Shipment"</Highlight> or <Highlight>"Cargo"</Highlight> means any goods, packages, or freight accepted by Saudex for transport, storage, or handling on your behalf.</>,
              <><Highlight>"Platform"</Highlight> means the Saudex website (saudexglobal.com), client portal, and any associated applications or digital tools.</>,
              <><Highlight>"Carrier"</Highlight> means any third-party transport provider engaged by Saudex to perform physical transportation services.</>,
              <><Highlight>"Applicable Law"</Highlight> means any law, regulation, treaty, or governmental requirement of any jurisdiction relevant to the origin, transit, or destination of a Shipment, including but not limited to Singapore law, GCC regulations, and international trade conventions.</>,
            ]} />
          </SectionBlock>
          <Divider />

          <SectionBlock id="services" title="3. Our Services">
            <p>
              Saudex provides international and regional logistics services across Southeast Asia (APAC) and the
              Gulf Cooperation Council (GCC) markets, including but not limited to:
            </p>
            <BulletList items={[
              "Freight forwarding (air, sea, road)",
              "Customs brokerage and documentation",
              "Warehousing and fulfilment",
              "Last-mile delivery coordination",
              "Shipment tracking and visibility",
              "Supply chain consulting",
            ]} />
            <p>
              Saudex acts as a freight forwarder and logistics coordinator. <Highlight>Saudex is NOT a common
              carrier.</Highlight> Physical transportation is performed by third-party Carriers operating under
              their own terms, licences, and regulatory obligations. Saudex shall not be liable for acts or
              omissions of Carriers beyond Saudex's reasonable control.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any Service at any time upon reasonable
              prior notice, except where immediate action is required to comply with Applicable Law, protect
              cargo safety, or safeguard personnel.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="accounts" title="4. Accounts & Client Responsibilities">
            <p>
              To access our Platform and Services, you must register for an account using accurate, complete,
              and current information. You must promptly update your information if it changes.
            </p>
            <p>You are solely responsible for:</p>
            <BulletList items={[
              "Maintaining the confidentiality of your login credentials;",
              "All activity and transactions conducted under your account;",
              <>Notifying Saudex immediately at <MailLink address="ops@saudexglobal.com" /> of any suspected unauthorised access or security breach.</>,
            ]} />
            <p>
              Saudex shall not be liable for any loss or damage arising from your failure to maintain the
              security of your account credentials. We reserve the right to suspend or terminate accounts where
              we reasonably suspect unauthorised use, fraud, or violation of these Terms.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="shipments" title="5. Shipments & Cargo">
            <SubBlock title="5.1 Your Obligations">
              <p>You are solely responsible for ensuring that all Cargo submitted for transport is:</p>
              <BulletList items={[
                "Accurately described in all documentation (including nature, weight, dimensions, and value);",
                "Properly packaged, labelled, and marked in accordance with international standards and Carrier requirements;",
                "Accompanied by all required documentation (commercial invoice, packing list, certificates of origin, permits, licences, etc.);",
                "Compliant with all Applicable Laws, trade sanctions, and import/export regulations of origin, transit, and destination countries.",
              ]} />
              <p>
                Misdeclaration of weight, dimensions, content, or value may result in additional surcharges,
                delays, refusal of service, seizure by authorities, and you will bear all resulting costs and
                liabilities.
              </p>
            </SubBlock>
            <SubBlock title="5.2 Declared Value & Insurance">
              <p>
                Saudex's liability for loss or damage to Cargo is limited to the lower of: (a) the declared value
                of the Shipment; or (b) our standard liability cap as set out in Section 8. Saudex strongly
                recommends that Clients arrange comprehensive cargo insurance for all Shipments. Saudex can
                assist in arranging cargo insurance upon written request and at additional cost.
              </p>
            </SubBlock>
            <SubBlock title="5.3 Perishables & Time-Sensitive Cargo">
              <p>
                While Saudex operates with urgency, delivery times for perishable goods are not guaranteed unless
                a dedicated guaranteed-transit service has been explicitly agreed in a written service agreement
                signed by both parties. Saudex shall not be liable for spoilage or deterioration of perishable
                goods unless caused by Saudex's gross negligence.
              </p>
            </SubBlock>
            <SubBlock title="5.4 Dangerous Goods">
              <p>
                Shipments containing dangerous goods, hazardous materials, or substances regulated under IATA
                Dangerous Goods Regulations, IMDG Code, or ADR must be declared in full prior to booking. Proper
                classification, packaging, labelling, and documentation are your sole responsibility. Undeclared
                or improperly declared dangerous goods will result in immediate refusal, seizure, and you will
                bear all costs and liabilities including fines and remediation costs.
              </p>
            </SubBlock>
          </SectionBlock>
          <Divider />

          <SectionBlock id="customs" title="6. Customs & Regulatory Compliance">
            <p>
              You are solely responsible for ensuring full compliance with the import, export, customs, and
              trade laws of all relevant jurisdictions, including but not limited to Singapore (Singapore
              Customs), GCC member states (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman), Malaysia, Indonesia,
              and any other transit or destination country.
            </p>
            <p>
              Saudex may assist with customs documentation and brokerage as part of its Services. However, the
              provision of such assistance does not transfer or reduce your legal obligations as shipper or
              consignee. You represent and warrant that all information provided to Saudex for customs purposes
              is accurate, complete, and lawful.
            </p>
            <p>
              You shall bear sole responsibility for all duties, taxes, VAT/GST, fines, penalties, storage
              charges, or other costs imposed by customs or regulatory authorities arising from:
            </p>
            <BulletList items={[
              "Inaccurate or incomplete documentation;",
              "Misdeclaration of goods;",
              "Failure to obtain required permits, licences, or certificates;",
              "Violation of applicable trade sanctions or embargoes.",
            ]} />
            <p>
              Saudex reserves the right to recover from you any such costs that Saudex is required to pay on
              your behalf, including legal and administrative costs of recovery.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="payment" title="7. Payment & Fees">
            <SubBlock title="7.1 Fees & Quotations">
              <p>
                All fees are as quoted at the time of booking confirmation or as set out in a written service
                agreement. Quotations are valid for the period stated. Saudex reserves the right to apply
                surcharges for:
              </p>
              <BulletList items={[
                "Fuel price fluctuations;",
                "Currency exchange rate movements (for invoices in foreign currency);",
                "Port congestion, demurrage, or detention charges;",
                "Extraordinary events (force majeure, pandemic-related disruptions, regulatory changes);",
                "Additional handling, re-packaging, or special requirements not disclosed at booking.",
              ]} />
              <p>Fixed-rate contracts are binding only where expressly agreed in a signed written agreement.</p>
            </SubBlock>
            <SubBlock title="7.2 Payment Terms">
              <p>
                All invoices are due within thirty (30) days of the invoice date unless a different payment term
                has been expressly agreed in writing. Invoices shall be issued in Singapore Dollars (SGD) unless
                otherwise agreed. Where services attract Singapore GST, GST will be charged at the prevailing
                rate.
              </p>
            </SubBlock>
            <SubBlock title="7.3 Late Payment">
              <p>
                Overdue invoices will accrue interest at 1.5% per month (or the maximum rate permitted by
                applicable law, whichever is lower) from the due date until full payment is received. Saudex
                reserves the right to:
              </p>
              <BulletList items={[
                "Suspend all Services until outstanding amounts are settled;",
                "Place a lien on any Cargo held by Saudex;",
                "Engage third-party debt recovery and recover all associated costs from you.",
              ]} />
            </SubBlock>
            <SubBlock title="7.4 Disputes">
              <p>
                Any dispute regarding an invoiced amount must be raised in writing to{" "}
                <MailLink address="finance@saudexglobal.com" /> within fourteen (14) days of the invoice date.
                Failure to raise a dispute within this period constitutes acceptance of the invoice. Undisputed
                portions of any invoice remain due by the original payment date.
              </p>
            </SubBlock>
          </SectionBlock>
          <Divider />

          <SectionBlock id="liability" title="8. Limitation of Liability">
            <SubBlock title="8.1 General Cap">
              <p>
                To the maximum extent permitted by Applicable Law, Saudex's total aggregate liability to you for
                any and all claims arising out of or relating to these Terms or our Services shall not exceed the
                total fees paid by you to Saudex in the three (3) calendar months immediately preceding the
                event giving rise to the claim.
              </p>
            </SubBlock>
            <SubBlock title="8.2 Exclusions">
              <p>Saudex shall not be liable for any:</p>
              <BulletList items={[
                "Indirect, incidental, consequential, special, or punitive damages;",
                "Loss of profits, revenue, goodwill, or anticipated savings;",
                "Loss of data or business interruption;",
                "Delays, loss, or damage caused by events outside Saudex's reasonable control (see Section 12 — Force Majeure);",
                "Acts or omissions of Carriers, customs authorities, or other third parties;",
                "Damage arising from your failure to properly declare, package, or document Cargo.",
              ]} />
            </SubBlock>
            <SubBlock title="8.3 Exceptions">
              <p>The limitations in Sections 8.1 and 8.2 do not apply to liability for:</p>
              <BulletList items={[
                "Death or personal injury caused by Saudex's gross negligence or wilful misconduct;",
                "Fraud or fraudulent misrepresentation by Saudex;",
                "Any liability that cannot be excluded or limited by Applicable Law.",
              ]} />
            </SubBlock>
            <SubBlock title="8.4 International Conventions">
              <p>
                Where international transport conventions apply (including but not limited to the Montreal
                Convention for air cargo, the CMR Convention for international road transport, or applicable
                multimodal transport conventions), those conventions may govern liability in lieu of or in
                addition to these Terms.
              </p>
            </SubBlock>
          </SectionBlock>
          <Divider />

          <SectionBlock id="indemnification" title="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Saudex, its directors, officers, employees,
              agents, and partners from and against any and all claims, liabilities, losses, damages, fines,
              penalties, and expenses (including reasonable legal fees) arising out of or relating to:
            </p>
            <BulletList items={[
              "Your breach of these Terms or any Applicable Law;",
              "Your misdeclaration, misrepresentation, or failure to disclose material information regarding Cargo;",
              "Your failure to comply with customs, import/export, or trade sanction requirements;",
              "Any claim by a third party arising from goods shipped or stored by you through Saudex's Services;",
              "Your negligence or wilful misconduct.",
            ]} />
          </SectionBlock>
          <Divider />

          <SectionBlock id="prohibited" title="10. Prohibited Cargo">
            <p>
              The following categories are strictly prohibited on all Saudex-managed Shipments, without
              exception:
            </p>
            <BulletList items={[
              "Firearms, weapons, ammunition, or explosive materials;",
              "Controlled substances, narcotics, or precursor chemicals;",
              "Counterfeit goods or goods infringing intellectual property rights;",
              "Hazardous materials not fully declared and packaged per IATA/IMDG standards;",
              "Human remains or organs (except with prior written approval and all required government authorisations);",
              "Goods subject to international trade sanctions, arms embargoes, or export control restrictions;",
              "Child exploitation material or any content that violates applicable law;",
              "Any other goods prohibited by Applicable Law in origin, transit, or destination jurisdictions.",
            ]} />
            <p>
              Shipments found to contain prohibited cargo will be stopped immediately, reported to all relevant
              authorities, and all associated costs, fines, penalties, and liabilities will be borne solely by
              you. Saudex reserves the right to terminate your account and all ongoing services immediately and
              without notice.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="data-protection" title="11. Personal Data Protection">
            <SubBlock title="11.1 PDPA Compliance">
              <p>
                Saudex collects, uses, and discloses personal data in accordance with Singapore's Personal Data
                Protection Act 2012 (No. 26 of 2012) ("PDPA") and any applicable data protection laws in
                jurisdictions where we operate, including the EU General Data Protection Regulation (GDPR) where
                relevant.
              </p>
            </SubBlock>
            <SubBlock title="11.2 Data We Collect">
              <p>
                We collect personal data necessary to provide our Services, including but not limited to:
                contact information, company details, shipment information, payment details, and communications
                records. Full details are set out in our Privacy Policy available at saudexglobal.com/privacy.
              </p>
            </SubBlock>
            <SubBlock title="11.3 Use of Personal Data">
              <p>
                Personal data is used for: providing and improving our Services, customs and regulatory
                compliance, fraud prevention, marketing communications (with consent), and legal obligations. We
                do not sell personal data to third parties.
              </p>
            </SubBlock>
            <SubBlock title="11.4 Data Sharing">
              <p>
                We may share personal data with: Carriers, customs authorities, regulatory bodies, payment
                processors, and professional advisors, where necessary to provide our Services or comply with
                Applicable Law. International data transfers are made with appropriate safeguards.
              </p>
            </SubBlock>
            <SubBlock title="11.5 Your Rights">
              <p>
                Subject to Applicable Law, you have rights to access, correct, and withdraw consent for the use
                of your personal data. Requests may be directed to <MailLink address="dpo@saudexglobal.com" />.
                We will respond within 30 days.
              </p>
            </SubBlock>
          </SectionBlock>
          <Divider />

          <SectionBlock id="force-majeure" title="12. Force Majeure">
            <p>
              Saudex shall not be in breach of these Terms or liable for any delay or failure to perform any
              obligation where such failure is caused by circumstances beyond our reasonable control, including
              but not limited to: acts of God, natural disasters, war, terrorism, pandemic, government action,
              port closures, strikes, civil unrest, or disruptions to transport networks.
            </p>
            <p>
              In such circumstances, Saudex will notify you promptly and use commercially reasonable efforts to
              resume performance. If the force majeure event continues for more than sixty (60) days, either
              party may terminate the affected service agreement on written notice without liability.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="intellectual-property" title="13. Intellectual Property">
            <p>
              All content, trademarks, logos, trade names, software, and materials on the Saudex Platform are
              owned by or licensed to Saudex Global Pte Ltd and are protected by applicable intellectual
              property laws. You may not reproduce, distribute, modify, or create derivative works of any
              Saudex content without our prior written consent.
            </p>
            <p>
              You grant Saudex a non-exclusive, royalty-free licence to use your company name and logo for the
              purposes of providing our Services (e.g. on shipping documentation, customs filings, and tracking
              systems). We will not use your branding in public marketing materials without your prior consent.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="confidentiality" title="14. Confidentiality">
            <p>
              Each party agrees to keep confidential all non-public information received from the other party in
              connection with these Terms ("Confidential Information") and to use it solely for the purpose of
              performing obligations under these Terms. This obligation does not apply to information that: (a)
              is or becomes publicly available through no fault of the receiving party; (b) was already known to
              the receiving party; (c) is required to be disclosed by Applicable Law or court order.
            </p>
            <p>
              Confidentiality obligations survive termination of these Terms for a period of three (3) years.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="termination" title="15. Termination">
            <SubBlock title="15.1 Termination by Either Party">
              <p>
                Either party may terminate a service agreement with thirty (30) days written notice to the other
                party without cause.
              </p>
            </SubBlock>
            <SubBlock title="15.2 Immediate Termination by Saudex">
              <p>Saudex may terminate or suspend access to all Services immediately and without prior notice if:</p>
              <BulletList items={[
                "You materially breach these Terms and (where the breach is capable of remedy) fail to remedy the breach within seven (7) days of written notice;",
                "You fail to pay any amount due and do not remedy such failure within seven (7) days of written notice;",
                "You become insolvent, enter liquidation, are placed under judicial management, or make an arrangement with creditors;",
                "Continued provision of Services would violate Applicable Law or expose Saudex to regulatory or legal risk.",
              ]} />
            </SubBlock>
            <SubBlock title="15.3 Consequences of Termination">
              <p>
                Upon termination: all outstanding amounts become immediately due and payable; Saudex may retain
                any Cargo in its possession until all amounts are settled; and all licences granted under these
                Terms are revoked. Provisions relating to liability, indemnification, payment, confidentiality,
                data protection, and governing law survive termination.
              </p>
            </SubBlock>
          </SectionBlock>
          <Divider />

          <SectionBlock id="governing-law" title="16. Governing Law & Dispute Resolution">
            <SubBlock title="16.1 Governing Law">
              <p>
                These Terms and any dispute arising out of or in connection with them shall be governed by and
                construed in accordance with the laws of the Republic of Singapore, without regard to
                conflict-of-law principles.
              </p>
            </SubBlock>
            <SubBlock title="16.2 Dispute Resolution">
              <p>
                The parties agree to attempt to resolve any dispute in good faith through senior-level
                negotiation within thirty (30) days of written notice of the dispute. If unresolved, the dispute
                shall be referred to and finally resolved by binding arbitration administered by the Singapore
                International Arbitration Centre (SIAC) in accordance with the SIAC Arbitration Rules for the
                time being in force. The seat of arbitration shall be Singapore. The language of arbitration
                shall be English.
              </p>
              <p>
                Notwithstanding the foregoing, either party may seek urgent injunctive or other interim relief
                from any court of competent jurisdiction to protect its intellectual property rights or to
                prevent imminent cargo loss or damage.
              </p>
            </SubBlock>
          </SectionBlock>
          <Divider />

          <SectionBlock id="anti-bribery" title="17. Anti-Bribery & Sanctions Compliance">
            <p>
              Both parties agree to comply with all applicable anti-bribery, anti-corruption, anti-money
              laundering, and trade sanctions laws, including Singapore's Prevention of Corruption Act, the UK
              Bribery Act 2010, and applicable US, EU, and UN sanctions regimes.
            </p>
            <p>
              You represent and warrant that: (a) you are not a sanctioned entity or individual under any
              applicable sanctions regime; (b) no Cargo is destined for sanctioned end-users or prohibited
              end-uses; and (c) all payments to Saudex are from legitimate sources. Breach of this clause
              entitles Saudex to terminate all Services immediately without liability.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="changes" title="18. Changes to These Terms">
            <p>
              Saudex reserves the right to update or modify these Terms at any time. Material changes will be
              communicated to registered users by email to the address on file at least thirty (30) days before
              taking effect. The updated Terms will also be published at saudexglobal.com/terms with the
              effective date.
            </p>
            <p>
              Your continued use of our Services after the effective date of any update constitutes your
              acceptance of the revised Terms. If you do not agree to the revised Terms, you must discontinue
              use of our Services before the effective date.
            </p>
            <p>
              All previous versions of these Terms are archived and available upon request to{" "}
              <MailLink address="legal@saudexglobal.com" />.
            </p>
          </SectionBlock>
          <Divider />

          <SectionBlock id="general" title="19. General Provisions">
            <BulletList items={[
              <><Highlight>Entire Agreement:</Highlight> These Terms, together with any applicable service agreements, quotations, and our Privacy Policy, constitute the entire agreement between the parties with respect to the subject matter hereof and supersede all prior negotiations, representations, and agreements.</>,
              <><Highlight>Severability:</Highlight> If any provision of these Terms is found to be invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force.</>,
              <><Highlight>Waiver:</Highlight> No waiver by Saudex of any breach or default shall be deemed a waiver of any subsequent breach or default. Waivers must be in writing to be effective.</>,
              <><Highlight>Assignment:</Highlight> You may not assign or transfer your rights or obligations under these Terms without Saudex's prior written consent. Saudex may assign these Terms to an affiliate or in connection with a merger, acquisition, or sale of all or substantially all of its assets.</>,
              <><Highlight>Notices:</Highlight> All formal notices under these Terms must be in writing and delivered by email to: Saudex — <MailLink address="legal@saudexglobal.com" />; to you — the email address registered on your account.</>,
              <><Highlight>Language:</Highlight> These Terms are written in English. In the event of any conflict between the English version and any translation, the English version shall prevail.</>,
            ]} />
          </SectionBlock>
          <Divider />

          <SectionBlock id="contact" title="20. Contact Information">
            <p>For any queries regarding these Terms, please contact:</p>
            <p>
              <Highlight>Saudex Global Pte Ltd</Highlight><br />
              Singapore (Principal Place of Business)
            </p>
            <p>
              Email: <MailLink address="legal@saudexglobal.com" /><br />
              Operations: <MailLink address="ops@saudexglobal.com" /><br />
              Finance: <MailLink address="finance@saudexglobal.com" /><br />
              Data Protection Officer: <MailLink address="dpo@saudexglobal.com" /><br />
              Website: saudexglobal.com
            </p>
            <p style={{ marginTop: 16, fontSize: 12, color: "rgba(5,15,15,0.5)" }}>
              © 2026 Saudex Global Pte Ltd. All rights reserved.<br />
              Version 1.0 &nbsp;·&nbsp; Effective 20 June 2026 &nbsp;·&nbsp; saudexglobal.com/terms
            </p>
          </SectionBlock>
        </main>
      </div>
    </div>
  );
}
