import "./App.css";
import {useState} from "react";

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[400px] h-[200px] bg-green-200 flex flex-col justify-center items-center gap-4 rounded-2xl shadow-lg">
        <div className="flex gap-3">
          <button
            className="w-[110px] h-[36px] bg-red-600 text-white rounded-lg shadow-md"
            onClick={()=>{
              console.log("Decrement clicked")
              setCount(count - 1)
            }}
          >
            Decrement
          </button>

          <h1 className="w-[50px] h-[36px] text-xl text-center">
            {count}
          </h1>

          <button
            className="w-[110px] h-[36px] bg-blue-600 text-white rounded-lg shadow-md"
            onClick={
              ()=>{
                setCount(count + 1)
              }
            }
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
