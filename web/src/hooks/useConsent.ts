import { useState } from "react";

export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export function useConsent() {
  const [consent, setConsent] = useState<ConsentPreferences | null>(() => {
    if (typeof window === "undefined") return null;

    const stored = localStorage.getItem("consent");
    return stored ? JSON.parse(stored) : null;
  });

  const saveConsent = (value: ConsentPreferences) => {
    if (value) {
      localStorage.setItem("consent", JSON.stringify(value));
      setConsent(value);
    }
  };

  return {
    consent,
    saveConsent,
    hasConsent: !!consent,
  };
}
