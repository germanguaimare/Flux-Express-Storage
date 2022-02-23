import {Card, Button} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import EditModal from "./editModal"
import * as actions from "../actions"
import "../styles/itemCard.css"


const ItemCard = (props) => {
    const dispatch = useDispatch()
    return (
        <Card className="cardBody col-sm-3 px-0 mx-1">
            <Card.Img className="card-img-top" variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <EditModal 
                    className="sessionButton"
                    title = {props.title}
                    description = {props.description}
                    img = {props.img}
                    index = {props.index}
                />
                <Button className="sessionButton" variant="danger" onClick={() => dispatch(actions.delete_item(props.index))}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCard