import { useState } from "react";
import { useCreateConsent } from "@/services/consent.service";
import { ConsentPreferences, useConsent } from "@/hooks/useConsent";
import { CustomizeConsentModal } from "./CustomizeConsentModal";

export function ConsentBanner() {
  const { consent, saveConsent } = useConsent();
  const { mutateAsync } = useCreateConsent();

  const [open, setOpen] = useState(false);

  if (consent) return null;

  const acceptAll = async () => {
    const preferences: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };

    await mutateAsync({
      analytics: true,
      marketing: true,
    });

    saveConsent(preferences);
  };

  const rejectAll = async () => {
    const preferences: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };

    await mutateAsync({
      analytics: false,
      marketing: false,
    });

    saveConsent(preferences);
  };

  return (
    <>
      <div className="fixed bottom-0 w-full bg-black text-white p-4 flex justify-between">
        <span>This site uses cookies</span>

        <div className="flex gap-2">
          <button onClick={() => setOpen(true)}>Customize</button>
          <button onClick={rejectAll}>Reject</button>
          <button onClick={acceptAll}>Accept all</button>
        </div>
      </div>

      {open && <CustomizeConsentModal onClose={() => setOpen(false)} />}
    </>
  );
}
