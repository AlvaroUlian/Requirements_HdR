import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

const Interesados = () => {
  const [field, setField] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("field");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input field
    localStorage.setItem("field", JSON.stringify(field));
  }, [field]);

  return (
    <Form>
      <Form.Control
        type="text"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
    </Form>
  );
};

export default Interesados;
