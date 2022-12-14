import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestuarantScreen } from "./src/features/restuarants/screen/restuarants.screen";

export default function App() {
  return (
    <>
      <RestuarantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
