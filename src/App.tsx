import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import { NoteProps } from "./modules/Note";
import { nanoid } from "nanoid";
import "antd/dist/reset.css";
import { Typography } from "antd";
import axios from "axios";
export default function App() {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  async function getData() {
    try {
      const res = await axios.get("http://localhost:4343/todo");
      setNotes(res.data.data);
    } catch (err: any) {
      console.log(`from catch from get : ${err.message}`);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Typography.Title>Todo App </Typography.Title>
      <NoteList notes={notes} setNotes={setNotes} getData={getData} />
    </div>
  );
}

// // } // i can't write with this form in useEffect directly
// useEffect(() => {

//   axios.get("http://localhost:4343/todo").then((res) => {
//     setNotes(res.data.data);
//   });
// }, []);
