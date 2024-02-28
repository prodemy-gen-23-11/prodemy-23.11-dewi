import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { DECREMENT, INCREMENT } from "../redux/Types";

const AboutPage = (props) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React-Redux and useSelector Demo</h1>
      <p>Count: {count}</p>
      <button className="btn" onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button className="btn m-4" onClick={() => dispatch({ type: DECREMENT})}>Decrement</button>
    </div>
  );
   };
   
   export default AboutPage;