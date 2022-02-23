import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux"
import * as actions from "./actions"

import ItemCard from './components/itemCard';
import MyModal from "./components/modal"
import { Button } from "react-bootstrap"


import "./styles/index.css"

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const myItems = useSelector(state => state.items)
  const activeToken = JSON.parse(localStorage.getItem("tokenInfo"))


  const getItems = () => {
    dispatch(actions.fetchItems())
  }


  useEffect(() => {
    
    getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="home text-center pt-3">
      <h2 >Your own cat bodega</h2> 
      <h4 className="mb-3">Gotta keep those kittys safe</h4>
      <div className="container">
        <div className="row d-flex">
          {activeToken? 
            myItems.map((key, index) =>
              <ItemCard
                index={index}
                key={index}
                img={myItems[index].image}
                title={myItems[index].name}
                description={myItems[index].description} />) : navigate("/")}

        </div>
      </div>
      <div className="mt-3 pb-5">
      <MyModal className="sessionButton" />
      <Button className="sessionButton" variant="warning" onClick={() => {
        alert("Goodbye")
        dispatch(actions.logOut(navigate))
        }}>Log out</Button>
        </div>
    </div>
  );
}

export default Home;