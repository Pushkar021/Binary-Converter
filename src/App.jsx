import { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [getval, setval] = useState("");
  const [getop, setop] = useState("");
  const [getleft, setleft] = useState("Char");
  const [getright, setright] = useState("Binary");

  const handleclick = () => {
    main(getval);
  };

  const notify = () => {
    
    if (getop) {
         navigator.clipboard.writeText(getop);
         toast.success("Copied to clipboard!");
       }
     else { toast.error("No binary output to copy!");
    }
  };

  function main(text) {
     console.log(getleft);
    console.log(getright);
     if (getleft == getright) {
      toast.error("Can not Convert! ");
     }
     else{
    if(getleft=="Char"){
      let x = text.split("").map((char)=>char.charCodeAt(0).toString(2)).join(" ")
      setop(x)
    } 
    else if(getleft=="Binary"){
      let x = text
        .trim()
        .split(" ")
        .map((bin) => String.fromCharCode(parseInt(bin, 2))).join("");  
        setop(x)
        
    }
    
    }
    
  }

  return (
    <>
      <div className="main-container">
        <Toaster />
        <h1>Binary Converter</h1>
        <div>
          <select onChange={(e) => setleft(e.target.value)}>
            <option selected>Char</option>
            <option>Binary</option>
          </select>
          to
          <select onChange={(e) => setright(e.target.value)}>
            <option selected>Binary</option>
            <option>Char</option>
          </select>
        </div>
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
        <div class="github">
          <a
            href="https://github.com/Pushkar021/Binary-Converter"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
