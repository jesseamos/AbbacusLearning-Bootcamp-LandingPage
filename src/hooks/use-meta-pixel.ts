import * as React from "react";
import { useRouter } from "@tanstack/react-router";
import { initMetaPixel, trackPageView } from "../lib/meta-pixel";

export function useMetaPixel() {
  const router = useRouter();

  React.useEffect(() => {
    initMetaPixel();
    trackPageView();
  }, []);

  React.useEffect(() => {
    const unsubscribe = router.subscribe("onLoad", () => {
      trackPageView();
    });
    return unsubscribe;
  }, [router]);
}
