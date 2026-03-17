import { useState } from "react";

export type ConsentState = "accepted" | "rejected" | null;

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("consent") as ConsentState;
  });

  const saveConsent = (value: ConsentState) => {
    if (value) {
      localStorage.setItem("consent", value);
      setConsent(value);
    }
  };

  return {
    consent,
    saveConsent,
    hasConsent: !!consent,
    isAccepted: consent === "accepted",
  };
}
