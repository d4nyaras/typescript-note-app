import { NoteProps } from "../modules/Note";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import { CheckOutlined } from "@ant-design/icons";
import { useState } from "react";
type NoteTemplateProp = {
  noteItem: NoteProps;
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  getData: () => Promise<void>;
};
export default function NoteTemplate({
  noteItem,
  notes,
  setNotes,
  getData,
}: NoteTemplateProp) {
  // const handleDelete = (id: number) => {
  //   setNotes(notes.filter((note) => note.id !== id));
  // };

  async function handleDone(id: number) {
    try {
      const res = await axios.patch(`http://localhost:4343/todo/${id}`, {
        isDone: true,
      });
      getData();
    } catch (err: any) {
      console.log(`catch error from handleDone ${err.message}`);
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await axios.delete(`http://localhost:4343/todo/${id}`);
      getData();
    } catch (err: any) {
      console.log(`catch from handleDelete ${err.message} `);
    }
  }

  return (
    <div className="NoteTemplate">
      {noteItem.isDone ? (
        <div className="NoteListText">
          <h3 style={{ textDecoration: "line-through" }}>{noteItem.title}</h3>
          <p style={{ textDecoration: "line-through" }}>
            {noteItem.description}
          </p>
        </div>
      ) : (
        <div className="NoteListText">
          <h3>{noteItem.title}</h3>
          <p>{noteItem.description}</p>
        </div>
      )}

      <div className="NoteListButton">
        <CheckOutlined id="doneIcon" onClick={() => handleDone(noteItem.id)} />
        <CloseOutlined
          id="deleteIcon"
          onClick={() => handleDelete(noteItem.id)}
        />
      </div>
    </div>
  );
}
