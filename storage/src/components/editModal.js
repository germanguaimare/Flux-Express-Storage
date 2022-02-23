import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import * as actions from "../actions"
import "../styles/modal.css"

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
                    <p><strong>Remember to add a URL for your cat's image</strong></p>
                    <Form onSubmit={handleSubmit((data) => dispatch(actions.editItem(data, props.index)))}>
                    <div className="container form-group mb-1">
                        <Form.Group className="row d-flex justify-content-center align-items-center"
                            controlId="nameInput"
                        >
                            <Form.Label className="col-4">Cat Name</Form.Label>
                            <Form.Control className="col" type="text" placeholder={props.title}
                                {...register("newCatName")}
                            />
                        </Form.Group>
                    </div>
                    <div className="container form-group mb-1">
                        <Form.Group className="row d-flex justify-content-center align-items-center" controlId="descriptionInput">
                            <Form.Label className="col-4">Cat Description</Form.Label>
                            <Form.Control className="col" type="text" placeholder={props.description}
                                {...register("newCatDescription")}
                            />
                        </Form.Group>
                        </div>
                        <div className="container form-group mb-1">
                        <Form.Group className="row d-flex justify-content-center align-items-center" controlId="imageInput">
                            <Form.Label className="col-4">Cat Image Url</Form.Label>
                            <Form.Control className="col" type="text" placeholder={props.img}
                                {...register("newImgUrl")}
                            />
                        </Form.Group>
                        </div>
                        <hr></hr>

                        <div className="text-end">
                        <Button className="mx-1"variant="primary" type="submit"
                                onClick={handleClose}>
                                Save Changes
                            </Button>
                            <Button className="mx-1" variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditModal
