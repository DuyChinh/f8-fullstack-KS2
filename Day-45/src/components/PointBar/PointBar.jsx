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
     // Xử lý sau khi kéo thả kết thúc (nếu cần)
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

  //find result
  useEffect(() => {
    setResult(Math.floor(Math.random() * value) + 1);
    setTimes(MAX_TIME);
  }, [value]);

  useEffect(() => {
    inputRef.current.value = "";
    // console.log(inputRef);
  }, [times])

  //handle submit
  const handleSubmit = (e) => {
    setTimes(times-1);
    e.preventDefault();
    console.log(result);
    if(inputValue < result) {
      toast.error("lớn hơn đi bạn ơi!");
    } else if(+inputValue === +result) { 
       toast.success("Chúc mừng bạn, IQ của bạn thật cao cường!!!");
    } else {
      toast.error("nhỏ hơn đi bạn ơi!");
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
          name="getNumber"
          id="number"
          onChange={handleChange}
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default PointBar