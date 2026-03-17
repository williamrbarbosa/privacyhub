"use client";

import { useState } from "react";
import { useCreateConsent } from "@/services/consent.service";
import { useConsent, ConsentPreferences } from "@/hooks/useConsent";

export function CustomizeConsentModal({ onClose }: { onClose: () => void }) {
  const { saveConsent } = useConsent();
  const { mutateAsync } = useCreateConsent();

  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleSave = async () => {
    await mutateAsync({
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });

    saveConsent(preferences);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded w-[400px]">
        <h2 className="text-lg font-bold mb-4">Customize Preferences</h2>

        <div className="flex justify-between mb-2">
          <span>Necessary</span>
          <input type="checkbox" checked disabled />
        </div>

        <div className="flex justify-between mb-2">
          <span>Analytics</span>
          <input
            type="checkbox"
            checked={preferences.analytics}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                analytics: e.target.checked,
              })
            }
          />
        </div>

        <div className="flex justify-between mb-4">
          <span>Marketing</span>
          <input
            type="checkbox"
            checked={preferences.marketing}
            onChange={(e) =>
              setPreferences({
                ...preferences,
                marketing: e.target.checked,
              })
            }
          />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
