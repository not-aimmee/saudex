import { SEO } from "../components/SEO";
import { teamMeta } from "./data/seoMeta";

/* ─── color tokens (matches site palette) ────────────────── */
const C = {
  inkBlack:  "#031926",
  darkTeal:  "#254D58",
  teal:      "#468189",
  bone:      "#e0ddcf",
  parchment: "#f1f0ea",
  ivory:     "#F5FBEF",
};

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  linkedIn?: string;
}

// TODO: add the rest of the team here as bios/LinkedIn links become available
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Nauman",
    title: "Founder & Chief Operations Officer",
    bio: "Nauman brings a background in finance and international operations, including experience as a Financial Accountant at IHG in Makkah, Saudi Arabia, to lead SAUDEX GLOBAL's strategy and business development across the Singapore–GCC–Asia-Pacific corridor.",
    expertise: ["Logistics Strategy", "Supply Chain", "International Trade", "Regional Operations"],
    // TODO: replace with the real LinkedIn URL
    linkedIn: "https://www.linkedin.com/company/saudexglobal/",
  },
];

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://saudexglobal.com/team#webpage",
      "url": "https://saudexglobal.com/team/",
      "name": teamMeta.title,
      "description": teamMeta.description,
      "isPartOf": { "@id": "https://saudexglobal.com/#website" },
      "breadcrumb": { "@id": "https://saudexglobal.com/team#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://saudexglobal.com/team#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://saudexglobal.com/" },
        { "@type": "ListItem", "position": 2, "name": "Team", "item": "https://saudexglobal.com/team/" }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://saudexglobal.com/#organization",
      "employee": TEAM_MEMBERS.map((member) => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.title,
        "worksFor": { "@id": "https://saudexglobal.com/#organization" },
        "knowsAbout": member.expertise,
        ...(member.linkedIn ? { "sameAs": member.linkedIn } : {}),
      })),
    },
  ],
};

export default function Team() {
  return (
    <>
      <SEO
        title={teamMeta.title}
        description={teamMeta.description}
        keywords={teamMeta.keywords}
        canonical={teamMeta.canonical}
        ogImage={teamMeta.ogImage}
        schemaMarkup={teamSchema}
      />

      <section className="px-6 md:px-16 py-32" style={{ backgroundColor: C.ivory }}>
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs tracking-[0.25em] uppercase font-medium"
            style={{ color: C.teal }}
          >
            Our Team
          </span>
          <h1
            className="mt-4 text-5xl md:text-7xl font-black font-sentient uppercase leading-[0.92] tracking-tight"
            style={{ color: C.inkBlack }}
          >
            The people behind SAUDEX GLOBAL.
          </h1>

          <div className="mt-20 grid gap-16">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className="pt-10"
                style={{ borderTop: `1px solid ${C.bone}` }}
              >
                <h2 className="text-2xl md:text-3xl font-bold font-sentient" style={{ color: C.inkBlack }}>
                  {member.name}
                </h2>
                <p className="mt-1 text-sm tracking-wide uppercase" style={{ color: C.teal }}>
                  {member.title}
                </p>
                <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl font-generalsans" style={{ color: C.darkTeal }}>
                  {member.bio}
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {member.expertise.map((e) => (
                    <li
                      key={e}
                      className="text-xs uppercase tracking-wide px-3 py-1 rounded-full"
                      style={{ backgroundColor: C.parchment, color: C.darkTeal }}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block text-sm font-medium underline"
                    style={{ color: C.teal }}
                  >
                    View LinkedIn Profile
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="mt-20 pt-10" style={{ borderTop: `1px solid ${C.bone}` }}>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.teal }}>Strategy</p>
                <h3 className="mt-4 text-2xl font-sentient font-bold" style={{ color: C.inkBlack }}>Regional clarity</h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: C.darkTeal }}>
                  We combine regional understanding with practical execution so clients can move goods confidently across Singapore, the GCC, and Asia-Pacific corridors.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.teal }}>Execution</p>
                <h3 className="mt-4 text-2xl font-sentient font-bold" style={{ color: C.inkBlack }}>Operational focus</h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: C.darkTeal }}>
                  Every decision is built around schedule reliability, compliance, route visibility, and high-touch customer service for time-sensitive cargo.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.teal }}>Partnership</p>
                <h3 className="mt-4 text-2xl font-sentient font-bold" style={{ color: C.inkBlack }}>Long-term trust</h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: C.darkTeal }}>
                  We work with suppliers, transport partners, and clients as one integrated network so service levels remain consistent as businesses expand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
