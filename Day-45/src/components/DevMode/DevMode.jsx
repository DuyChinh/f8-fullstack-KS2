import { useEffect, useState } from "react"
import "./DevMode.css"
function DevMode() {
    const [mode, setMode] = useState(true);
    const handleClick = () => {
        setMode(!mode);
    }
    useEffect(() => {
        // mode
        //   ? (document.body.style.backgroundColor = "#fff")
        //   : (document.body.style.backgroundColor ="#333");
        if (mode) {
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
            <i class="fa-solid fa-moon"></i>
          ) : (
            // eslint-disable-next-line react/no-unknown-property
            <i class="fa-solid fa-sun"></i>
          )}
        </button>
      </div>
    );
}

export default DevMode