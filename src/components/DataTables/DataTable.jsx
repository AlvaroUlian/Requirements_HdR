import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { React } from "react";

const DataTable = ({ requerimientos, deleteHandler, editHandler }) => {
    return (
        <tbody>
            <tr>
                <td>{requerimientos.requirements}</td>
                <td>{requerimientos.acceptance}</td>
                <td>{requerimientos.state}</td>
                <td style = {{textAlign: 'center'}}>
                    <Button
                        variant="outline-success"
                        onClick={editHandler.bind(this, requerimientos)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={deleteHandler.bind(this, requerimientos.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>
            </tr>
        </tbody>
    );
};

export default DataTable;
