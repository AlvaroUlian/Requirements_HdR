import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { React } from "react";

const DataTable_iter = ({ iterRequerimientos, deleteHandler, editHandler }) => {
    return (
        <tbody>
            <tr>
                <td>{iterRequerimientos.requirements}</td>
                <td>{iterRequerimientos.acceptance}</td>
                <td>{iterRequerimientos.state}</td>
                <td style = {{textAlign: 'center'}}>
                    <Button
                        variant="outline-success"
                        onClick={editHandler.bind(this, iterRequerimientos)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={deleteHandler.bind(this, iterRequerimientos.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>
            </tr>
        </tbody>
    );
};

export default DataTable_iter;
