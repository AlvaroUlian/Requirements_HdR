import { React, useState } from "react"
import { Button, Modal, Form, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import DataTable from "./DataTables/DataTable"
import { useEffect } from "react"

const Requirements = () => {
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(requerimientos))
    })

    function getDataFromLocalStorage() {
        const dataReq = localStorage.getItem("data")
        if (dataReq) {
            return JSON.parse(dataReq)
        } else {
            return []
        }
    }

    const [acceptance, setAcceptance] = useState("")
    const [requirements, setRequirements] = useState("")
    const [state, setState] = useState("")
    const [edit, setEdit] = useState("")
    const [requerimientos, setRequerimientos] = useState(getDataFromLocalStorage())
    const [show, setShow] = useState(false)
    const [datos, setDatos] = useState("Añadir Datos")
    const [validated, setValidated] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    function deleteHandler(reqId) {
        const filteredreq = requerimientos.filter(
            (req) => req.id !== reqId,
        )
        setRequerimientos(filteredreq)
    }

    // fungsi untuk memasukan data dalam field untuk pengecekan form
    

    // Fungsi untuk mengerate data key
    function generateKey() {
        return Date.now()
    }

    function saveData(e) {
        e.preventDefault()
        
            setValidated(true)
            if (edit.id) {
                const newData = {
                    id: edit.id,
                    acceptance,
                    requirements,
                    state,
                }

                const editreqIndex = requerimientos.findIndex(
                    (req) => req.id === edit.id
                )

                const updatedData = [...requerimientos]

                updatedData[editreqIndex] = newData
                setRequerimientos(updatedData)

                return cancelEditHandler()
            }

            setRequerimientos([
                ...requerimientos,
                {
                    id: generateKey(),
                    acceptance,
                    requirements,
                    state,
                },
            ])
            setDatos("Añadir datos")
            setAcceptance("")
            setRequirements("")
            setState("")
            handleClose()
    }

    function handleModalShow() {
        handleShow()
        setDatos("Añadir datos")
        setAcceptance("")
        setRequirements("")
        setState("")
    }

    function editHandler(req) {
        handleShow()
        setEdit(req)
        setDatos("Añadir datos")
        setAcceptance(req.acceptance)
        setRequirements(req.requirements)
        setState(req.state)
    }

    function cancelEditHandler() {
        setEdit({})
        setAcceptance("")
        setRequirements("")
        setState("")
        handleClose()
    }

    return (
        <>
            <div className="form-create">
                <Button
                    variant="success"
                    className="mt-5"
                    onClick={handleModalShow}
                >
                    Añadir datos <FontAwesomeIcon icon={faCirclePlus} />
                </Button>
                <p><strong>Requerimientos globales</strong></p>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{datos}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated}>
                            
                            <Form.Group className="mb-3 mt-3">
                                <Form.Label>Requerimiento: </Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => setRequirements(e.target.value)}
                                    value={requirements}
                                    required
                                />
                                <Form.Group className="mb-3 mt-3" role="form">
                                <Form.Label>Criterio de Aceptación: </Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => setAcceptance(e.target.value)}
                                    value={acceptance}
                                    required
                                />
                            </Form.Group>
                                <Form.Group className="mb-3 mt-3">
                                    <Form.Label>Estado: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) =>
                                            setState(e.target.value)
                                        }
                                        value={state}
                                        required
                                    />
                                </Form.Group>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {edit.id ? (
                            <Button
                                variant="secondary"
                                onClick={cancelEditHandler}
                            >
                                Cerrar
                            </Button>
                        ) : (
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        )}
                        <Button variant="success" onClick={saveData}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr style = {{textAlign: 'center'}}>
                        <th style={{width: 40}}>Requerimiento</th>
                        <th style={{width: 40}}>Criterio de Aceptación</th>
                        <th style={{width: 40}}>Estado</th>
                        <th style={{width: 5}}>Editar</th>
                    </tr>
                </thead>
                {requerimientos.map((req) => (
                    <DataTable
                        key={req.id}
                        requerimientos={req}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    ></DataTable>
                ))}
            </Table>
        </>
    )
}

export default Requirements;