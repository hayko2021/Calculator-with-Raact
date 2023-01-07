import "./Calculator.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");

  const clickHandler = (e) => {
    setState(state.concat(e.target.value));
  };
  const clearHandler = (e) => {
    setState("");
  };

  const Calculate = () => {
    setState(eval(state).toString());
  };
  return (
    <>
    
      <div className="calc">
      <div style={{color: 'white', fontSize: '30px'}}>Calculator</div>
        <input type="text" placeholder="0" id="answer" value={state} />
        <input
          type="button"
          value={"9"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"8"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"7"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"6"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"5"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"4"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"3"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"2"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"1"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"0"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"."}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"+"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"-"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"*"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"/"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"%"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"delete"}
          className="deletebutton"
          onClick={clearHandler}
        />
        <input
          type="button"
          value={"="}
          className="buttonequile"
          onClick={Calculate}
        />
      </div>
    </>
  );
}
export default App;