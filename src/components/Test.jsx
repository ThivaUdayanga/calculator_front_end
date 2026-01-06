import { useState } from "react";

export default function Test(){

    const [count, setCount] = useState(0)
  const [states, setStates] = useState("Off")

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
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
      <div className="w-[400px] h-[200px] shadow-2xs bg-green-200 flex flex-col rounded-2xl justify-center items-center">
            <span className="h-[30px] text-2xl font-bold">
              {states}
            </span>
            <div className="w-full h-[50px] justify-center flex flex-row gap-7">
              <button className="h-full w-[100px] bg-red-600 text-white rounded-lg" onClick={
                ()=>{
                  setStates("Off")
                }
              }>Off</button>
              <button className="h-full w-[100px] bg-green-700 text-white rounded-lg" onClick={
                ()=>{
                  setStates("On")
                }
              }>On</button>
            </div>
      </div>
    </div>
    
  );
}