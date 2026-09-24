import { useState } from "react";

type CategoryId = "functional" | "analytics" | "marketing";
type ConsentState = Record<CategoryId, boolean>;

const STORAGE_KEY = "cookie-consent";

const CATEGORIES: { id: CategoryId; label: string; desc: string }[] = [
  { id: "functional", label: "Functional", desc: "Remembers preferences like default origin port and display settings." },
  { id: "analytics", label: "Analytics", desc: "Aggregate usage data to improve platform performance and UX." },
  { id: "marketing", label: "Marketing", desc: "Interest-based outreach. You can opt out at any time." },
];

const DEFAULT_PREFS: ConsentState = { functional: false, analytics: false, marketing: false };

// Reads any previously saved consent from localStorage. Returns null if
// nothing has been saved yet, or if the stored value is malformed.
function readStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.functional === "boolean" &&
      typeof parsed?.analytics === "boolean" &&
      typeof parsed?.marketing === "boolean"
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeStoredConsent(prefs: ConsentState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — banner will
    // just show again next time, which is an acceptable fallback.
  }
}

export default function CookieConsentBanner() {
  // On mount, check localStorage for a prior choice. If one exists, we start
  // "decided" so the banner doesn't flash/reappear on every navigation.
  const stored = readStoredConsent();
  const [decided, setDecided] = useState(stored !== null);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<ConsentState>(stored ?? DEFAULT_PREFS);

  const commit = (next: ConsentState) => {
    setPrefs(next);
    setDecided(true);
    writeStoredConsent(next);
  };

  const acceptAll = () => commit({ functional: true, analytics: true, marketing: true });
  const rejectAll = () => commit({ functional: false, analytics: false, marketing: false });
  const saveChoices = () => commit(prefs);

  // Once a choice has been made (this load or a previous one), render nothing.
  if (decided) {
    return null;
  }

  return (
    <div className="font-archivo" style={{ position: "fixed", bottom: 20, left: 20, zIndex: 9999, maxWidth: 380 }}>
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          background: "#050f0f",
          borderRadius: 10,
          boxShadow: "0 24px 48px rgba(5,15,15,0.28)",
          overflow: "hidden",
        }}
      >
        <div style={{ height: 2, background: "linear-gradient(to right, #A3BDB8, transparent)" }} />

        <div style={{ padding: "20px 20px 18px" }}>
          <p className="font-clash" style={{ fontSize: 15, fontWeight: 600, color: "#f7faf8", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
            Your privacy on this site
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(163,189,184,0.75)", margin: 0 }}>
            We use essential cookies to run this site, plus optional cookies for functionality, analytics and marketing.
            Read our{" "}
            <a href="/privacy_policy/" style={{ color: "#A3BDB8", textDecoration: "none", borderBottom: "1px solid rgba(163,189,184,0.4)" }}>
              Privacy Policy
            </a>{" "}
            for details.
          </p>

          {showPrefs && (
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(163,189,184,0.15)", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f7faf8", margin: 0 }}>Essential</p>
                  <p style={{ fontSize: 11.5, color: "rgba(163,189,184,0.55)", margin: "2px 0 0" }}>
                    Required for authentication and shipment tracking. Always on.
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  style={{ width: 34, height: 19, borderRadius: 999, background: "rgba(163,189,184,0.3)", position: "relative", flexShrink: 0 }}
                >
                  <span style={{ position: "absolute", top: 2, right: 2, width: 15, height: 15, borderRadius: "50%", background: "#f7faf8" }} />
                </div>
              </div>

              {CATEGORIES.map((c) => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#f7faf8", margin: 0 }}>{c.label}</p>
                    <p style={{ fontSize: 11.5, color: "rgba(163,189,184,0.55)", margin: "2px 0 0" }}>{c.desc}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={prefs[c.id]}
                    aria-label={`Toggle ${c.label} cookies`}
                    onClick={() => setPrefs((p) => ({ ...p, [c.id]: !p[c.id] }))}
                    style={{
                      width: 34,
                      height: 19,
                      borderRadius: 999,
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                      flexShrink: 0,
                      background: prefs[c.id] ? "#A3BDB8" : "rgba(163,189,184,0.2)",
                      transition: "background 0.15s",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: 2,
                        left: prefs[c.id] ? 17 : 2,
                        width: 15,
                        height: 15,
                        borderRadius: "50%",
                        background: prefs[c.id] ? "#050f0f" : "#f7faf8",
                        transition: "left 0.15s",
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 18 }}>
            <button
              onClick={() => setShowPrefs((s) => !s)}
              style={{ fontSize: 12.5, color: "rgba(163,189,184,0.75)", background: "none", border: "none", padding: 0, cursor: "pointer", textDecoration: "underline", textDecorationColor: "rgba(163,189,184,0.35)" }}
            >
              {showPrefs ? "Hide preferences" : "Manage preferences"}
            </button>
            <div style={{ flex: 1 }} />
            <button
              onClick={rejectAll}
              style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: "#f7faf8",
                background: "transparent",
                border: "1px solid rgba(163,189,184,0.4)",
                borderRadius: 6,
                padding: "7px 14px",
                cursor: "pointer",
              }}
            >
              Reject all
            </button>
            {showPrefs ? (
              <button
                onClick={saveChoices}
                style={{ fontSize: 12.5, fontWeight: 600, color: "#050f0f", background: "#A3BDB8", border: "1px solid #A3BDB8", borderRadius: 6, padding: "7px 14px", cursor: "pointer" }}
              >
                Save choices
              </button>
            ) : (
              <button
                onClick={acceptAll}
                style={{ fontSize: 12.5, fontWeight: 600, color: "#050f0f", background: "#A3BDB8", border: "1px solid #A3BDB8", borderRadius: 6, padding: "7px 14px", cursor: "pointer" }}
              >
                Accept all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}