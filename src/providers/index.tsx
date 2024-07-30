"use client";

import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import SwiperProvider from "./swiper";
import ScrollProvider from "./scroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <FontProvider>
        <SwiperProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </SwiperProvider>
      </FontProvider>
    </html>
  );
}
