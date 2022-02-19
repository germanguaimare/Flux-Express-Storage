import {Card, Button} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../actions"


const ItemCard = (props) => {
    const dispatch = useDispatch()
    return (
        <Card className="cardBody">
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary">Edit {props.title}</Button>
                <Button variant="danger" onClick={() => dispatch(actions.delete_item(props.index))}>Delete {props.title}</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCard