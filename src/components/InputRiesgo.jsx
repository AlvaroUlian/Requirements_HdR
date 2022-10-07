import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

const Riesgos = () => {
  const [fieldRisk, setFieldRisk] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("fieldRisk");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input fieldRisk
    localStorage.setItem("fieldRisk", JSON.stringify(fieldRisk));
  }, [fieldRisk]);

  return (
    <Form>
          <Form.Control
            type="text"
            value={fieldRisk}
            onChange={(e) => setFieldRisk(e.target.value)}
          />

    </Form>
  );
};

export default Riesgos;
