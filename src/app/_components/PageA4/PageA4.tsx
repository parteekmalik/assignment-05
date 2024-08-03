import React, {
  CSSProperties,
  ReactNode,
  StyleHTMLAttributes,
  useState,
} from "react";
import { SettingType, textElementsType } from "../../page";

function PageA4({
  textElements,
  size,
}: {
  settings: SettingType;
  textElements: textElementsType;
  size: number;
}) {
  return (
    <div
      className="relative h-[70vh] w-[50vw] border-2 border-black"
      style={{ width: size, height: 1.41 * size }}
    >
      {textElements.map((i) => i.element)}
    </div>
  );
}

export default PageA4;
