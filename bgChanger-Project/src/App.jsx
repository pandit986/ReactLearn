import { useState } from "react";

function App() {
  let colors = [
    {
      color: "bg-red-800",
      text: "Red",
      textColor: "white",
    },
    {
      color: " bg-green-500",
      text: "Green",
      textColor: "white",
    },
    {
      color: "bg-blue-500",
      text: "Blue",
      textColor: "white",
    },
    {
      color: "bg-gray-500",
      text: "Gray",
      textColor: "white",
    },
    {
      color: "bg-yellow-500",
      text: "Yellow",
      textColor: "white",
    },
    {
      color: "bg-pink-500",
      text: "Pink",
      textColor: "black",
    },

    {
      color: "bg-purple-500",
      text: "Purple",
      textColor: "black",
    },
  ];
  let [currentColor, setCurrentColor] = useState(colors[0]);
  return (
    <>
      <div
        className={`h-screen w-screen ${currentColor.color} flex items-end `}
      >
        <div
          className={` w-[70%]  flex flex-row mx-auto bg-white justify-center gap-4 items-center rounded-full py-2`}
        >
          {colors.map((color) => {
            return (
              <button
                onClick={() => {
                  setCurrentColor(color);
                }}
                key={color.color}
                type="button"
                className={`rounded-md ${color.color} px-3 py-2 text-sm font-semibold rounded-full border-black border-2 text-${color.textColor}`}
              >
                {color.text}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
