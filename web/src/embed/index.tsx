import React from "react";
import { ConsentBanner } from "@/components/ConsentBanner";
import { createRoot } from "react-dom/client";

function init() {
  const container = document.createElement("div");
  container.id = "cookie-banner-root";
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<ConsentBanner />);
}

// Auto init
init();
