import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap"
import kitty from "../images/kitty.jpg"
import "../styles/modal.css"
import { useDispatch } from "react-redux";
import * as actions from "../actions"

const MyModal = () => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newCat, setNewCat] = useState({ name: "", description: "", image: kitty })
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add new cat
            </Button>

            <Modal show={show} class="modal-dialog modal-dialog-centered" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Here goes your new cat info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p><strong>Remember to get a URL for your new cat's image</strong></p>
                    <Form onSubmit={handleSubmit((data) => dispatch(actions.postItems(data)))}>
                    <div className="container form-group mb-1">
                        <Form.Group className="row d-flex justify-content-center align-items-center"
                            controlId="nameInput"
                        >
                            <Form.Label className="col-4">Cat Name</Form.Label>
                            <Form.Control className="col" type="text" placeholder="New cat name"
                                {...register("newCatName")}
                            />
                        </Form.Group>
                    </div>
                    <div className="container form-group mb-1">
                        <Form.Group className="row d-flex justify-content-center align-items-center" controlId="descriptionInput">
                            <Form.Label className="col-4">Cat Description</Form.Label>
                            <Form.Control className="col" type="text" placeholder="New cat description"
                                {...register("newCatDescription")}
                            />
                        </Form.Group>
                        </div>
                        <div className="container form-group mb-1">
                        <Form.Group className="row d-flex justify-content-center align-items-center" controlId="imageInput">
                            <Form.Label className="col-4">Cat Image Url</Form.Label>
                            <Form.Control className="col" type="text" placeholder="Url for new cat's image"
                                {...register("newImgUrl")}
                            />
                        </Form.Group>
                        </div>
                        <hr></hr>

                        <div className="text-end">
                            <Button className="mx-1" variant="primary" type="submit"
                                onClick={handleClose}>
                                Save New Cat
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

export default MyModal


