
import "./assets/App.css"
import DevMode from "./components/DevMode/DevMode";
import PointBar from "./components/PointBar/PointBar";
import Slider2 from "./components/Slider/Slider2";
const App = ()=> {
  return (
    <>
      <div className="container">
        <div className="welcome">
          <h1>Chào mừng bạn đến với trò chơi đoán số</h1>

          <PointBar />
        </div>
        <DevMode />
      </div>
      <Slider2 />
    </>
  );
}

export default App