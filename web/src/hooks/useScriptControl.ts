"use client";

import { useEffect } from "react";
import { useConsent } from "./useConsent";

export function useScriptControl() {
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent) return;

    // ANALYTICS
    if (consent.analytics) {
      loadAnalytics();
    } else {
      removeScript("analytics-script");
    }

    // MARKETING
    if (consent.marketing) {
      loadMarketing();
    } else {
      removeScript("marketing-script");
    }
  }, [consent]);
}

function loadAnalytics() {
  if (document.getElementById("analytics-script")) return;

  const script = document.createElement("script");
  script.id = "analytics-script";
  script.src = "https://example.com/analytics.js";

  document.body.appendChild(script);

  console.log("Analytics script loaded");
}

function loadMarketing() {
  if (document.getElementById("marketing-script")) return;

  const script = document.createElement("script");
  script.id = "marketing-script";
  script.src = "https://example.com/marketing.js";

  document.body.appendChild(script);

  console.log("Marketing script loaded");
}

function runBlockedScripts(category: string) {
  const scripts = document.querySelectorAll(
    `script[type="text/plain"][data-category="${category}"]`,
  );

  scripts.forEach((script) => {
    const newScript = document.createElement("script");

    if (script.textContent) {
      newScript.textContent = script.textContent;
    }

    document.body.appendChild(newScript);
  });
}

function removeScript(id: string) {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}
