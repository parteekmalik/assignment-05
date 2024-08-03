"use client";

import { FormEvent, ReactNode, useState } from "react";
import PageA4 from "./_components/PageA4/PageA4";
import Settings from "./_components/Settings";
import TextField from "./_components/PageA4/TextInput";

const initSetting = {
  color: { value: "black", type: "button" },
  size: { value: 16, type: "number" },
  font: {
    value: "non",
    options: ["non", "dasa", "sdasd"] as string[],
    type: "select",
  },
};
export type inputTypes = "button" | "number" | "select";
export type SettingType = typeof initSetting;
export type textElementsType = {
  element: ReactNode;
  position: { x: number; y: number };
}[];

export default function HomePage() {
  const [settings, setsettings] = useState(initSetting);
  const [size, setSize] = useState(600);

  const [textElements, settextElements] = useState<textElementsType>([]);
  const createInputField = (e: FormEvent) => {
    e.preventDefault();
    const TextInputElement = {
      element: (
        <TextField size={size} key={textElements.length} settings={settings} />
      ),
      position: { x: 0, y: 0 },
    };
    settextElements((prev) => [...prev, TextInputElement]);
  };
  return (
    <main className="flex min-h-screen items-center justify-center gap-10 bg-white">
      <PageA4
        size={size}
        textElements={textElements}
        settings={settings}
      ></PageA4>
      <Settings
        createInputField={createInputField}
        setsettings={setsettings}
        settings={settings}
      ></Settings>
    </main>
  );
}
