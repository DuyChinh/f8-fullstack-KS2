import "./PointBar.css"
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PointBar = ({ onValueChange }) => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);
  const barRef = useRef(null);
  // console.log(barRef);
  const handleDrag = (e) => {
    const bar = barRef.current;
    const barWidth = bar.offsetWidth;
    const barLeft = bar.getBoundingClientRect().left;
    const pos = e.clientX - barLeft;
    const newValue = Math.round((pos / barWidth) * 2048);
    setValue(newValue);
    onValueChange(newValue);
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

  useEffect(() => {
    setResult(Math.floor(Math.random() * value) + 1);
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(result);
    if(inputValue < result) {
      // console.log("MIN");
      toast.success("lớn hơn đi bạn ơi!");
    } else if(+inputValue === +result) { 
      // console.log("MAX");
       toast.success("Chúc mừng bạn, IQ của bạn thật cao cường!!!");
    } else {
      toast.success("nhỏ hơn đi bạn ơi!");
    }
  }
  return (
    <>
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
          <input type="text" name="getNumber" id="number" onChange={handleChange}/>
      </form>
      <ToastContainer/>
    </>
  );
};

export default PointBar