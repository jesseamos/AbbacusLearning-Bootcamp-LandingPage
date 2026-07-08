import { CountdownBanner } from "./CountdownBanner";
import { Navbar } from "./Navbar";

export function CustomHeader() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col pointer-events-none">
      {/* 1. Banner sits naturally at the top if active */}
      <div className="pointer-events-auto">
        <CountdownBanner />
      </div>

      {/* 2. Navbar sits directly below it with a clean gap */}
      <div className="w-full pt-3 pointer-events-auto">
        <Navbar />
      </div>
    </div>
  );
}