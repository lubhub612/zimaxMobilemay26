import React from "react";
import AiArea from "../../components/Ai/";
import { AiStylesProvider } from "../../contexts/AIStyleContext";
export default function Ai() {
  return (
    <AiStylesProvider>
      <AiArea />
    </AiStylesProvider>
  );
}
