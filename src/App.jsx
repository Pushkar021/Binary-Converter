import { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [getval, setval] = useState("");
  const [getop, setop] = useState("");

  const handleclick = () => {
    main(getval);
  };

  const notify = () => {
    if (getop) {
      navigator.clipboard.writeText(getop); 
      toast.success("Copied to clipboard!"); 
    } else {
      toast.error("No binary output to copy!"); 
    }
  };

  function main(text) {
    let x = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2))
      .join(" ");
    setop(x);
  }

  return (
    <>
      <div className="main-container">
        <Toaster /> 
        <h1>Binary Converter</h1>
        <div>
          <input
            type="text"
            placeholder="Paste your text here..."
            onChange={(e) => setval(e.target.value)}
          />
        </div>
        <div>
          <textarea value={getop} readOnly />
        </div>
          <button onClick={notify}>Copy</button>
        <div>
          <button onClick={handleclick}>Convert</button>
        </div>
      </div>
    </>
  );
}

export default App;
