const PIXEL_ID = "2242477586513362";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function initMetaPixel() {
  if (window.fbq) return;

  const n = (window.fbq = function (...args: any[]) {
    n.callMethod ? n.callMethod(...args) : n.queue.push(args);
  } as any);
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode!.insertBefore(script, firstScript);

  window.fbq("init", PIXEL_ID);
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}
