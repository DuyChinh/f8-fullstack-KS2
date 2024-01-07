import "./PointBar.css"
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PointBar = () => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);
  const [times, setTimes] = useState(0);
  const [arr, setArr] = useState([]);
  const barRef = useRef(null);
  const inputRef = useRef(null);
  // console.log(barRef);
  const handleDrag = (e) => {
    const bar = barRef.current;
    const barWidth = bar.offsetWidth;
    const barLeft = bar.getBoundingClientRect().left;
    const pos = e.clientX - barLeft;
    const newValue = Math.round((pos / barWidth) * 2048);
    setValue(newValue);
    // onValueChange(newValue);
  };

  

  const handleDragEnd = () => {
  };

  const turnOnHover = () => {
    setHover(true);
  };
  const turnOffHover = () => {
    setHover(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  let MAX_TIME = Math.ceil(Math.log2(value));
  if (MAX_TIME === -Infinity) {
    MAX_TIME = 0;
  }
  // inputRef.current.focus();
  //find result
  useEffect(() => {
    setResult(Math.floor(Math.random() * value) + 1);
    setTimes(MAX_TIME);
    inputRef.current.focus();
    toast.success("Hello guys, let's playing game");
    // console.log(arr);
      localStorage.setItem("data", JSON.stringify(arr));
    
    setArr([]);
  }, [value]);

  useEffect(() => {
    inputRef.current.value = "";
    // console.log(inputRef);
  }, [times])
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(result);
    if(inputValue < value) {
      setTimes(times - 1);
      const timePlay = MAX_TIME - times + 1;
      setArr([...arr, { time: timePlay, value: inputValue }]);
      
      if(inputValue < result) {
        toast.error("lớn hơn đi bạn ơi!");
      } else if(+inputValue === +result) { 
          setTimes(0);
          toast.success("Chúc mừng bạn, IQ của bạn thật cao cường!!!");
      } else {
        toast.error("nhỏ hơn đi bạn ơi!");
      }
    }
    
  }
  
  return (
    <>
      <h2>
        Còn {times >= 0 ? times : 0}/{MAX_TIME} lần
      </h2>
      <h3>Bạn cần tìm 1 số từ 1 đến {value}</h3>
      <div
        className="point-bar"
        ref={barRef}
        onClick={handleDrag}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDrag}
        onMouseEnter={turnOnHover}
        onMouseLeave={turnOffHover}
      >
        <div
          className="process-bar"
          style={{ width: `${(value / 2048) * 100}%` }}
        ></div>
        <div
          className="dot-bar"
          style={{ left: `${(value / 2048) * 100}%` }}
        ></div>
        {hover ? (
          <div
            className="display-value"
            style={{ left: `${(value / 2048) * 100 - 2}%` }}
          >
            {value}
          </div>
        ) : null}
      </div>

      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="number"
          id="number"
          onChange={handleChange}
        />
      </form>
      {times === 0 && result!=1 && (
        <>
          <table className="table">
            <tr>
              <th>Lần</th>
              <th>Số bạn nhập</th>
            </tr>
            {arr.map((item, index) => (
            <tr key={index}>
              <th>{item.time}</th>
              <th>{item.value}</th>
            </tr>
            ))}
          </table>
          { <h2>Kết quả là: {result}</h2>}
        </>
      )}
      {/* <div>
        <input type="range" min="0" max="2048" step={1}/>
      </div> */}
      {/* {times === 0 && <Table />} */}
      {/* <Table/> */}
      <ToastContainer />
    </>
  );
};

export default PointBar