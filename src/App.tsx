import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import { NoteProps } from "./modules/Note";
import { nanoid } from "nanoid";
import "antd/dist/reset.css";
import { Typography } from "antd";
export default function App() {
  const [notes, setNotes] = useState<NoteProps[]>([
    {
      text: "text1",
      id: nanoid(),
    },
    {
      text: "text2",
      id: nanoid(),
    },
  ]);

  // useEffect(() =>{
  //   const saved = JSON.parse(localStorage.getItem("note-app-data"))
  //   if(saved){
  //     setNotes(saved)
  //   }
  // },[])

  // useEffect(() => {
  //   localStorage.setItem("note-app-data", JSON.stringify(notes));
  // }, [notes]);

  return (
    <div className="App">
      <Typography.Title>Note app </Typography.Title>
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
}
