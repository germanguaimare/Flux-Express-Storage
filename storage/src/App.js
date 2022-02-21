import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as actions from "./actions"

import ItemCard from './components/itemCard';
import MyModal from "./components/modal"


import "./styles/index.css"

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h3>My store</h3>
      <p>Please log in</p>
    </div>
  );
}

export default App;
