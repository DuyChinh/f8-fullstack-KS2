import { useEffect, useState } from "react";
import "./DevMode.css";

function DevMode() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") === "light" || false
  );

  const handleClick = () => {
    const newMode = !mode;
    setMode(newMode);
    localStorage.setItem("mode", newMode ? "light" : "dark");
  };

  useEffect(() => {
    const modePage = localStorage.getItem("mode");

    if (modePage === "light") {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    } else {
      document.body.style.backgroundColor = "#191d1e";
      document.body.style.color = "#fff";
    }
  }, [mode]);

  return (
    <div>
      <button onClick={handleClick} className="btn-mode">
        {mode ? (
          // eslint-disable-next-line react/no-unknown-property
          <i className="fa-solid fa-moon"></i>
        ) : (
          // eslint-disable-next-line react/no-unknown-property
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
    </div>
  );
}

export default DevMode;
