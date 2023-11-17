// import MAX_TIME from "./components/testGame"
// import { RANGE_NUMBER } from "./components/testGame";
import "./assets/App.css"
import DevMode from "./components/DevMode/DevMode";
import TestGame from "./components/TestGame";
const App = ()=> {
  return (
    <>
      <div className="container">
        <div className="welcome">
          <h1>Chào mừng bạn đến với trò chơi đoán số</h1>
          {/* <h2>
            Còn {MAX_TIME}/{MAX_TIME}
          </h2>
          <h3>Bạn cần tìm 1 số từ 1 đến {RANGE_NUMBER}</h3> */}
          <TestGame/>
        </div>
        <DevMode/>
        {/* <PointBar/> */}
      </div>
    </>
  );
}

export default App