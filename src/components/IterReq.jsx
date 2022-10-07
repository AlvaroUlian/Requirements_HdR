import { React, useState } from "react"
import { Button, Modal, Form, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import DataTableIter from "./DataTables/DataTableIter"
import { useEffect } from "react"

const IterReq = () => {
    useEffect(() => {
        localStorage.setItem("data-iter", JSON.stringify(iterRequerimientos))
    })

    function getDataFromLocalStorage() {
        const dataReq = localStorage.getItem("data-iter")
        if (dataReq) {
            return JSON.parse(dataReq)
        } else {
            return []
        }
    }

    const [acceptance, setAcceptance] = useState("")
    const [requirements, setRequirements] = useState("")
    const [reqGlobal, setReqGlobal] = useState("")
    const [edit, setEdit] = useState("")
    const [iterRequerimientos, setIterRequerimientos] = useState(getDataFromLocalStorage())
    const [show, setShow] = useState(false)
    const [datos, setDatos] = useState("Añadir Datos")
    const [validated, setValidated] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    function deleteHandler(reqId) {
        const filteredreq = iterRequerimientos.filter(
            (req) => req.id !== reqId,
        )
        setIterRequerimientos(filteredreq)
    }

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
                    reqGlobal,
                }

                const editreqIndex = iterRequerimientos.findIndex(
                    (req) => req.id === edit.id
                )

                const updatedData = [...iterRequerimientos]

                updatedData[editreqIndex] = newData
                setIterRequerimientos(updatedData)

                return cancelEditHandler()
            }

            setIterRequerimientos([
                ...iterRequerimientos,
                {
                    id: generateKey(),
                    acceptance,
                    requirements,
                    reqGlobal,
                },
            ])
            setDatos("Añadir datos")
            setAcceptance("")
            setRequirements("")
            setReqGlobal("")
            handleClose()
    }

    function handleModalShow() {
        handleShow()
        setDatos("Añadir datos")
        setAcceptance("")
        setRequirements("")
        setReqGlobal("")
    }

    function editHandler(req) {
        handleShow()
        setEdit(req)
        setDatos("Añadir datos")
        setAcceptance(req.acceptance)
        setRequirements(req.requirements)
        setReqGlobal(req.reqGlobal)
    }

    function cancelEditHandler() {
        setEdit({})
        setAcceptance("")
        setRequirements("")
        setReqGlobal("")
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
                <p><strong>Requerimientos por Iteración</strong></p>

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
                                    <Form.Label>Requerimiento Global Aasociado: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) =>
                                            setReqGlobal(e.target.value)
                                        }
                                        value={reqGlobal}
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
                        <th style={{width: 40}}>Requerimiento Global Aasociado</th>
                        <th style={{width: 5}}>Editar</th>
                    </tr>
                </thead>
                {iterRequerimientos.map((req) => (
                    <DataTableIter
                        key={req.id}
                        iterRequerimientos={req}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                    ></DataTableIter>
                ))}
            </Table>
        </>
    )
}

export default IterReq;