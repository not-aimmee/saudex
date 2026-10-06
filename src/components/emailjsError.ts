export function getEmailJsErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null) {
    const response = error as { status?: unknown; text?: unknown };
    if (
      response.status === 412 &&
      typeof response.text === "string" &&
      response.text.includes("Invalid grant")
    ) {
      return "Email delivery is temporarily unavailable because the connected Gmail account needs to be reconnected. Please contact us directly while we restore email service.";
    }

    if (response.status === 412) {
      return "EmailJS rejected this website origin (HTTP 412). Allow this site in your EmailJS domain settings, then try again.";
    }
  }

  return "Something went wrong sending your enquiry. Please try again.";
}
