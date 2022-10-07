import Table from "react-bootstrap/Table";

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width: 10 }}>#</th>
          <th style={{width: 90 }}>%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>
            Acumulado de cambios (modificaciones, eliminación o agregado) de
            requerimientos globales en las iteraciones del proyecto incluyendo
            esta iteración.
            </strong>
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>
          <strong>  
            Acumulado de cambios de requerimientos globales en las iteraciones
            del proyecto / cantidad de requerimientos de iteración inicial
            (expresado en %). En el caso de superar el valor meta (35%), se debe
            generar una incidencia en Mantis - No aplica a iteración N°1.{" "}
            </strong>
          </td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;
