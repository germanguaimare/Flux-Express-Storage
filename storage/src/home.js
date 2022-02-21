import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as actions from "./actions"

import ItemCard from './components/itemCard';
import MyModal from "./components/modal"


import "./styles/index.css"

function Home() {
  const dispatch = useDispatch()
  const myItems = useSelector(state => state.items)
  const getItems = () => {
    dispatch(actions.fetchItems())
  }

  useEffect(() => {
    getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []) 

  return (
    <div className="home">
      <h3>My store</h3>
      <div className="container-fluid">
        <div className="row d-flex">
        {myItems.map((key, index) =>
          <ItemCard
            index = {index}
            key={index}
            img={myItems[index].image}
            title={myItems[index].name}
            description={myItems[index].description} />)}
            </div>
      </div>
      <MyModal />
    </div>
  );
}

export default Home;