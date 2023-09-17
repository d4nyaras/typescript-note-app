import { useState, useEffect } from "react";
import { NoteProps } from "../modules/Note";
import { nanoid } from "nanoid";
import { PlusOutlined } from "@ant-design/icons";
import { message } from "antd";
import axios from "axios";
import { Input, Typography, Form } from "antd";
type NoteAddProp = {
  notes: NoteProps[];
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>;
  getData: () => Promise<void>;
};
export default function NoteAdd({ notes, setNotes, getData }: NoteAddProp) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  async function postData(e: any) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4343/todo", {
        title: title,
        description: description,
      });
      getData();
      setDescription("");
      setTitle("");
    } catch (err: any) {
      console.log(`catch error from noteAdd: ${err.message}`);
    }
  }

  const { TextArea } = Input;

  return (
    <div className="NoteAdd">
      <Form>
        <Form.Item>
          <Typography.Text>Title</Typography.Text>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="write title here..."
          />
        </Form.Item>
        <Form.Item>
          <Typography.Text>description</Typography.Text>
          <TextArea
            placeholder="write description here..."
            allowClear
            style={{
              height: "120",
              resize: "none",
            }}
            showCount
            maxLength={250}
            className="AddNoteTextArea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextArea>
        </Form.Item>
        <div id="pluIcon">
          <PlusOutlined className="plusIcon" onClick={postData} />
        </div>
      </Form>
    </div>
  );
}
// <SearchOutlined />
// const handleAdd = () => {
//   // const newDate = new Date().toString;
//   const newId = nanoid();
//   const newNote: {
//     id: number;
//     description: string;
//     title: string;
//     isDone: boolean;
//   } = {
//     isDone: false,
//     id: 89,
//     title: title,
//     description: description,
//   };

//   if (description.trim().length > 0) {
//     const newObj = [...notes, newNote];
//     setNotes(newObj);
//     setDescription("");
//     setTitle("");
//   } else {
//     message.error("please inter your note");
//   }
// };
