import { Card, Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router"
import { useForm } from "react-hook-form";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../actions"

const SessionCard = () => {


    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="container-fluid text-center">
            <div className="animate__animated animate__bounce" id="titles">
                <h1>Welcome to the Cat Bodega</h1>
                <h3>Please login and start storing your favorite internet cats</h3>
            </div>
            <div className="d-flex flex-column animate__animated animate__fadeIn animate__delay-1s">
                <div className="d-flex flex-column align-items-center">
                    <Card className="sessionCardBody">
                        <Card.Body>
                            <Form onSubmit={handleSubmit((data) => {
                                dispatch(actions.logIn(data, navigate, dispatch))
                            })}>
                                <div className="container form-group mb-1">
                                    <Form.Group className="row d-flex align-items-center"
                                        controlId="usernameInput"
                                    >
                                        <Form.Label className="col-4"><strong>Username</strong></Form.Label>
                                        <Form.Control className="col" type="text" placeholder="Your username"
                                            {...register("username")}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="form-group">
                                    <Form.Group className="row d-flex justify-content-center align-items-center"
                                        controlId="passwordInput"
                                    >
                                        <Form.Label className="col-4"><strong>Password</strong></Form.Label>
                                        <Form.Control className="col" type="text" placeholder="Your password"
                                            {...register("password")}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="buttonGroup d-flex justify-content-center">
                                    <Button className="sessionButton" variant="success" type="submit">Log in</Button>
                                    <Button className="sessionButton" variant="primary" onClick={() => setShow(!show)}>Create account</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                    {show ?
                        <Card className="sessionCardBody mx-2 animate__animated animate__slideInUp mt-2">
                            <Card.Body>
                                <Card.Text>
                                    <strong>Please choose a Username and Password</strong>
                                </Card.Text>

                                <Form onSubmit={handleSubmit((data) => {
                                    //console.log(data)
                                    dispatch(actions.createUser(data, setShow))
                                })}>
                                    <div className="container form-group mb-1">
                                        <Form.Group className="row d-flex justify-content-center align-items-center"
                                            controlId="newUsername"
                                        >
                                            <Form.Label className="col-4"><strong>Username</strong></Form.Label>
                                            <Form.Control className="col" type="text" placeholder="Type your username"
                                                {...register("newUsername")}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="container form-group mb-1">
                                        <Form.Group className="row d-flex justify-content-center align-items-center"
                                            controlId="newPasswordInput"
                                        >
                                            <Form.Label className="col-4"><strong>Password</strong></Form.Label>
                                            <Form.Control className="col" type="text" placeholder="Type your password"
                                                {...register("newPassword")}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="buttonGroup d-flex justify-content-center">
                                        <Button className="sessionButton" variant="primary" type="submit">Create User</Button>
                                        <Button className="sessionButton" id="newAccount" variant="danger" onClick={() => {
                                            setShow(false)
                                        }}>Close</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card> : ""}
                </div>
            </div>
        </div>
    )
}

export default SessionCard