// import MAX_TIME from "./components/testGame"
// import { RANGE_NUMBER } from "./components/testGame";
import "./assets/App.css"
import DevMode from "./components/DevMode/DevMode";
import PointBar from "./components/PointBar/PointBar";
const App = ()=> {
  return (
    <>
      <div className="container">
        <div className="welcome">
          <h1>Chào mừng bạn đến với trò chơi đoán số</h1>
          <PointBar/>
        </div>
        <DevMode/>
      </div>
    </>
  );
}

export default App