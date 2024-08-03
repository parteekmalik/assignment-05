import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { SettingType } from "../page";

// Define ValueOf type if it's not imported correctly
type ValueOf<T> = T[keyof T];

type SettingPropType = {
  setsettings: Dispatch<SetStateAction<SettingType>>;
  settings: SettingType;
  createInputField: (e: FormEvent) => void;
};

function Settings({
  setsettings,
  settings,
  createInputField,
}: SettingPropType) {
  const inputCreator = (key: keyof SettingType, item: ValueOf<SettingType>) => {
    if (key === "color") {
      return (
        <input
          type="color"
          className="grow"
          value={item.value}
          onChange={(e) => {
            setsettings((prev) => ({
              ...prev,
              [key]: { ...item, value: e.target.value },
            }));
          }}
        />
      );
    } else if (key === "size") {
      return (
        <input
          className="w-fit min-w-0 appearance-none"
          type="number"
          value={item.value}
          onChange={(e) => {
            setsettings((prev) => ({
              ...prev,
              [key]: { ...item, value: Number(e.target.value) },
            }));
          }}
        />
      );
    } else if (key === "font") {
      return (
        <select
          className="grow"
          onChange={(e) => {
            setsettings((prev) => ({
              ...prev,
              size: { ...item, value: Number(e.target.value) },
            }));
          }}
        >
          {"options" in item &&
            Array.isArray(item.options) &&
            item.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <section className="padding-5 rounded bg-gray-200 shadow-md">
      <form onSubmit={createInputField} className="flex flex-col gap-3 p-4">
        {Object.entries(settings).map(([key, item]) => (
          <div
            className="flex gap-2 rounded-md bg-gray-400 px-4 py-2"
            key={key}
          >
            <span className="w-10">{key}</span>
            {inputCreator(
              key as keyof SettingType,
              item as ValueOf<SettingType>,
            )}
          </div>
        ))}
        <button
          type="submit"
          className="rounded-md bg-green-400 px-4 py-2 shadow-sm"
        >
          Create Text Field
        </button>
      </form>
    </section>
  );
}

export default Settings;
