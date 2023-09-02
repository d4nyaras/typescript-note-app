import { NoteProps } from "../modules/Note";
import { CloseOutlined } from "@ant-design/icons";

import { useState } from "react";
type NoteTemplateProp = {
  noteItem: NoteProps;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
};
export default function NoteTemplate({
  noteItem,
  notes,
  setNotes,
}: NoteTemplateProp) {
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="NoteTemplate">
      <div className="NoteListText">
        <h3>{noteItem.text}</h3>
      </div>
      <div className="NoteListButton">
        <CloseOutlined
          className="deleteIcon"
          onClick={() => handleDelete(noteItem.id)}
        />
      </div>
    </div>
  );
}
//  const newNotes = notes.filter((note) => note.id !== id);
//setNote(newNotes);
