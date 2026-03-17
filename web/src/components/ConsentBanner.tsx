"use client";

import { useConsent } from "../hooks/useConsent";
import { useCreateConsent } from "../services/consent.service";

export function ConsentBanner() {
  const { consent, saveConsent } = useConsent();
  const { mutateAsync, isPending } = useCreateConsent();

  if (consent) return null;

  const handleAccept = async () => {
    await mutateAsync({
      analytics: true,
      marketing: true,
    });

    saveConsent("accepted");
  };

  const handleReject = async () => {
    await mutateAsync({
      analytics: false,
      marketing: false,
    });

    saveConsent("rejected");
  };

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4 flex justify-between">
      <span>This site uses cookies</span>

      <div className="flex gap-2">
        <button onClick={handleReject} disabled={isPending}>
          Reject
        </button>
        <button onClick={handleAccept} disabled={isPending}>
          Accept all
        </button>
      </div>
    </div>
  );
}
