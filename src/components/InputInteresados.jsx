import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";

function InputInteresados() {
  useEffect(() => {
    const json = localStorage.getItem("notes");
    const savedNotes = JSON.parse(json);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const [notes, setNotes] = useState([]);
  const [noteEditing, setNoteEditing] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      text: e.target.note.value,
    };
    setNotes([...notes, newNote]);
    e.target.note.value = "";
  };

  const deleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
  };

  return (
    <>
      <Form onSubmit={addNote}>
        <Row className="align-items-center">
          <Col>
            <Form.Label htmlFor="inlineFormInput" visuallyHidden type="Submit">
              Name
            </Form.Label>
            <Form.Control type="text" name="note" />
          </Col>
          <Col xs="auto">
            {notes.map((note) => (
              <div key={note.id}>
                <div>{note.text}</div>
              </div>
            ))}
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default InputInteresados;
