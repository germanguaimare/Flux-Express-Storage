import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap"
import kitty from "../images/kitty.jpg"
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
            <Button variant="primary" onClick={handleShow}>
                Add new cat
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Cat Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit((data) => dispatch(actions.postItems(data)))}>

                        <Form.Group className="row d-flex justify-content-center"
                            controlId="nameInput"
                        >
                            <Form.Label className="col">Cat Name</Form.Label>
                            <Form.Control className="col" type="text" placeholder="New cat name"
                                {...register("newCatName")}
                            />
                        </Form.Group>

                        <Form.Group className="row d-flex justify-content-center" controlId="descriptionInput">
                            <Form.Label className="col">Cat Description</Form.Label>
                            <Form.Control className="col" type="text" placeholder="New cat description"
                                {...register("newCatDescription")}
                            />
                        </Form.Group>

                        <Form.Group className="row d-flex justify-content-center" controlId="imageInput">
                            <Form.Label className="col">Cat Image Url</Form.Label>
                            <Form.Control className="col" type="text" placeholder="Url for new cat's image"
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
                                Save New Cat
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MyModal


