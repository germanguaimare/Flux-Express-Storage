import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import SessionCard from "./components/sessionCard";
import * as actions from "./actions"


import "./styles/index.css"

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App container-full py-3">
      <div className="d-flex justify-content-center align-items-center mt-5">
      <SessionCard />
      </div>
    </div>
  );
}

export default App;
