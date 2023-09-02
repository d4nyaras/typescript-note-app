import { useState } from "react";
import { NoteProps } from "../modules/Note";
import { nanoid } from "nanoid";
import { PlusOutlined } from "@ant-design/icons";
import { message } from "antd";
import { Input } from "antd";
type NoteAddProp = {
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
};
export default function NoteAdd({ notes, setNotes }: NoteAddProp) {
  const [text, setText] = useState("");
  const handleAdd = () => {
    // const newDate = new Date().toString;
    const newId = nanoid();
    const newNote: { id: string; text: string } = {
      id: newId,
      text: text,
    };

    if (text.trim().length > 0) {
      const newObj = [...notes, newNote];
      setNotes(newObj);
      setText("");
    } else {
      message.error("please inter your note");
    }
  };
  const { TextArea } = Input;

  return (
    <div className="NoteAdd">
      <TextArea
        allowClear
        style={{
          height: "120",
          resize: "none",
        }}
        showCount
        maxLength={250}
        className="AddNoteTextArea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></TextArea>
      <PlusOutlined className="plusIcon" onClick={handleAdd} />
    </div>
  );
}
// <SearchOutlined />
