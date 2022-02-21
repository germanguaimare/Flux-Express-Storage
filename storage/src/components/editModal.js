import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import * as actions from "../actions"

const EditModal = (props) => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Cat
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Cat Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit((data) => dispatch(actions.editItem(data, props.index)))}>

                        <Form.Group className="row d-flex justify-content-center"
                            controlId="nameInput"
                        >
                            <Form.Label className="col">Cat Name</Form.Label>
                            <Form.Control className="col" type="text" placeholder={props.title}
                                {...register("newCatName")}
                            />
                        </Form.Group>

                        <Form.Group className="row d-flex justify-content-center" controlId="descriptionInput">
                            <Form.Label className="col">Cat Description</Form.Label>
                            <Form.Control className="col" type="text" placeholder={props.description}
                                {...register("newCatDescription")}
                            />
                        </Form.Group>

                        <Form.Group className="row d-flex justify-content-center" controlId="imageInput">
                            <Form.Label className="col">Cat Image Url</Form.Label>
                            <Form.Control className="col" type="text" placeholder={props.img}
                                {...register("newImgUrl")}
                            />
                        </Form.Group>

                        <hr></hr>

                        <div className="text-end">
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit"
                                onClick={handleClose}>
                                Save Changes
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditModal
