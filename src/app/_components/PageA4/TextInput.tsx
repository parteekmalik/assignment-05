import React, { CSSProperties, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { SettingType } from "~/app/page";

function TextField({
  size,
  settings,
}: {
  size: number;
  settings: SettingType;
}) {
  const [text, settext] = useState("");
  const [style, setstyle] = useState<CSSProperties>({
    // minHeight: size / 10,
    minWidth: size / 5,
    // top: 0.5 * size * 1.41,
    // left: 0.5 * size,
    color: settings.color.value,
    fontSize: settings.size.value + "px",
    resize: "both",
  });
  function textAreaAdjust(element: HTMLTextAreaElement) {
    element.style.height = "1px";
    element.style.height = 20 + element.scrollHeight + "px";
  }
  function handleStop(event: DraggableEvent, data: DraggableData) {
    console.log('Drag stopped:', data);
    // You can perform any additional actions here
  }
  return (
    <Draggable bounds="parent" onStop={handleStop}>
      <textarea
        className="absolute appearance-none border-2 border-pink-400 px-2 focus:outline-pink-700 bg-transparent"
        style={{ ...style }}
        placeholder="Type here ..."
        value={text}
        onKeyDown={(e) => textAreaAdjust(e.currentTarget)}
        onChange={(e) => settext(e.target.value)}
      />
    </Draggable>
  );
}

export default TextField;
