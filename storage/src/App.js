import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import ItemCard from './components/itemCard';
import MyModal from "./components/modal"
import kitty from "./images/kitty.jpg"

import "./styles/index.css"

function App() {
  useEffect(()=>{})
  const myItems = useSelector(state => state.items)

  return (
    <div className="App">
      <h3>My store</h3>
      <div className="container-fluid d-flex">
        {myItems.map((key, index) =>
          <ItemCard
            index = {index}
            key={index}
            img={kitty}
            title={myItems[index].name}
            description={myItems[index].description} />)}
      </div>
      <MyModal />
    </div>
  );
}

export default App;
