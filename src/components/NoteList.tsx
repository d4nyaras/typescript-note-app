import { NoteProps } from "../modules/Note";
import NoteTemplate from "./NoteTemplate";
import NoteAdd from "./NoteAdd";
import React from "react";
type NoteListProp = {
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
};

export default function NoteList({ notes, setNotes }: NoteListProp) {
  return (
    <div className="NoteList">
      <NoteAdd notes={notes} setNotes={setNotes} />
      {/* <p>{notes[0].title}</p> */}
      {notes.map((noteItem) => {
        return (
          <NoteTemplate noteItem={noteItem} notes={notes} setNotes={setNotes} />
        );
      })}
    </div>
  );
}
