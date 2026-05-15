"use server";

export interface QuoteFormState {
  status: "idle" | "ok" | "error";
  message?: string;
}

export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // Honeypot — bots usually fill every field, including hidden ones.
  if (formData.get("website")) {
    return { status: "ok", message: "Thanks — we'll be in touch shortly." };
  }

  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    suburb: String(formData.get("suburb") ?? "").trim(),
    floor: String(formData.get("floor") ?? "").trim(),
    rooms: String(formData.get("rooms") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    topic: String(formData.get("topic") ?? "measure"),
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.phone || !payload.suburb) {
    return {
      status: "error",
      message: "Please fill in your name, phone and suburb so Mike can get back to you.",
    };
  }

  // TODO: wire to Resend / email / CRM once API keys are in env.
  // For now we log to the server console so deploys with logs catch it.
  console.log("[carpet-direct][quote]", payload);

  return {
    status: "ok",
    message:
      "Thanks — your details are with Mike. We'll be in touch within one business day to book your free measure.",
  };
}
